import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useTheme } from '@/components/theme-provider';
import * as THREE from 'three';

// Wireframe cube representing engineering/structure
function WireframeCube({ position, size = 1, color, rotationSpeed = 0.3 }: {
  position: [number, number, number],
  size?: number,
  color: string,
  rotationSpeed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * rotationSpeed;
    meshRef.current.rotation.y = time * rotationSpeed * 0.8;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Octahedron representing mathematical precision
function WireframeOctahedron({ position, size = 1, color }: {
  position: [number, number, number],
  size?: number,
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.z = time * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Tetrahedron representing vectors and direction
function WireframeTetrahedron({ position, size = 1, color }: {
  position: [number, number, number],
  size?: number,
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.25;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position}>
        <tetrahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

// Dodecahedron for complexity
function WireframeDodecahedron({ position, size = 1, color }: {
  position: [number, number, number],
  size?: number,
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Grid lines representing coordinate systems
function GridLines({ color, opacity = 0.1 }: { color: string, opacity?: number }) {
  const linesRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    linesRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    linesRef.current.rotation.y = time * 0.02;
  });

  const lines = useMemo(() => {
    const positions: [number, number, number][][] = [];
    const count = 8;
    const spread = 15;

    // Horizontal lines
    for (let i = -count; i <= count; i++) {
      positions.push([
        [-spread, i * 1.5, -5],
        [spread, i * 1.5, -5]
      ]);
    }

    // Vertical lines
    for (let i = -count; i <= count; i++) {
      positions.push([
        [i * 1.5, -spread, -5],
        [i * 1.5, spread, -5]
      ]);
    }

    return positions;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...line[0], ...line[1]]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color={color} transparent opacity={opacity} />
        </line>
      ))}
    </group>
  );
}

// Floating connection points
function ConnectionNodes({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) {
      positions.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      mesh.scale.setScalar(0.8 + Math.sin(time * 2 + i) * 0.2);
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ isDark }: { isDark: boolean }) {
  const primaryColor = isDark ? '#a78bfa' : '#7c3aed';
  const secondaryColor = isDark ? '#8b5cf6' : '#6d28d9';
  const accentColor = isDark ? '#c4b5fd' : '#a78bfa';

  return (
    <>
      <fog attach="fog" args={[isDark ? '#09090b' : '#ffffff', 10, 30]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={accentColor} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color={primaryColor} />

      {/* Grid background */}
      <GridLines color={primaryColor} opacity={isDark ? 0.08 : 0.05} />

      {/* Engineering shapes */}
      <WireframeCube position={[-5, 3, -8]} size={2} color={primaryColor} />
      <WireframeCube position={[6, -2, -6]} size={1.5} color={secondaryColor} rotationSpeed={0.2} />

      <WireframeOctahedron position={[4, 4, -10]} size={1.8} color={primaryColor} />
      <WireframeOctahedron position={[-3, -4, -7]} size={1.2} color={accentColor} />

      <WireframeTetrahedron position={[-6, -1, -5]} size={1.5} color={secondaryColor} />
      <WireframeTetrahedron position={[2, 2, -4]} size={1} color={primaryColor} />

      <WireframeDodecahedron position={[0, -3, -12]} size={2.5} color={accentColor} />
      <WireframeDodecahedron position={[-4, 5, -15]} size={3} color={primaryColor} />

      {/* Connection nodes */}
      <ConnectionNodes color={accentColor} />
    </>
  );
}

export function Background3D() {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div className="absolute inset-0 -z-10">
      <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#09090b]' : 'bg-white'}`} />

      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Scene isDark={isDark} />
      </Canvas>

      <div className={`absolute inset-0 pointer-events-none ${isDark
        ? 'bg-gradient-to-b from-transparent via-transparent to-[#09090b]'
        : 'bg-gradient-to-b from-transparent via-transparent to-white'
        }`} />

      <div className={`absolute inset-0 pointer-events-none ${isDark
        ? 'bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_50%)]'
        : 'bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_50%)]'
        }`} />
    </div>
  );
}
