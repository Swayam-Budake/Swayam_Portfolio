import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* Spotify-inspired icon */
const SpotifyIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.6}>
      <group ref={ref} position={[-1.5, 0, -0.5]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#1DB954" roughness={0.12} metalness={0.9} />
        </Sphere>
        {/* Sound waves */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, 0.12 - i * 0.12, 0.42]}>
            <torusGeometry args={[0.12 + i * 0.04, 0.025, 8, 16, Math.PI * 0.7]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

/* Reddit-inspired icon */
const RedditIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.05;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
      <group ref={ref} position={[1.5, 0.2, -0.5]}>
        <Sphere args={[0.45, 32, 32]}>
          <meshStandardMaterial color="#FF4500" roughness={0.12} metalness={0.88} />
        </Sphere>
        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.25, 8]} position={[0.08, 0.45, 0]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
        </Cylinder>
        <Sphere args={[0.05, 8, 8]} position={[0.15, 0.58, 0]}>
          <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.4} />
        </Sphere>
        {/* Eyes */}
        <Sphere args={[0.06, 8, 8]} position={[-0.12, 0.05, 0.38]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Sphere>
        <Sphere args={[0.06, 8, 8]} position={[0.12, 0.05, 0.38]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
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
      <pointLight position={[-2, -1, 2]} intensity={0.4} color="#1DB954" />
      <pointLight position={[2, 1, -1]} intensity={0.3} color="#FF4500" />
      <SpotifyIcon />
      <RedditIcon />
    </Canvas>
  </div>
);

export default StatsScene;
