import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

const PulsingSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.08);
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={1} floatIntensity={0.5}>
      <Sphere ref={ref} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#e08030"
          roughness={0.05}
          metalness={0.95}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
};

const FloatingKnot = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <TorusKnot ref={ref} args={[0.5, 0.15, 128, 32]} position={[-2, 1, -2]}>
        <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.8} wireframe />
      </TorusKnot>
    </Float>
  );
};

const RingParticles = () => {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + (Math.random() - 0.5) * 0.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#e08030" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const ContactScene = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 5, 5]} intensity={0.5} color="#fff0e0" />
      <pointLight position={[-2, -1, 3]} intensity={0.5} color="#e08030" />
      <pointLight position={[2, 2, -1]} intensity={0.3} color="#7c4dff" />
      <PulsingSphere />
      <FloatingKnot />
      <RingParticles />
    </Canvas>
  </div>
);

export default ContactScene;
