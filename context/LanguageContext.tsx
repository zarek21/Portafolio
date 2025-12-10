"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. EL DICCIONARIO DE TEXTOS
const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Activo",
      title: "Desarrollador de Software Zarek Saleme",
      // Dividimos la descripción en 3 partes para mantener la palabra "apasionado" en otro color
      desc_part1: "En el detalle está la mejora,",
      desc_highlight: "apasionado",
      desc_part2: "con la creación de experiencias inmersivas.",
      btnProjects: "VER PROYECTOS",
      btnGithub: "GITHUB",
    },
    projects: {
      title: "Proyectos",
      highlight: "Destacados",
      code: "Código",
      demo: "Live Demo",
      viewDetails: "Ver Detalles",
      // Descripciones de tus proyectos
      p1_desc:
        "Tezka es un platformer 2D hack n’ slash inspirado en la mitología mexica, con un enfoque en movilidad rápida, combate técnico y un sistema único de doble personaje donde el jugador alterna entre Acatl y Tepochtli para superar obstáculos y enemigos. El juego combina exploración, combate con parry, doble salto, deslizamiento y mecánicas de mundo como bloques destructibles, plataformas móviles y zonas con efectos ambientales. Desarrollado en Unity, Tezca presenta cuatro niveles temáticos, enemigos basados en criaturas prehispánicas y un estilo artístico influenciado por referencias culturales.",
      p2_desc:
        "Desarrollé Pig Game, un juego clásico de dados implementado con JavaScript Vanilla, enfocado en practicar manipulación del DOM, control de estado y lógica de juego. El proyecto incluye interacción dinámica entre dos jugadores, gestión de turnos, animación del dado y detección automática del ganador.",
      p3_desc:
        "Sistema full-stack embebido capaz de alojar y servir un videojuego web desde un microcontrolador ESP32. Implementa una arquitectura Cliente-Servidor asíncrona para lograr interacción en tiempo real entre un botón físico (hardware) y la interfaz gráfica (software) mediante protocolos HTTP y APIs REST optimizadas.",
    },
    contact: {
      title: "¿Tienes una idea en mente?",
      subtitle: "Hagámosla realidad.",
      // TU NUEVO TEXTO AQUÍ:
      text: "Actualmente estoy disponible para proyectos freelance y roles de desarrollo en videojuegos o web.",
      btn: "Contáctame",
      footerRights: "Todos los derechos reservados.",
      footerDev: "Desarrollado con",
      passion: "Pasión", // <--- Agregamos esta palabra
    },
  },
  en: {
    nav: {
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Active",
      title: "Software Developer Zarek Saleme",
      desc_part1: "Improvement lies in the details,",
      desc_highlight: "passionate",
      desc_part2: "about creating immersive experiences.",
      btnProjects: "VIEW PROJECTS",
      btnGithub: "GITHUB",
    },
    projects: {
      title: "Featured",
      highlight: "Projects",
      code: "Code",
      demo: "Live Demo",
      viewDetails: "View Details",
      p1_desc:
        "Tezca is a 2D platformer hack ’n’ slash inspired by Mexica mythology, focused on fast mobility, technical combat, and a unique dual-character system where the player switches between Acatl and Tepochtli to overcome obstacles and enemies. The game blends exploration, parry-based combat, double jumping, sliding, and world mechanics such as destructible blocks, moving platforms, and areas with environmental effects. Developed in Unity, Tezca features four thematic levels, enemies inspired by pre-Hispanic creatures, and an art style influenced by cultural references.",
      p2_desc:
        "I developed Pig Game, a classic dice game implemented with Vanilla JavaScript, focused on practicing DOM manipulation, state management, and game logic. The project includes dynamic interaction between two players, turn management, dice animation, and automatic winner detection.",
      p3_desc:
        "A full-stack embedded system capable of hosting and serving a web-based video game from an ESP32 microcontroller. It implements an asynchronous client–server architecture to enable real-time interaction between a physical button (hardware) and the graphical interface (software) using HTTP protocols and optimized REST APIs.",
    },
    contact: {
      title: "Have an idea in mind?",
      subtitle: "Let's build it.",
      // TRADUCCIÓN DE TU TEXTO:
      text: "Currently available for freelance projects and Game Dev or Web development roles.",
      btn: "Contact Me",
      footerRights: "All rights reserved.",
      footerDev: "Developed with",
      passion: "Passion",
    },
  },
};

// Tipos para TypeScript
type Language = "es" | "en";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.es; // 't' tendrá la estructura de nuestros textos
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usarlo fácil en los componentes
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
