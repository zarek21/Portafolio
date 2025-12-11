"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const loadingTexts = [
  "Initializing System...",
  "Loading Assets...",
  "Compiling Shaders...",
  "Connecting to Server...",
  "System Ready.",
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8;

        if (next > 25 && next < 50) setTextIndex(1);
        if (next > 50 && next < 75) setTextIndex(2);
        if (next > 75 && next < 90) setTextIndex(3);
        if (next >= 100) {
          clearInterval(interval);
          setTextIndex(4);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);
          }, 800);
          return 100;
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          <div className="relative z-10 w-64 md:w-96 space-y-4">
            <div className="flex justify-between text-xs font-mono text-accent/80 uppercase tracking-widest">
              <span>{loadingTexts[textIndex]}</span>
              <span>{Math.min(100, Math.round(progress))}%</span>
            </div>

            {/* BARRA DE CARGA */}
            <div className="h-2 w-full bg-surface border border-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-accent shadow-[0_0_15px_var(--color-accent)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="text-[10px] text-gray-600 font-mono text-center pt-2 opacity-50">
              BitZarek
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
