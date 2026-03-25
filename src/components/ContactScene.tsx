import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* WhatsApp-inspired icon */
const WhatsAppIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <group ref={ref} position={[0, 0, 0]} scale={1.1}>
        <Sphere args={[0.55, 32, 32]}>
          <meshStandardMaterial color="#25D366" roughness={0.12} metalness={0.88} />
        </Sphere>
        {/* Phone icon - receiver */}
        <mesh position={[0, 0, 0.48]} rotation={[0, 0, -0.5]}>
          <torusGeometry args={[0.15, 0.04, 8, 16, Math.PI * 1.2]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
        <Sphere args={[0.04, 8, 8]} position={[-0.12, -0.08, 0.5]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
        <Sphere args={[0.04, 8, 8]} position={[0.1, 0.12, 0.5]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
      </group>
    </Float>
  );
};

/* Telegram-inspired icon */
const TelegramIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={[-2, 0.8, -1.5]}>
        <Sphere args={[0.45, 32, 32]}>
          <meshStandardMaterial color="#0088CC" roughness={0.12} metalness={0.9} />
        </Sphere>
        {/* Paper plane */}
        <mesh position={[0, 0, 0.38]} rotation={[0, 0, -0.2]}>
          <coneGeometry args={[0.18, 0.35, 3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} flatShading />
        </mesh>
      </group>
    </Float>
  );
};

/* Discord-inspired icon */
const DiscordIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.22;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.35} floatIntensity={0.9}>
      <group ref={ref} position={[2, -0.5, -1.2]}>
        <RoundedBox args={[0.85, 0.65, 0.14]} radius={0.12}>
          <meshStandardMaterial color="#5865F2" roughness={0.12} metalness={0.88} />
        </RoundedBox>
        {/* Controller/headset eyes */}
        <Sphere args={[0.08, 12, 12]} position={[-0.15, 0.02, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
        <Sphere args={[0.08, 12, 12]} position={[0.15, 0.02, 0.09]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
        {/* Pupils */}
        <Sphere args={[0.035, 8, 8]} position={[-0.15, 0.02, 0.16]}>
          <meshStandardMaterial color="#5865F2" />
        </Sphere>
        <Sphere args={[0.035, 8, 8]} position={[0.15, 0.02, 0.16]}>
          <meshStandardMaterial color="#5865F2" />
        </Sphere>
      </group>
    </Float>
  );
};

const ContactScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 5, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-2, -1, 3]} intensity={0.5} color="#25D366" />
      <pointLight position={[2, 2, -1]} intensity={0.3} color="#5865F2" />
      <pointLight position={[0, -2, 2]} intensity={0.2} color="#0088CC" />
      <WhatsAppIcon />
      <TelegramIcon />
      <DiscordIcon />
    </Canvas>
  </div>
);

export default ContactScene;
