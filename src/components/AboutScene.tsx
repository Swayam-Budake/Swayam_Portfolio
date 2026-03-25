import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

/* Facebook-inspired icon */
const FacebookIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={ref} position={[0, 0.2, 0]}>
        <RoundedBox args={[0.9, 0.9, 0.16]} radius={0.18}>
          <meshStandardMaterial color="#1877F2" roughness={0.12} metalness={0.88} />
        </RoundedBox>
        {/* f letter - vertical bar */}
        <Cylinder args={[0.04, 0.04, 0.45, 8]} position={[0.02, 0, 0.1]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Cylinder>
        {/* f letter - horizontal bar */}
        <Cylinder args={[0.035, 0.035, 0.22, 8]} position={[0.08, 0.08, 0.1]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </Cylinder>
        {/* f letter - top curve */}
        <mesh position={[0.1, 0.22, 0.1]}>
          <torusGeometry args={[0.08, 0.035, 8, 16, Math.PI * 0.8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </Float>
  );
};

/* Google Ads / Search icon - magnifying glass with G */
const GoogleIcon = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={ref} position={[2, -0.7, -1.2]} rotation={[0, 0, -0.3]}>
        {/* Colored circle segments */}
        {[
          { color: "#EA4335", start: 0, len: Math.PI * 0.5 },
          { color: "#FBBC05", start: Math.PI * 0.5, len: Math.PI * 0.5 },
          { color: "#34A853", start: Math.PI, len: Math.PI * 0.5 },
          { color: "#4285F4", start: Math.PI * 1.5, len: Math.PI * 0.5 },
        ].map((seg, i) => (
          <mesh key={i}>
            <torusGeometry args={[0.4, 0.07, 16, 32, seg.len, seg.start]} />
            <meshStandardMaterial color={seg.color} roughness={0.12} metalness={0.9} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const AboutScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 3, 5]} intensity={0.6} color="#fff0e0" />
      <pointLight position={[-2, -2, 2]} intensity={0.4} color="#1877F2" />
      <pointLight position={[2, 1, 1]} intensity={0.3} color="#EA4335" />
      <FacebookIcon />
      <GoogleIcon />
    </Canvas>
  </div>
);

export default AboutScene;
