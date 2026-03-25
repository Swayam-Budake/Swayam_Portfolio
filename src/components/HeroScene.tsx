import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Cylinder, Torus, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* 3D Megaphone - represents marketing/advertising */
const Megaphone = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <group ref={groupRef} position={[0, 0.3, 0]} rotation={[0, 0, -0.3]}>
        {/* Cone body */}
        <mesh>
          <coneGeometry args={[1.2, 2, 32, 1, true]} />
          <meshStandardMaterial color="#e08030" roughness={0.2} metalness={0.85} side={THREE.DoubleSide} />
        </mesh>
        {/* Bell end ring */}
        <Torus args={[1.2, 0.08, 16, 32]} position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#f0a050" roughness={0.15} metalness={0.9} />
        </Torus>
        {/* Handle */}
        <Cylinder args={[0.12, 0.12, 0.8, 16]} position={[0, 1.3, 0]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.3} metalness={0.7} />
        </Cylinder>
        {/* Sound waves */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, -1.5 - i * 0.5, 0]}>
            <torusGeometry args={[0.4 + i * 0.4, 0.02, 8, 32, Math.PI]} />
            <meshStandardMaterial color="#e08030" transparent opacity={0.5 - i * 0.15} roughness={0.3} metalness={0.6} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

/* Rising bar chart */
const BarChart3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });
  const heights = [0.6, 1.0, 0.8, 1.4, 1.1];
  return (
    <Float speed={1.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[-2.5, -1.2, -1.5]} scale={0.6}>
        {heights.map((h, i) => (
          <RoundedBox key={i} args={[0.3, h, 0.3]} position={[i * 0.45 - 0.9, h / 2 - 0.5, 0]} radius={0.04}>
            <meshStandardMaterial
              color={i === 3 ? "#e08030" : "#7c4dff"}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.7 + i * 0.06}
            />
          </RoundedBox>
        ))}
        {/* Trend arrow */}
        <mesh position={[0, 0.8, 0.2]} rotation={[0, 0, 0.5]}>
          <coneGeometry args={[0.12, 0.3, 3]} />
          <meshStandardMaterial color="#e08030" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* Target/bullseye */
const Target3D = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={ref} position={[2.5, 1.2, -1.5]}>
        {[0.5, 0.35, 0.2].map((r, i) => (
          <Torus key={i} args={[r, 0.03, 16, 32]}>
            <meshStandardMaterial color={i === 2 ? "#e08030" : "#7c4dff"} roughness={0.2} metalness={0.8} />
          </Torus>
        ))}
        <Sphere args={[0.06, 16, 16]}>
          <meshStandardMaterial color="#e08030" roughness={0.1} metalness={0.9} emissive="#e08030" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </Float>
  );
};

/* Data particles flowing upward like analytics data */
const DataParticles = () => {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      const posArray = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += 0.005;
        if (posArray[i * 3 + 1] > 5) posArray[i * 3 + 1] = -5;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#e08030" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff0e0" />
      <pointLight position={[-3, -3, 2]} intensity={0.6} color="#e08030" />
      <pointLight position={[3, 2, -2]} intensity={0.3} color="#7c4dff" />
      <Megaphone />
      <BarChart3D />
      <Target3D />
      <DataParticles />
    </Canvas>
  </div>
);

export default HeroScene;
