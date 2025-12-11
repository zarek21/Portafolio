"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
// 1. CAMBIAR IMPORT
import SpinningWorld from "./SpinningWorld";
import { Suspense } from "react";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            intensity={2}
            castShadow
          />
          <pointLight
            position={[-5, -5, -5]}
            intensity={0.5}
            color="var(--color-accent)"
          />

          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            {/* 2. USAR EL NUEVO COMPONENTE */}
            <SpinningWorld
              // Ajusta la posición para que quede a la derecha
              position={[0, 0, -5]}
              // Los mundos suelen ser grandes, prueba escalarlo
              scale={2}
            />
          </Float>

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
