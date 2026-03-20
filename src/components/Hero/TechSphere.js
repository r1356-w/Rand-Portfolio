import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "../../hooks/useMousePosition";

function CoreSphere({ mouse }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15 + mouse.x * 0.3;
      meshRef.current.rotation.x = mouse.y * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
      ringRef.current.rotation.x = Math.PI / 3 + mouse.y * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.15;
      ring2Ref.current.rotation.y = Math.PI / 4 + mouse.x * 0.1;
    }
  });

  return (
    <group>
      {/* Core distort sphere */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#22D3EE"
            attach="material"
            distort={0.25}
            speed={1.5}
            roughness={0}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.85}
            envMapIntensity={2}
          />
        </Sphere>
      </Float>

      {/* Orbit ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.5} />
      </mesh>

      {/* Orbit ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.4, 0.010, 16, 100]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.4} />
      </mesh>

      {/* Outer wireframe sphere */}
      <Sphere args={[1.7, 16, 16]}>
        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.06}
        />
      </Sphere>
    </group>
  );
}

function FloatingParticles() {
  const points = useRef();
  const count = 120;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#22D3EE"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function TechSphere() {
  const mouse = useMousePosition();

  return (
    <div className="w-full h-full" style={{ minHeight: "420px" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[-10, -5, -5]} intensity={0.8} color="#A855F7" />
        <pointLight position={[0, -10, 5]} intensity={0.5} color="#ffffff" />

        <CoreSphere mouse={mouse} />
        <FloatingParticles />
        <Stars
          radius={30}
          depth={20}
          count={500}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}
