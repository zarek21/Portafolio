"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeContextType = {
  isInverted: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isInverted, setIsInverted] = useState(false);

  const toggleTheme = () => {
    setIsInverted((prev) => !prev);
  };

  useEffect(() => {
    if (isInverted) {
      document.body.classList.add("theme-swap");
    } else {
      document.body.classList.remove("theme-swap");
    }
  }, [isInverted]);

  return (
    <ThemeContext.Provider value={{ isInverted, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
