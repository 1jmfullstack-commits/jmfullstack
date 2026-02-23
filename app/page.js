"use client";

import { useState, useEffect } from "react";

const content = {
  en: {
    heroTitle: "A Lean Digital Product Studio.",
    heroSubtitle:
      "We build high-performance websites, mobile apps, and AI-powered automations for startups and businesses worldwide.",
    cta: "Get a quote in 24h",
    servicesTitle: "What We Do",
    services: [
      {
        title: "Web Development",
        desc: "Landing pages, corporate sites, dashboards, and e-commerce built for speed and conversion.",
      },
      {
        title: "Mobile Apps",
        desc: "Cross-platform mobile apps using modern frameworks with native performance.",
      },
      {
        title: "Automation & AI",
        desc: "Bots, workflows, and AI integrations that reduce manual work and increase revenue.",
      },
    ],
    contactTitle: "Let’s Build Something Great.",
    contactSubtitle: "Tell us about your project. We reply fast.",
    footer: "© " + new Date().getFullYear() + " JM Fullstack Studio",
  },
  es: {
    heroTitle: "Un Estudio Digital Ágil.",
    heroSubtitle:
      "Creamos sitios web, apps mobile y automatizaciones con IA para startups y empresas en todo el mundo.",
    cta: "Cotización en 24h",
    servicesTitle: "Qué Hacemos",
    services: [
      {
        title: "Desarrollo Web",
        desc: "Landings, sitios corporativos, dashboards y e-commerce pensados para conversión y velocidad.",
      },
      {
        title: "Apps Mobile",
        desc: "Aplicaciones cross-platform con performance nativa y arquitectura moderna.",
      },
      {
        title: "Automatización & IA",
        desc: "Bots, flujos e integraciones que reducen trabajo manual y aumentan ingresos.",
      },
    ],
    contactTitle: "Construyamos Algo Grande.",
    contactSubtitle: "Contanos tu idea. Respondemos rápido.",
    footer: "© " + new Date().getFullYear() + " JM Fullstack Studio",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    setLang(browserLang);
  }, []);

  const t = content[lang];

  return (
    <div
      style={{
        background: "#0f0f14",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <strong>JM Fullstack Studio</strong>
        <div>
          <button
            onClick={() => setLang("en")}
            style={{
              marginRight: 10,
              background: lang === "en" ? "white" : "transparent",
              color: lang === "en" ? "black" : "white",
              border: "1px solid white",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("es")}
            style={{
              background: lang === "es" ? "white" : "transparent",
              color: lang === "es" ? "black" : "white",
              border: "1px solid white",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            ES
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: 20 }}>
          {t.heroTitle}
        </h1>
        <p
          style={{
            fontSize: "20px",
            opacity: 0.8,
            marginBottom: 40,
          }}
        >
          {t.heroSubtitle}
        </p>
        <a
          href="mailto:hola@jmfullstack.lat"
          style={{
            background: "white",
            color: "black",
            padding: "15px 30px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {t.cta}
        </a>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "80px 20px",
          background: "#15151c",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: 50 }}>
            {t.servicesTitle}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 30,
            }}
          >
            {t.services.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#1e1e28",
                  padding: 30,
                  borderRadius: 12,
                }}
              >
                <h3>{s.title}</h3>
                <p style={{ opacity: 0.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2>{t.contactTitle}</h2>
        <p style={{ opacity: 0.8, marginBottom: 30 }}>
          {t.contactSubtitle}
        </p>
        <a
          href="mailto:hola@jmfullstack.lat"
          style={{
            background: "white",
            color: "black",
            padding: "15px 30px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          hola@jmfullstack.lat
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: 30,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          opacity: 0.6,
        }}
      >
        {t.footer}
      </footer>
    </div>
  );
}
