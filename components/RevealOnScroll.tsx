"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Empieza invisible y 50px abajo
      whileInView={{ opacity: 1, y: 0 }} // Al verse: Opacidad total y sube a su lugar
      viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar, solo una vez
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Duración suave
      className={className}
    >
      {children}
    </motion.div>
  );
}
