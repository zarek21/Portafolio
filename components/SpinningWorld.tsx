"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function SpinningWorld(props: any) {
  const groupRef = useRef<THREE.Group>(null);

  // Extraemos 'nodes' (geometría) y 'materials' (colores/texturas originales)
  const { nodes, materials } = useGLTF("/world.glb") as any;

  // Lógica de movimiento (Scroll)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotación constante
      groupRef.current.rotation.y += delta * 0.2;

      // Movimiento con scroll
      const targetY = -scrollY * 0.005;
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Estructura del modelo con MATERIALES ORIGINALES */}
      <group position={[-1.334, -0.782, 1.171]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COMBINE_LP_LAM_0.geometry}
          material={materials.material} // <--- Original
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COMBINE_LP_1_0.geometry}
          material={materials.material_1} // <--- Original
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COMBINE_LP_2_0.geometry}
          material={materials.material_2} // <--- Original
        />
      </group>
    </group>
  );
}

useGLTF.preload("/world.glb");
