import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Octahedron, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

const DistortedIcosahedron = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.2, 1]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#e08030"
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={1.5}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Octahedron ref={ref} args={[0.6]} position={[2, -1, -1.5]}>
        <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.8} />
      </Octahedron>
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
      <DistortedIcosahedron />
      <FloatingOctahedron />
    </Canvas>
  </div>
);

export default AboutScene;
