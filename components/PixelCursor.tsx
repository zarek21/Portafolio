"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PixelCursor() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let pixelCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculamos la distancia desde el último píxel
      const distance = Math.hypot(e.clientX - lastX, e.clientY - lastY);

      // Solo soltamos un píxel si nos hemos movido más de 30px (para no saturar)
      if (distance > 30) {
        lastX = e.clientX;
        lastY = e.clientY;
        pixelCount++;

        const newPixel = {
          x: e.clientX,
          y: e.clientY,
          id: pixelCount,
        };

        // Agregamos el píxel
        setTrail((prev) => [...prev.slice(-15), newPixel]); // Mantenemos solo los últimos 15

        // Lo eliminamos automáticamente después de un tiempo
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== newPixel.id));
        }, 800); // Duración del rastro
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      <AnimatePresence>
        {trail.map((pixel) => (
          <motion.div
            key={pixel.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: 0,
              scale: 0,
              y: 20, // Caída leve (gravedad)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              left: pixel.x,
              top: pixel.y,
            }}
            // DISEÑO DEL PIXEL:
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-accent shadow-[0_0_10px_var(--color-accent)]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
