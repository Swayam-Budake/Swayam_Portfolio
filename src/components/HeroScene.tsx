import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* Instagram-inspired icon - gradient square with camera lens */
const InstagramIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.2}>
      <group ref={ref} position={[-0.5, 0.8, 0]}>
        <RoundedBox args={[1, 1, 0.2]} radius={0.2}>
          <meshStandardMaterial color="#E1306C" roughness={0.15} metalness={0.85} />
        </RoundedBox>
        {/* Camera lens ring */}
        <mesh position={[0, 0, 0.12]}>
          <torusGeometry args={[0.25, 0.04, 16, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Lens center */}
        <Sphere args={[0.08, 16, 16]} position={[0, 0, 0.14]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </Sphere>
        {/* Flash dot */}
        <Sphere args={[0.05, 8, 8]} position={[0.28, 0.28, 0.14]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.6} />
        </Sphere>
      </group>
    </Float>
  );
};

/* YouTube-inspired icon - red rounded rect with play triangle */
const YouTubeIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={1}>
      <group ref={ref} position={[2.2, -0.8, -1.5]}>
        <RoundedBox args={[1.2, 0.85, 0.18]} radius={0.18}>
          <meshStandardMaterial color="#FF0000" roughness={0.15} metalness={0.8} />
        </RoundedBox>
        {/* Play triangle */}
        <mesh position={[0.05, 0, 0.12]}>
          <coneGeometry args={[0.22, 0.35, 3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* Twitter/X icon - circle with bird silhouette approximation */
const TwitterIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.9}>
      <group ref={ref} position={[-2.5, -1, -1]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#1DA1F2" roughness={0.12} metalness={0.9} />
        </Sphere>
        {/* Bird wing abstract shape */}
        <mesh position={[0, 0.05, 0.4]} rotation={[0, 0, -0.3]}>
          <coneGeometry args={[0.18, 0.3, 3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} flatShading />
        </mesh>
        <mesh position={[0.12, -0.08, 0.38]} rotation={[0, 0, -0.8]}>
          <coneGeometry args={[0.1, 0.2, 3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} flatShading />
        </mesh>
      </group>
    </Float>
  );
};

/* LinkedIn-inspired icon */
const LinkedInIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });
  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.7}>
      <group ref={ref} position={[1.5, 1.5, -2]}>
        <RoundedBox args={[0.7, 0.7, 0.14]} radius={0.12}>
          <meshStandardMaterial color="#0A66C2" roughness={0.15} metalness={0.85} />
        </RoundedBox>
        {/* "in" text approximation - vertical bars */}
        <Cylinder args={[0.03, 0.03, 0.25, 8]} position={[-0.12, -0.02, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Cylinder>
        <Sphere args={[0.045, 8, 8]} position={[-0.12, 0.18, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
        <Cylinder args={[0.03, 0.03, 0.25, 8]} position={[0.08, -0.02, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Cylinder>
        <mesh position={[0.08, 0.12, 0.09]}>
          <torusGeometry args={[0.07, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* Floating data particles */
const SocialParticles = () => {
  const count = 60;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      const arr = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        arr[i * 3 + 1] += 0.004;
        if (arr[i * 3 + 1] > 5) arr[i * 3 + 1] = -5;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#e08030" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff0e0" />
      <pointLight position={[-3, -3, 2]} intensity={0.5} color="#E1306C" />
      <pointLight position={[3, 2, -2]} intensity={0.4} color="#1DA1F2" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#0A66C2" />
      <InstagramIcon />
      <YouTubeIcon />
      <TwitterIcon />
      <LinkedInIcon />
      <SocialParticles />
    </Canvas>
  </div>
);

export default HeroScene;
