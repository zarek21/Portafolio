"use client";

import { motion } from "framer-motion";
import { Github, LayoutGrid, FileText } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Scene3D from "./Scene3D";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <Scene3D />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 max-w-4xl z-10"
      >
        {/* Badge "Activo" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            {t.hero.badge} {/* <--- Variable */}
          </span>
        </motion.div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
            {t.hero.title} {/* <--- Variable */}
          </span>
        </h1>

        {/* Descripción con parte coloreada */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          {t.hero.desc_part1}{" "}
          <span className="text-accent">{t.hero.desc_highlight}</span>{" "}
          {t.hero.desc_part2}
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-accent text-black font-bold text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.btnProjects} <LayoutGrid size={18} />{" "}
              {/* <--- Variable */}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="https://github.com/zarek21"
            target="_blank"
            className="px-8 py-3 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            {t.hero.btnGithub} <Github size={18} /> {/* <--- Variable */}
          </Link>

          <a
            href="/cv-zarek.pdf"
            download="CV_Zarek_Saleme.pdf"
            className="px-8 py-3 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:text-accent transition-all flex items-center gap-2 group"
          >
            {t.hero.btnCv}
            <FileText
              size={18}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
