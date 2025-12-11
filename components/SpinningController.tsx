"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function SpinningController(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/nintendo.glb") as any;

  // Estado para guardar la posición del scroll de forma segura
  const [scrollY, setScrollY] = useState(0);

  // Escuchar el scroll del navegador
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // 1. ROTACIÓN CONSTANTE (Gira solito)
      groupRef.current.rotation.y += delta * 0.4;

      // 2. EFECTO DE CAÍDA CON SCROLL (Paralaje)
      // La posición base es 0.
      // Restamos el scroll multiplicado por un factor pequeño (0.005)
      // Cuanto mayor sea el número, más rápido baja.
      const targetY = -scrollY * 0.005;

      // Aplicamos una interpolación (Lerp) para que el movimiento sea SUAVE y no brusco
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        0.1 // Factor de suavidad (0.1 es muy suave)
      );
    }
  });

  const neonMaterial = (
    <meshStandardMaterial
      color="var(--color-accent)"
      roughness={0.3}
      metalness={0.8}
      emissive="var(--color-accent)"
      emissiveIntensity={0.2}
    />
  );

  return (
    // Ya no usamos motion.group, solo group normal de Three.js
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
          >
            {neonMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
          >
            {neonMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
          >
            {neonMaterial}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
          >
            {neonMaterial}
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/nintendo.glb");
