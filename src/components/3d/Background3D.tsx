import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { useTheme } from '@/components/theme-provider';
import * as THREE from 'three';

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 12 + 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isDark }: { isDark: boolean }) {
  const particleColor = isDark ? '#a78bfa' : '#7c3aed';
  const orbColor = isDark ? '#8b5cf6' : '#6d28d9';
  const glowColor = isDark ? '#c4b5fd' : '#a78bfa';

  return (
    <>
      <fog attach="fog" args={[isDark ? '#09090b' : '#ffffff', 8, 25]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color={glowColor} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color={particleColor} />
      
      <ParticleField color={particleColor} />
      
      <FloatingOrb position={[-4, 2, -5]} color={orbColor} scale={1.5} />
      <FloatingOrb position={[5, -2, -3]} color={orbColor} scale={1.2} />
      <FloatingOrb position={[0, 3, -8]} color={orbColor} scale={2} />
      
      <GlowingSphere position={[-3, -3, -4]} color={glowColor} />
      <GlowingSphere position={[4, 2, -6]} color={glowColor} />
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
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Scene isDark={isDark} />
      </Canvas>
      
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-b from-transparent via-transparent to-[#09090b]' 
          : 'bg-gradient-to-b from-transparent via-transparent to-white'
      }`} />
      
      <div className={`absolute inset-0 pointer-events-none ${
        isDark
          ? 'bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]'
          : 'bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_50%)]'
      }`} />
    </div>
  );
}
