"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Gamepad2, Mail, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage();

  const navItems = [
    { name: t.nav.projects, href: "#projects", icon: Gamepad2 },
    { name: t.nav.contact, href: "#contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex items-center gap-2 p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg shadow-accent/5">
        {/* Logo Home */}
        <Link
          href="/"
          className="p-3 rounded-full bg-white/5 hover:bg-accent/20 transition-colors group"
        >
          <Cpu
            size={20}
            className="text-white group-hover:text-accent transition-colors"
          />
        </Link>

        <div className="w-px h-6 bg-white/10 mx-2"></div>

        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              {" "}
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all relative group"
              >
                <item.icon
                  size={16}
                  className="group-hover:text-accent transition-colors"
                />
                <span className="group-hover:text-accent transition-colors hidden sm:block">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-px h-6 bg-white/10 mx-2"></div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all text-xs font-bold text-gray-300"
        >
          <Languages size={14} />
          {language.toUpperCase()} {/* Muestra "ES" o "EN" */}
        </button>
      </div>
    </motion.nav>
  );
}
