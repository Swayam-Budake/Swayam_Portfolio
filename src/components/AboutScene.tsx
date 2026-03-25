import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* Brain/lightbulb shape - represents strategy & ideas */
const StrategyBrain = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={ref} position={[0, 0.3, 0]}>
        {/* Lightbulb top */}
        <Sphere args={[0.7, 32, 32]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#e08030" roughness={0.1} metalness={0.9} wireframe />
        </Sphere>
        {/* Base */}
        <Cylinder args={[0.3, 0.25, 0.4, 16]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.8} />
        </Cylinder>
        {/* Glow core */}
        <Sphere args={[0.25, 16, 16]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#e08030" emissive="#e08030" emissiveIntensity={0.8} transparent opacity={0.6} />
        </Sphere>
        {/* Orbiting idea sparks */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <Sphere key={i} args={[0.05, 8, 8]} position={[Math.cos(angle) * 1, Math.sin(angle) * 0.5 + 0.3, Math.sin(angle) * 0.5]}>
              <meshStandardMaterial color="#f0a050" emissive="#e08030" emissiveIntensity={0.5} />
            </Sphere>
          );
        })}
      </group>
    </Float>
  );
};

/* SEO/Search magnifying glass */
const SearchLens = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={ref} position={[2, -0.8, -1]} rotation={[0, 0, -0.5]}>
        {/* Lens ring */}
        <Torus args={[0.4, 0.06, 16, 32]}>
          <meshStandardMaterial color="#7c4dff" roughness={0.15} metalness={0.9} />
        </Torus>
        {/* Glass */}
        <mesh>
          <circleGeometry args={[0.38, 32]} />
          <meshStandardMaterial color="#7c4dff" transparent opacity={0.15} roughness={0} metalness={1} side={THREE.DoubleSide} />
        </mesh>
        {/* Handle */}
        <Cylinder args={[0.05, 0.05, 0.5, 8]} position={[0.3, -0.45, 0]} rotation={[0, 0, 0.7]}>
          <meshStandardMaterial color="#e08030" roughness={0.3} metalness={0.7} />
        </Cylinder>
      </group>
    </Float>
  );
};

const AboutScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 3, 5]} intensity={0.6} color="#fff0e0" />
      <pointLight position={[-2, -2, 2]} intensity={0.4} color="#7c4dff" />
      <pointLight position={[2, 1, 1]} intensity={0.3} color="#e08030" />
      <StrategyBrain />
      <SearchLens />
    </Canvas>
  </div>
);

export default AboutScene;
