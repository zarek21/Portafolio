"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        {/* Título Grande */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          {t.contact.title} <br /> {/* <--- Variable */}
          <span className="text-accent drop-shadow-[0_0_15px_rgba(187,134,252,0.3)]">
            {t.contact.subtitle} {/* <--- Variable */}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mx-auto"
        >
          {t.contact.text}
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Botón Principal (Correo) */}
          <Link
            href="mailto:jorge.saleme77@gmail.com"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-accent/20"
          >
            <Mail size={20} />
            {t.contact.btn} {/* <--- Variable */}
            <ArrowUpRight
              size={20}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {/* Botones Sociales */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/zarek21"
              target="_blank"
              className="p-4 rounded-full bg-surface border border-white/10 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jorge-zarek-saleme-g%C3%B3mez-9b2653370/"
              target="_blank"
              className="p-4 rounded-full bg-surface border border-white/10 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
