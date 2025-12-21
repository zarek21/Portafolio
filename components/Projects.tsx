"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // <--- 1. IMPORTAR ESTO
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Server, X, Play, Maximize2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  // Estado para detectar si ya estamos en el navegador (necesario para el Portal)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Tezka Game",
      category: "Game Dev",
      description: t.projects.p1_desc,
      tags: ["Unity", "C#", "2D", "Art Lineless"],
      links: { demo: null, repo: null },
      videoUrl: "/videos/gameplay.mp4",
      gradient: "from-purple-900/50 to-indigo-900/50",
    },

    {
      title: "Pig Game Javascript",
      category: "Game Dev",
      description: t.projects.p2_desc,
      tags: ["HTML", "CSS3", "JavaScript"],
      links: {
        demo: "https://itsagameo.netlify.app/",
        repo: "https://github.com/zarek21/Javascript_Pig_Game",
      },
      videoUrl: "/videos/pigGame.mp4",
      icon: Server,
      gradient: "from-orange-900/50 to-red-900/50",
    },

    {
      title: "ESP32 Async Game Server",
      category: "Full Stack / IoT ",
      description: t.projects.p3_desc,
      tags: [
        "C++",
        "ESP32",
        "JavaScript",
        "HTML5",
        "IoT",
        "REST API",
        "Async Server",
        "SPIFFS",
        "CSS3",
      ],
      links: {
        demo: null,
        repo: "https://github.com/zarek21/ESP32_Async_Game_Server",
      },
      videoUrl: "/videos/esp32.mp4",
      icon: Server,
      gradient: "from-orange-900/50 to-red-900/50",
    },

    {
      title: "Omnifood Website",
      category: "Web Dev",
      description: t.projects.p4_desc,
      tags: ["JavaScript", "HTML5", "CSS3"],
      links: {
        demo: "https://itsomnifood.netlify.app/",
        repo: "https://github.com/zarek21/OmniFood",
      },
      videoUrl: "/videos/omnifoodVid.mp4",
      icon: Server,
      gradient: "from-orange-900/50 to-red-900/50",
    },

    {
      title: "El legado",
      category: "Game Dev",
      description: t.projects.p5_desc,
      tags: ["Unity", "C#", "3D", "GameJam"],
      links: {
        demo: "https://rampas.itch.io/the-legacyy",
        repo: null,
      },
      videoUrl: "/videos/Legacy.mp4",
      icon: Server,
      gradient: "from-orange-900/50 to-red-900/50",
    },

    {
      title: "Archivex",
      category: "Full Stack",
      description: t.projects.p6_desc,
      tags: ["Next.Js", "Supabase"],
      links: {
        demo: null,
        repo: "https://github.com/zarek21/Cowork_Manager",
      },
      videoUrl: "/videos/Archivex.mp4",
      icon: Server,
      gradient: "from-orange-900/50 to-red-900/50",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.projects.title}{" "}
          <span className="text-accent">{t.projects.highlight}</span>
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </motion.div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            layoutId={`card-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-accent/10 cursor-pointer flex flex-col h-full"
          >
            {/* Preview */}
            <div className="h-48 w-full relative overflow-hidden bg-black/50">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  {project.icon && (
                    <project.icon size={40} className="text-white/20" />
                  )}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="bg-accent text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 size={16} /> {t.projects.viewDetails}
                </span>
              </div>
            </div>

            {/* Info Card */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-auto">
                <span className="text-xs font-bold text-accent tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] px-2 py-1 text-gray-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* --- EL MODAL (Ahora con PORTAL) --- */}
      {/* Esto renderiza el modal fuera de la jerarquía normal, directamente en el body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                {/* Fondo Oscuro (Ahora sí tapará el Navbar) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-black/95 backdrop-blur-md"
                />

                {/* Contenedor del Modal */}
                <motion.div
                  layoutId={`card-${projects.indexOf(selectedProject)}`}
                  className="relative w-full max-w-5xl h-[90vh] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Columna Izquierda: Video */}
                  <div className="w-full h-1/3 md:h-full md:w-3/5 bg-black relative shrink-0">
                    {selectedProject.videoUrl ? (
                      <video
                        src={selectedProject.videoUrl}
                        autoPlay
                        loop
                        muted
                        controls
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}
                      >
                        {selectedProject.icon && (
                          <selectedProject.icon
                            size={80}
                            className="text-white/20"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Columna Derecha: Texto (Con Scroll) */}
                  <div className="w-full md:w-2/5 p-8 bg-surface flex flex-col h-2/3 md:h-full overflow-y-auto custom-scrollbar relative">
                    <span className="text-xs font-bold text-accent tracking-wider uppercase shrink-0">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-2 mb-6 shrink-0">
                      {selectedProject.title}
                    </h2>

                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {selectedProject.description}
                      </p>

                      <div className="shrink-0">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Server size={16} className="text-accent" />
                          Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex gap-4 shrink-0 mt-auto pb-4">
                        {/* 1. PROTECCIÓN PARA EL BOTÓN DE CÓDIGO (REPO) */}
                        {selectedProject.links.repo && (
                          <Link
                            href={selectedProject.links.repo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10"
                          >
                            <Github size={18} /> {t.projects.code}
                          </Link>
                        )}

                        {/* 2. PROTECCIÓN PARA EL BOTÓN DE DEMO */}
                        {selectedProject.links.demo && (
                          <Link
                            href={selectedProject.links.demo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-accent hover:bg-accent/80 text-black font-bold transition-colors"
                          >
                            <Play size={18} fill="currentColor" />{" "}
                            {t.projects.demo}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Botón Cerrar (Ahora nada lo puede tapar) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute top-4 right-4 z-[100] p-2 rounded-full bg-black/70 text-white border border-white/10 hover:bg-accent hover:text-black transition-all cursor-pointer shadow-xl backdrop-blur-sm"
                  >
                    <X size={24} />
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body // <--- AQUÍ ESTÁ LA CLAVE: Lo mandamos al body
        )}
    </section>
  );
}
