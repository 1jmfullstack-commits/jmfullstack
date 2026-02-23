"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      heroTitle1: "We Build",
      heroTitle2: "Digital Power",
      heroSubtitle:
        "High-performance web, mobile & AI systems for brands that want to scale.",
      startProject: "Start a Project",
      caseStudy: "Case Study",
      newUsers: "New Users / Day",
      conversion: "Conversion Growth",
      massive: "Let’s Build Something Massive.",
      emailUs: "Email Us",
    },
    es: {
      heroTitle1: "Construimos",
      heroTitle2: "Poder Digital",
      heroSubtitle:
        "Sistemas web, mobile y AI de alto rendimiento para marcas que quieren escalar.",
      startProject: "Iniciar Proyecto",
      caseStudy: "Caso de Estudio",
      newUsers: "Usuarios Nuevos / Día",
      conversion: "Crecimiento en Conversión",
      massive: "Construyamos Algo Grande.",
      emailUs: "Envíanos un Email",
    },
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
