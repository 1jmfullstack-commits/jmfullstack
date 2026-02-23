"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    navProjects: "Projects",
    navContact: "Contact",
    heroTitle: "We Build Digital Power.",
    heroSubtitle: "High-performance web, mobile & AI systems.",
    cta: "Start the Project →",
  },
  es: {
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroTitle: "Construimos Poder Digital.",
    heroSubtitle: "Sistemas web, mobile y AI de alto rendimiento.",
    cta: "Iniciar Proyecto →",
  },
  fr: {
    navProjects: "Projets",
    navContact: "Contact",
    heroTitle: "Nous construisons la puissance numérique.",
    heroSubtitle: "Systèmes web, mobile et IA haute performance.",
    cta: "Démarrer le projet →",
  },
  de: {
    navProjects: "Projekte",
    navContact: "Kontakt",
    heroTitle: "Wir bauen digitale Power.",
    heroSubtitle: "Hochleistungs-Web-, Mobile- und KI-Systeme.",
    cta: "Projekt starten →",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
