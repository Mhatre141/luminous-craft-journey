import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, Torus } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AnimatedTorus() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.3;
      ref.current.rotation.y += d * 0.4;
    }
  });
  return (
    <Torus ref={ref} args={[1.4, 0.18, 32, 100]} position={[2.4, 0.6, -1]}>
      <meshStandardMaterial color="#f0a8d0" emissive="#c54f99" emissiveIntensity={0.4} metalness={0.6} roughness={0.2} />
    </Torus>
  );
}

export function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7ee0e6" />
      <pointLight position={[-5, -3, -5]} intensity={1.5} color="#c54f99" />
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[1.6, 64, 64]} position={[-1.2, 0, 0]}>
          <MeshDistortMaterial
            color="#5ec5cc"
            attach="material"
            distort={0.45}
            speed={2}
            roughness={0.1}
            metalness={0.7}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <AnimatedTorus />
      </Float>
    </Canvas>
  );
}
