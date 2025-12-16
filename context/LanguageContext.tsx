"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Activo",
      title: "Desarrollador de Software Zarek Saleme",
      desc_part1: "En el detalle está la mejora,",
      desc_highlight: "apasionado",
      desc_part2: "con la creación de experiencias inmersivas.",
      btnProjects: "VER PROYECTOS",
      btnGithub: "GITHUB",
      btnCv: "DESCARGAR CV",
    },
    projects: {
      title: "Proyectos",
      highlight: "Destacados",
      code: "Código",
      demo: "Live Demo",
      viewDetails: "Ver Detalles",
      p1_desc:
        "Tezka es un platformer 2D hack n’ slash inspirado en la mitología mexica, con un enfoque en movilidad rápida, combate técnico y un sistema único de doble personaje donde el jugador alterna entre Acatl y Tepochtli para superar obstáculos y enemigos. El juego combina exploración, combate con parry, doble salto, deslizamiento y mecánicas de mundo como bloques destructibles, plataformas móviles y zonas con efectos ambientales. Desarrollado en Unity, Tezca presenta cuatro niveles temáticos, enemigos basados en criaturas prehispánicas y un estilo artístico influenciado por referencias culturales.",
      p2_desc:
        "Desarrollé Pig Game, un juego clásico de dados implementado con JavaScript Vanilla, enfocado en practicar manipulación del DOM, control de estado y lógica de juego. El proyecto incluye interacción dinámica entre dos jugadores, gestión de turnos, animación del dado y detección automática del ganador.",
      p3_desc:
        "Sistema full-stack embebido capaz de alojar y servir un videojuego web desde un microcontrolador ESP32. Implementa una arquitectura Cliente-Servidor asíncrona para lograr interacción en tiempo real entre un botón físico (hardware) y la interfaz gráfica (software) mediante protocolos HTTP y APIs REST optimizadas.",
      p4_desc:
        "Omnifood es una landing page moderna y responsiva para un servicio ficticio de suscripción de comida saludable impulsado por inteligencia artificial. El sitio comunica de forma clara el valor del producto, desde la identidad de marca y la propuesta de valor hasta los planes de precios y testimonios de clientes.",
      p5_desc:
        "The Legacy es un juego inspirado en la lucha libre mexicana y en los héroes cuyas historias sobreviven al paso del tiempo. Fue desarrollado durante una game jam, enfocado en unir narrativa y mecánicas de juego dentro de un proceso creativo rápido e intenso. El jugador toma el papel de El Legado, el campeón querido de su pueblo. Por la noche, sube al ring en combates beat ’em up llenos de movimientos poderosos y el estilo clásico de la lucha libre. Durante el día, la máscara se deja a un lado y el hombre detrás del mito recorre su comunidad, conversa con su gente y vive la calma de alguien que carga con el peso de una leyenda. A través de su ciclo de día y noche, The Legacy explora la identidad, el legado y el paso del tiempo, mostrando cómo el espíritu de un héroe puede trascender más allá del ring.",
    },
    contact: {
      title: "¿Tienes una idea en mente?",
      subtitle: "Hagámosla realidad.",
      text: "Actualmente estoy disponible para proyectos freelance y roles de desarrollo en videojuegos o web.",
      btn: "Contáctame",
      footerRights: "Todos los derechos reservados.",
      footerDev: "Desarrollado con",
      passion: "Pasión",
      btnWhatsapp: "WhatsApp",
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
      btnCv: "DOWNLOAD CV",
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
      p4_desc:
        "Omnifood is a modern, responsive landing page for a fictional AI-powered food subscription service focused on healthy eating and user convenience. The website presents a complete product narrative, from brand positioning and value proposition to pricing plans and customer testimonials.",
      p5_desc:
        "The Legacy is a game inspired by Mexican wrestling and the heroes whose stories outlive them. Developed during a game jam, the project explores how gameplay and narrative can merge under tight creative constraints. You step into the boots of El Legado, the beloved champion of his hometown. By night, you enter the ring in intense beat ’em up combat, performing powerful moves infused with classic lucha libre flair. By day, the mask comes off, and you walk through the village as the man behind the legend—talking with its people and experiencing the quiet life shaped by fame and responsibility. Through its day-and-night cycle, The Legacy reflects on identity, legacy, and the passage of time, showing how a hero’s spirit can endure far beyond the ring.",
    },
    contact: {
      title: "Have an idea in mind?",
      subtitle: "Let's build it.",
      text: "Currently available for freelance projects and Game Dev or Web development roles.",
      btn: "Contact Me",
      footerRights: "All rights reserved.",
      footerDev: "Developed with",
      passion: "Passion",
      btnWhatsapp: "WhatsApp",
    },
  },
};

type Language = "es" | "en";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.es;
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
