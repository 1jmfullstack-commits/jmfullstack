"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    heroTitle: "I Build Digital Products Fast",
    heroSubtitle:
      "Web & mobile apps, MVPs, automation and AI integrations for startups and creators.",
    cta: "Start a Project",
  },
  es: {
    heroTitle: "Construyo Productos Digitales Rápido",
    heroSubtitle:
      "Apps web y móviles, MVPs, automatizaciones e integraciones con IA para startups y creadores.",
    cta: "Iniciar Proyecto",
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
