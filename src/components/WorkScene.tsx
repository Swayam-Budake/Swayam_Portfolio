import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* TikTok-inspired icon - music note on dark tile */
const TikTokIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={ref} position={[0, 0, 0]}>
        <RoundedBox args={[0.9, 0.9, 0.16]} radius={0.15}>
          <meshStandardMaterial color="#010101" roughness={0.1} metalness={0.95} />
        </RoundedBox>
        {/* Music note stem */}
        <Cylinder args={[0.03, 0.03, 0.4, 8]} position={[0.08, 0.05, 0.1]}>
          <meshStandardMaterial color="#25F4EE" roughness={0.1} metalness={0.9} />
        </Cylinder>
        {/* Note head */}
        <Sphere args={[0.08, 12, 12]} position={[-0.02, -0.15, 0.1]}>
          <meshStandardMaterial color="#FE2C55" roughness={0.1} metalness={0.9} />
        </Sphere>
        {/* Shadow note (red offset) */}
        <Cylinder args={[0.025, 0.025, 0.4, 8]} position={[0.12, 0.08, 0.08]}>
          <meshStandardMaterial color="#FE2C55" roughness={0.1} metalness={0.9} transparent opacity={0.7} />
        </Cylinder>
      </group>
    </Float>
  );
};

/* Pinterest-inspired icon - red circle with pin */
const PinterestIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={ref} position={[-2, 0.8, -1.5]}>
        <Sphere args={[0.45, 32, 32]}>
          <meshStandardMaterial color="#E60023" roughness={0.12} metalness={0.88} />
        </Sphere>
        {/* Pin shape */}
        <Cylinder args={[0.035, 0.035, 0.35, 8]} position={[0, -0.02, 0.38]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Cylinder>
        <mesh position={[0, 0.15, 0.4]}>
          <torusGeometry args={[0.08, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* Snapchat-inspired icon - yellow rounded square with ghost */
const SnapchatIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.22;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.35} floatIntensity={0.9}>
      <group ref={ref} position={[2.2, -0.6, -1]}>
        <RoundedBox args={[0.7, 0.7, 0.14]} radius={0.14}>
          <meshStandardMaterial color="#FFFC00" roughness={0.15} metalness={0.8} />
        </RoundedBox>
        {/* Ghost body */}
        <Sphere args={[0.18, 16, 16]} position={[0, 0.04, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.7} />
        </Sphere>
        {/* Ghost base */}
        <Cylinder args={[0.18, 0.2, 0.1, 16]} position={[0, -0.1, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.7} />
        </Cylinder>
        {/* Eyes */}
        <Sphere args={[0.025, 8, 8]} position={[-0.06, 0.06, 0.24]}>
          <meshStandardMaterial color="#010101" />
        </Sphere>
        <Sphere args={[0.025, 8, 8]} position={[0.06, 0.06, 0.24]}>
          <meshStandardMaterial color="#010101" />
        </Sphere>
      </group>
    </Float>
  );
};

const WorkScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={0.6} color="#fff0e0" />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#FE2C55" />
      <pointLight position={[3, -2, 1]} intensity={0.3} color="#E60023" />
      <pointLight position={[0, 0, 3]} intensity={0.2} color="#FFFC00" />
      <TikTokIcon />
      <PinterestIcon />
      <SnapchatIcon />
    </Canvas>
  </div>
);

export default WorkScene;
