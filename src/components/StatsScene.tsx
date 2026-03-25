import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* Upward trending line chart */
const TrendLine = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const points: [number, number, number][] = [
    [-1.5, -0.5, 0],
    [-0.8, -0.2, 0],
    [-0.2, 0.1, 0],
    [0.4, 0.5, 0],
    [1.0, 0.3, 0],
    [1.5, 0.9, 0],
  ];

  return (
    <Float speed={1} floatIntensity={0.4}>
      <group ref={ref} position={[0, 0, 0]}>
        {/* Data points */}
        {points.map((p, i) => (
          <Sphere key={i} args={[0.06, 12, 12]} position={p}>
            <meshStandardMaterial color="#e08030" emissive="#e08030" emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
          </Sphere>
        ))}
        {/* Connecting lines */}
        {points.slice(0, -1).map((p, i) => {
          const next = points[i + 1];
          const mid: [number, number, number] = [(p[0] + next[0]) / 2, (p[1] + next[1]) / 2, 0];
          const dx = next[0] - p[0];
          const dy = next[1] - p[1];
          const len = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          return (
            <Cylinder key={i} args={[0.015, 0.015, len, 6]} position={mid} rotation={[0, 0, angle]}>
              <meshStandardMaterial color="#e08030" roughness={0.2} metalness={0.8} transparent opacity={0.7} />
            </Cylinder>
          );
        })}
        {/* Arrow at end */}
        <mesh position={[1.6, 1.05, 0]} rotation={[0, 0, 0.8]}>
          <coneGeometry args={[0.08, 0.2, 3]} />
          <meshStandardMaterial color="#e08030" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* ROI circular gauge */
const ROIGauge = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={ref} position={[2.5, 0, -1]}>
        <Torus args={[0.5, 0.04, 16, 32, Math.PI * 1.5]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.15} metalness={0.9} />
        </Torus>
        <Torus args={[0.5, 0.02, 16, 32]} rotation={[0, 0, Math.PI * 1.5]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.3} metalness={0.7} transparent opacity={0.2} />
        </Torus>
        <Sphere args={[0.06, 12, 12]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#e08030" emissive="#e08030" emissiveIntensity={0.6} />
        </Sphere>
      </group>
    </Float>
  );
};

const StatsScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 3, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-2, -1, 2]} intensity={0.4} color="#e08030" />
      <pointLight position={[2, 1, -1]} intensity={0.3} color="#7c4dff" />
      <TrendLine />
      <ROIGauge />
    </Canvas>
  </div>
);

export default StatsScene;
