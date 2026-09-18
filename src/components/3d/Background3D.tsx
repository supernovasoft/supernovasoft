import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '@/components/theme-provider';
import * as THREE from 'three';

const NODE_COUNT = 46;
const BOUNDS = { x: 20, y: 14, z: 10 };
const MAX_LINK_DISTANCE = 6;
const MAX_LINKS_PER_NODE = 3;
const PULSE_COUNT = 10;

type Link = [number, number];

function generateNetwork() {
  const nodes: THREE.Vector3[] = Array.from({ length: NODE_COUNT }, () =>
    new THREE.Vector3(
      (Math.random() - 0.5) * BOUNDS.x * 2,
      (Math.random() - 0.5) * BOUNDS.y * 2,
      (Math.random() - 0.5) * BOUNDS.z * 2 - 6
    )
  );

  const links: Link[] = [];
  const linkCount = new Array(NODE_COUNT).fill(0);

  for (let i = 0; i < NODE_COUNT; i++) {
    const candidates = [];
    for (let j = 0; j < NODE_COUNT; j++) {
      if (i === j) continue;
      const distance = nodes[i].distanceTo(nodes[j]);
      if (distance < MAX_LINK_DISTANCE) candidates.push([j, distance] as const);
    }
    candidates.sort((a, b) => a[1] - b[1]);

    for (const [j] of candidates) {
      if (linkCount[i] >= MAX_LINKS_PER_NODE) break;
      if (linkCount[j] >= MAX_LINKS_PER_NODE) continue;
      if (links.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) continue;
      links.push([i, j]);
      linkCount[i]++;
      linkCount[j]++;
    }
  }

  return { nodes, links };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return reduced;
}

function usePointer(reducedMotion: boolean) {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;
    const handler = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, [reducedMotion]);

  return pointer;
}

// Glowing network nodes, drawn as one instanced draw call
function NetworkNodes({ nodes, color, reducedMotion }: { nodes: THREE.Vector3[]; color: string; reducedMotion: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    nodes.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [nodes, dummy]);

  useFrame((state) => {
    if (reducedMotion) return;
    const time = state.clock.getElapsedTime();
    nodes.forEach((pos, i) => {
      const scale = 0.7 + Math.sin(time * 1.5 + i * 0.7) * 0.3;
      dummy.position.copy(pos);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.85} />
    </instancedMesh>
  );
}

// Connections between nearby nodes, drawn as one line-segments draw call
function NetworkLinks({ nodes, links, color }: { nodes: THREE.Vector3[]; links: Link[]; color: string }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(links.length * 6);
    links.forEach(([a, b], i) => {
      arr.set([nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z], i * 6);
    });
    return arr;
  }, [nodes, links]);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.14} />
    </lineSegments>
  );
}

function createTravelers(links: Link[]) {
  return Array.from({ length: Math.min(PULSE_COUNT, links.length) }, () => ({
    link: links[Math.floor(Math.random() * links.length)],
    progress: Math.random(),
    speed: 0.15 + Math.random() * 0.2,
  }));
}

// Small glowing pulses traveling along random links, reading as "data flow"
function DataPulses({ nodes, links, color, reducedMotion }: { nodes: THREE.Vector3[]; links: Link[]; color: string; reducedMotion: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const travelers = useMemo(() => createTravelers(links), [links]);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    travelers.forEach((traveler, i) => {
      traveler.progress += traveler.speed * delta;
      if (traveler.progress > 1) {
        traveler.progress = 0;
        traveler.link = links[Math.floor(Math.random() * links.length)];
      }
      const [a, b] = traveler.link;
      dummy.position.copy(nodes[a]).lerp(nodes[b], traveler.progress);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  if (reducedMotion || travelers.length === 0) return null;

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, travelers.length]}>
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} transparent opacity={0.9} />
    </instancedMesh>
  );
}

function Scene({ isDark, reducedMotion }: { isDark: boolean; reducedMotion: boolean }) {
  const primaryColor = isDark ? '#60a5fa' : '#2563eb';
  const accentColor = isDark ? '#22d3ee' : '#0e7490';

  const { nodes, links } = useMemo(() => generateNetwork(), []);
  const groupRef = useRef<THREE.Group>(null!);
  const pointer = usePointer(reducedMotion);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y += (pointer.current.x * 0.15 - groupRef.current.rotation.y) * 0.03;
    groupRef.current.rotation.x += (-pointer.current.y * 0.1 - groupRef.current.rotation.x) * 0.03;
    groupRef.current.position.y = Math.sin(time * 0.25) * 0.3;
  });

  return (
    <>
      <fog attach="fog" args={[isDark ? '#05070f' : '#fcfdfe', 10, 32]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color={accentColor} />
      <pointLight position={[-10, -8, -5]} intensity={0.4} color={primaryColor} />

      <group ref={groupRef}>
        <NetworkLinks nodes={nodes} links={links} color={primaryColor} />
        <NetworkNodes nodes={nodes} color={primaryColor} reducedMotion={reducedMotion} />
        <DataPulses nodes={nodes} links={links} color={accentColor} reducedMotion={reducedMotion} />
      </group>
    </>
  );
}

export function Background3D() {
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="absolute inset-0 -z-10">
      <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#05070f]' : 'bg-[#fcfdfe]'}`} />

      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Scene isDark={isDark} reducedMotion={reducedMotion} />
      </Canvas>

      <div className={`absolute inset-0 pointer-events-none ${isDark
        ? 'bg-gradient-to-b from-transparent via-transparent to-[#05070f]'
        : 'bg-gradient-to-b from-transparent via-transparent to-[#fcfdfe]'
        }`} />

      <div className={`absolute inset-0 pointer-events-none ${isDark
        ? 'bg-[radial-gradient(ellipse_at_top,rgba(56,130,246,0.16),transparent_55%)]'
        : 'bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_55%)]'
        }`} />
    </div>
  );
}
