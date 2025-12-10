"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Gamepad2, Database } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Game Dev",
      description:
        "Unity & C#. Creo mecánicas complejas y sistemas inmersivos.",
      icon: Gamepad2,
      colSpan: "md:col-span-2",
    },
    {
      title: "Full Stack",
      description: "Next.js & Node. Aplicaciones web rápidas y escalables.",
      icon: Globe,
      colSpan: "md:col-span-1",
    },
    {
      title: "Backend",
      description: "Arquitectura sólida en .NET y bases de datos SQL.",
      icon: Database,
      colSpan: "md:col-span-1",
    },
    {
      title: "Arsenal",
      description: "TypeScript, Tailwind, Git, Framer Motion.",
      icon: Code2,
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col md:flex-row gap-10 items-center"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Más allá del <span className="text-accent">Código</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Soy un desarrollador apasionado por la intersección entre la
            ingeniería de software rigurosa y la creatividad interactiva.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Mi enfoque no es solo "hacer que funcione", sino crear sistemas
            limpios y experiencias que se sientan vivas. Ya sea optimizando un
            backend en <span className="text-white font-medium">.NET</span> o
            puliendo físicas en{" "}
            <span className="text-white font-medium">Unity</span>, busco siempre
            la excelencia técnica.
          </p>
        </div>

        {/* Stats */}
        <div className="flex-1 flex gap-4 justify-center md:justify-end">
          <div className="p-6 rounded-2xl bg-surface border border-white/5 text-center w-32 group hover:border-accent/50 transition-colors">
            <span className="block text-3xl font-bold text-accent group-hover:scale-110 transition-transform">
              +3
            </span>
            <span className="text-xs text-muted uppercase tracking-wider">
              Años Exp.
            </span>
          </div>
          <div className="p-6 rounded-2xl bg-surface border border-white/5 text-center w-32 group hover:border-accent/50 transition-colors">
            <span className="block text-3xl font-bold text-accent group-hover:scale-110 transition-transform">
              10+
            </span>
            <span className="text-xs text-muted uppercase tracking-wider">
              Proyectos
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${card.colSpan} group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 hover:border-accent/50 transition-colors duration-300`}
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            <div className="relative z-10">
              <div className="mb-4 p-2 w-fit rounded-lg bg-white/5 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
