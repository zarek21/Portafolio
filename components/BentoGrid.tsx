"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Globe, Gamepad2, Database, Zap } from "lucide-react";

const cards = [
  {
    title: "Game Development",
    description:
      "Unity 3D & C#. Creación de mecánicas complejas, IA de enemigos y sistemas de físicas.",
    icon: Gamepad2,
    colSpan: "col-span-1 md:col-span-2", // Ocupa 2 espacios en escritorio
    bgGradient: "from-purple-900/20 to-blue-900/20",
  },
  {
    title: "Web Full Stack",
    description:
      "Next.js, React y Node. Arquitecturas escalables y UI moderna.",
    icon: Globe,
    colSpan: "col-span-1",
    bgGradient: "from-green-900/20 to-emerald-900/20",
  },
  {
    title: "Backend & Logic",
    description: "C#, .NET y SQL. Lógica de servidor robusta y segura.",
    icon: Database,
    colSpan: "col-span-1",
    bgGradient: "from-orange-900/20 to-red-900/20",
  },
  {
    title: "Tech Stack",
    description: "TypeScript, Tailwind, Git, Framer Motion.",
    icon: Code2,
    colSpan: "col-span-1 md:col-span-2",
    bgGradient: "from-gray-800/50 to-gray-900/50",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Habilidades & <span className="text-accent">Arsenal</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Un conjunto de herramientas híbrido diseñado para resolver problemas
          complejos, tanto en el navegador como en el motor de juego.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${card.colSpan} group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 hover:border-accent/50 transition-colors duration-300`}
          >
            {/* Gradiente de fondo sutil */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
              <header className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-accent group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </header>

              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Decoración visual estilo "Tech" */}
              <div className="flex items-center gap-2 mt-2 opacity-50">
                <div className="h-1 w-1 rounded-full bg-accent" />
                <div className="h-[1px] w-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
