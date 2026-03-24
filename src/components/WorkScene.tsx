import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

const SpinningTorus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <Torus ref={ref} args={[1, 0.3, 32, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e08030" roughness={0.15} metalness={0.85} wireframe />
      </Torus>
    </Float>
  );
};

const OrbitingSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });
  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <Sphere key={i} args={[0.12, 16, 16]} position={[Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0]}>
            <meshStandardMaterial color={i % 2 === 0 ? "#e08030" : "#7c4dff"} roughness={0.3} metalness={0.7} />
          </Sphere>
        );
      })}
    </group>
  );
};

const FloatingCubes = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={1.5 + i * 0.5} floatIntensity={0.6}>
          <Box
            args={[0.25, 0.25, 0.25]}
            position={[(i - 1) * 2.2, (i - 1) * 0.5, -1 - i * 0.5]}
            rotation={[i * 0.5, i * 0.3, i * 0.2]}
          >
            <meshStandardMaterial
              color={i === 1 ? "#7c4dff" : "#e08030"}
              roughness={0.3}
              metalness={0.7}
              opacity={0.8}
              transparent
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

const WorkScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 3, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#e08030" />
      <pointLight position={[3, -2, 1]} intensity={0.3} color="#7c4dff" />
      <SpinningTorus />
      <OrbitingSpheres />
      <FloatingCubes />
    </Canvas>
  </div>
);

export default WorkScene;
