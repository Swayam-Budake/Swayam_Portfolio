import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* Funnel - represents marketing/sales funnel */
const MarketingFunnel = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <group ref={ref} position={[0, 0, 0]}>
        {/* Funnel layers - wider at top, narrow at bottom */}
        {[
          { r: 1.0, y: 0.8, h: 0.15, color: "#7c4dff", op: 0.5 },
          { r: 0.75, y: 0.4, h: 0.15, color: "#7c4dff", op: 0.6 },
          { r: 0.5, y: 0.0, h: 0.15, color: "#e08030", op: 0.7 },
          { r: 0.3, y: -0.4, h: 0.15, color: "#e08030", op: 0.85 },
        ].map((layer, i) => (
          <Cylinder key={i} args={[layer.r, layer.r * 0.85, layer.h, 32]} position={[0, layer.y, 0]}>
            <meshStandardMaterial color={layer.color} roughness={0.15} metalness={0.85} transparent opacity={layer.op} />
          </Cylinder>
        ))}
        {/* Dripping leads at bottom */}
        {[0, 1, 2].map((i) => (
          <Sphere key={i} args={[0.06, 8, 8]} position={[0, -0.8 - i * 0.2, 0]}>
            <meshStandardMaterial color="#e08030" emissive="#e08030" emissiveIntensity={0.6} transparent opacity={0.7 - i * 0.2} />
          </Sphere>
        ))}
      </group>
    </Float>
  );
};

/* Pie chart - represents analytics */
const PieChart3D = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });
  const segments = [
    { start: 0, length: Math.PI * 0.8, color: "#e08030" },
    { start: Math.PI * 0.8, length: Math.PI * 0.5, color: "#7c4dff" },
    { start: Math.PI * 1.3, length: Math.PI * 0.7, color: "#f0a050" },
  ];
  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={[-2, 1, -1.5]} scale={0.5}>
        {segments.map((seg, i) => (
          <mesh key={i}>
            <cylinderGeometry args={[0.8, 0.8, 0.15, 32, 1, false, seg.start, seg.length]} />
            <meshStandardMaterial color={seg.color} roughness={0.2} metalness={0.8} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

/* Floating @ symbol rings - email marketing */
const EmailRings = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <group ref={ref} position={[2.2, -0.8, -1]}>
        <Torus args={[0.35, 0.05, 16, 32]}>
          <meshStandardMaterial color="#e08030" roughness={0.15} metalness={0.9} />
        </Torus>
        <mesh position={[0.2, 0, 0]}>
          <torusGeometry args={[0.2, 0.04, 16, 32, Math.PI * 1.5]} />
          <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.85} />
        </mesh>
        <Sphere args={[0.04, 8, 8]} position={[0.2, -0.2, 0]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.85} />
        </Sphere>
      </group>
    </Float>
  );
};

const WorkScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 3, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#e08030" />
      <pointLight position={[3, -2, 1]} intensity={0.3} color="#7c4dff" />
      <MarketingFunnel />
      <PieChart3D />
      <EmailRings />
    </Canvas>
  </div>
);

export default WorkScene;
