"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "en" | "es"

const translations = {
  en: {
    // Nav
    navServices: "Services",
    navProcess: "Process",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Schedule a Call",

    // Hero
    heroTag: "Fullstack Developers",
    heroTitle: "Your idea deserves to exist.",
    heroTitleAccent: "We build it.",
    heroDescription:
      "We help founders and businesses ship their MVP fast. Web, mobile, AI, bots, automation \u2014 whatever it takes to get you to market.",
    heroCta1: "Schedule a Call",
    heroCta2: "Write Us",

    // Services
    servicesTag: "What We Do",
    servicesTitle: "Everything you need to launch",
    servicesDescription:
      "From idea to production-ready product. We will cover every layer of the stack so you can focus on your business.",
    serviceWeb: "Web Development",
    serviceWebDesc:
      "Full-stack web applications, landing pages, dashboards, and admin panels. React, Next.js, Node.js, and more.",
    serviceMobile: "Mobile Apps",
    serviceMobileDesc:
      "Cross-platform mobile applications that feel native. React Native, Flutter, or whatever fits your needs.",
    serviceAI: "AI & Machine Learning",
    serviceAIDesc:
      "Chatbots, AI integrations, recommendation engines, and intelligent automation for your product.",
    serviceBots: "Bots & Automation",
    serviceBotsDesc:
      "Process automation, Telegram/WhatsApp bots, scraping, integrations with your existing tools.",
    serviceSaas: "SaaS Architecture",
    serviceSaasDesc:
      "Multi-tenant systems, subscription billing, user management, and scalable infrastructure.",
    serviceAPI: "APIs & Integrations",
    serviceAPIDesc:
      "RESTful and GraphQL APIs, third-party integrations, payment gateways, and data pipelines.",

    // Process
    processTag: "How It Works",
    processTitle: "From zero to MVP in weeks, not months",
    processStep1: "Discovery Call",
    processStep1Desc:
      "We talk about your idea, your users, and your goals. I ask the hard questions so we build the right thing.",
    processStep2: "Scope & Proposal",
    processStep2Desc:
      "I define features, timeline, and cost. No surprises. You know exactly what you get and when.",
    processStep3: "Build Sprint",
    processStep3Desc:
      "We build your MVP in focused sprints with weekly demos. You see progress every week.",
    processStep4: "Launch & Handoff",
    processStep4Desc:
      "Deployment, documentation, and support. Your product is live and you own everything.",

    // About
    aboutTag: "About Us",
    aboutTitle: "We are JM Fullstack, your tech partner",
    aboutDescription:
      "Fullstack developers with years of experience building products for startups and businesses across Latin America and beyond. We specialize in taking ideas from napkin to production. We've shipped dozens of MVPs, SaaS platforms, and automation systems. We work fast, communicate clearly, and deliver production-ready code.",
    aboutStat1: "MVPs Shipped",
    aboutStat2: "Happy Clients",
    aboutStat3: "Technologies",

    // CTA
    ctaTitle: "Ready to build?",
    ctaDescription:
      "Stop waiting. Let's get your MVP out the door. Book a free discovery call or send us a message.",
    ctaCta1: "Schedule a Call",
    ctaCta2: "Send an Email",
    ctaOr: "or email us directly at",

    // Footer
    footerTagline: "Building the future, one MVP at a time.",
    footerRights: "All rights reserved.",
    footerServices: "Services",
    footerCompany: "Company",
    footerAbout: "About",
    footerProcess: "Process",
    footerContact: "Contact",
  },
  es: {
    // Nav
    navServices: "Servicios",
    navProcess: "Proceso",
    navAbout: "Sobre mi",
    navContact: "Contacto",
    navCta: "Agendar Llamada",

    // Hero
    heroTag: "Desarrolladores Fullstack",
    heroTitle: "Tu idea merece existir.",
    heroTitleAccent: "Nosotros la construímos.",
    heroDescription:
      "Ayudamos a founders y empresas a sacar su MVP rapido. Web, mobile, IA, bots, automatizaciones \u2014 lo que haga falta para llegar al mercado.",
    heroCta1: "Agendar Llamada",
    heroCta2: "Escribinos",

    // Services
    servicesTag: "Que Hacemos",
    servicesTitle: "Todo lo que necesitas para lanzar",
    servicesDescription:
      "De la idea al producto listo para produccion. Cubrimos cada capa del stack para que vos te enfoques en tu negocio.",
    serviceWeb: "Desarrollo Web",
    serviceWebDesc:
      "Aplicaciones web full-stack, landing pages, dashboards y paneles de admin. React, Next.js, Node.js y mas.",
    serviceMobile: "Apps Móviles",
    serviceMobileDesc:
      "Aplicaciones móviles multiplataforma con experiencia nativa. React Native, Flutter, o lo que se adapte a tus necesidades.",
    serviceAI: "IA & Machine Learning",
    serviceAIDesc:
      "Chatbots, integraciones de IA, motores de recomendación y automatización inteligente para tu producto.",
    serviceBots: "Bots & Automatización",
    serviceBotsDesc:
      "Automatización de procesos, bots de Telegram/WhatsApp, scraping, integraciones con tus herramientas existentes.",
    serviceSaas: "Arquitectura SaaS",
    serviceSaasDesc:
      "Sistemas multi-tenant, facturación por suscripcion, gestión de usuarios e infraestructura escalable.",
    serviceAPI: "APIs & Integraciones",
    serviceAPIDesc:
      "APIs RESTful y GraphQL, integraciones de terceros, pasarelas de pago y pipelines de datos.",

    // Process
    processTag: "Como Funciona",
    processTitle: "De cero a MVP en semanas, no meses",
    processStep1: "Llamada de Descubrimiento",
    processStep1Desc:
      "Hablamos de tu idea, tus usuarios y tus objetivos. Hacemos las preguntas dificiles para construir lo correcto.",
    processStep2: "Alcance & Propuesta",
    processStep2Desc:
      "Definimos funcionalidades, timeline y costo. Sin sorpresas. Sabes exactamente que recibís y cuando.",
    processStep3: "Sprint de Desarrollo",
    processStep3Desc:
      "Construyo tu MVP en sprints enfocados con demos semanales. Ves progreso cada semana.",
    processStep4: "Lanzamiento & Entrega",
    processStep4Desc:
      "Deploy, documentación y soporte. Tu producto esta vivo y vos sos dueño de todo.",

    // About
    aboutTag: "Sobre Mi",
    aboutTitle: "Somos JM Fullstack, tu socio tecnologico",
    aboutDescription:
      "Desarrolladores fullstack con años de experiencia construyendo productos para startups y empresas en Latinoamerica y el mundo. Nos especializamos en llevar ideas del papel a produccion. Llevamos decenas de MVPs, plataformas SaaS y sistemas de automatizacion entregados. Trabajo rápido, comunicación clara y entrega de codigo listo para producción.",
    aboutStat1: "MVPs Entregados",
    aboutStat2: "Clientes Felices",
    aboutStat3: "Tecnologías",

    // CTA
    ctaTitle: "Listo para construir?",
    ctaDescription:
      "Deja de esperar. Saquemos tu MVP a la calle. Agenda una llamada gratis o mandanos un mensaje.",
    ctaCta1: "Agendar Llamada",
    ctaCta2: "Enviar Email",
    ctaOr: "o escribime directo a",

    // Footer
    footerTagline: "Construyendo el futuro, un MVP a la vez.",
    footerRights: "Todos los derechos reservados.",
    footerServices: "Servicios",
    footerCompany: "Empresa",
    footerAbout: "Sobre Mi",
    footerProcess: "Proceso",
    footerContact: "Contacto",
  },
} as const

type TranslationKey = keyof (typeof translations)["en"]

interface I18nContextType {
  locale: Locale
  t: (key: TranslationKey) => string
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] || key
    },
    [locale]
  )

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "es" : "en"))
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
