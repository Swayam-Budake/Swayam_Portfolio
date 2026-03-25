import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* 3D Envelope - represents communication */
const Envelope3D = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <group ref={ref} position={[0, 0, 0]} scale={1.2}>
        {/* Envelope body */}
        <RoundedBox args={[1.4, 0.9, 0.08]} radius={0.03}>
          <meshStandardMaterial color="#e08030" roughness={0.15} metalness={0.85} />
        </RoundedBox>
        {/* Envelope flap (triangle) */}
        <mesh position={[0, 0.2, 0.05]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.75, 0.55, 4]} />
          <meshStandardMaterial color="#f0a050" roughness={0.2} metalness={0.8} flatShading />
        </mesh>
        {/* Seal */}
        <Sphere args={[0.08, 16, 16]} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#7c4dff" emissive="#7c4dff" emissiveIntensity={0.4} roughness={0.1} metalness={0.9} />
        </Sphere>
      </group>
    </Float>
  );
};

/* Chat bubbles - represents conversation */
const ChatBubbles = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={[-2, 1, -1.5]}>
        {/* Bubble 1 */}
        <RoundedBox args={[0.7, 0.4, 0.1]} radius={0.08} position={[0, 0, 0]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.8} transparent opacity={0.8} />
        </RoundedBox>
        {/* Dot indicators inside */}
        {[-0.15, 0, 0.15].map((x, i) => (
          <Sphere key={i} args={[0.03, 8, 8]} position={[x, 0, 0.06]}>
            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.3} />
          </Sphere>
        ))}
        {/* Bubble 2 */}
        <RoundedBox args={[0.5, 0.35, 0.1]} radius={0.08} position={[0.5, -0.5, 0.2]}>
          <meshStandardMaterial color="#e08030" roughness={0.2} metalness={0.8} transparent opacity={0.8} />
        </RoundedBox>
      </group>
    </Float>
  );
};

/* Network nodes - represents connections */
const NetworkNodes = () => {
  const ref = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      pts.push([Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, (Math.random() - 0.5) * 0.5]);
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={ref} position={[2, -0.5, -2]}>
      {nodes.map((pos, i) => (
        <Sphere key={i} args={[0.06, 8, 8]} position={pos}>
          <meshStandardMaterial color={i % 2 === 0 ? "#e08030" : "#7c4dff"} emissive={i % 2 === 0 ? "#e08030" : "#7c4dff"} emissiveIntensity={0.4} />
        </Sphere>
      ))}
      {/* Connection lines between adjacent nodes */}
      {nodes.map((pos, i) => {
        const next = nodes[(i + 1) % nodes.length];
        const mid: [number, number, number] = [(pos[0] + next[0]) / 2, (pos[1] + next[1]) / 2, (pos[2] + next[2]) / 2];
        const len = Math.sqrt((next[0] - pos[0]) ** 2 + (next[1] - pos[1]) ** 2 + (next[2] - pos[2]) ** 2);
        const angle = Math.atan2(next[1] - pos[1], next[0] - pos[0]);
        return (
          <Cylinder key={`line-${i}`} args={[0.008, 0.008, len, 4]} position={mid} rotation={[0, 0, angle]}>
            <meshStandardMaterial color="#e08030" transparent opacity={0.3} />
          </Cylinder>
        );
      })}
    </group>
  );
};

const ContactScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 5, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-2, -1, 3]} intensity={0.5} color="#e08030" />
      <pointLight position={[2, 2, -1]} intensity={0.3} color="#7c4dff" />
      <Envelope3D />
      <ChatBubbles />
      <NetworkNodes />
    </Canvas>
  </div>
);

export default ContactScene;
