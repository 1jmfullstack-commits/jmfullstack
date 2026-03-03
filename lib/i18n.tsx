"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "en" | "es"

const translations = {
  en: {
    // Nav
    navServices: "Engagement",
    navProcess: "Process",
    navAbout: "Studio",
    navContact: "Contact",
    navCta: "Evaluate Project",

    // Hero
    heroTag: "Product Engineering Studio",
    heroTitle: "We build digital products.",
    heroTitleAccent: "From MVP to scalable systems.",
    heroDescription:
      "We design and develop production-ready MVPs for founders and growing startups. Whether you are validating an idea or restructuring your product to scale, we focus on clean architecture and fast execution.",
    heroCta1: "Evaluate my project",
    heroCta2: "Send brief",

    // Services
    servicesTag: "Engagement Models",
    servicesTitle: "Two clear paths depending on your stage",
    servicesDescription:
      "We don't sell random code. We build structured digital products ready to operate and grow.",

    serviceWeb: "Stage A — MVP Launch",
    serviceWebDesc:
      "30–45 day MVP built with core features, authentication, and clean deployment so you can validate with real users.",

    serviceMobile: "Stage B — Rebuild to Scale",
    serviceMobileDesc:
      "If your current system is unstable or messy, we restructure backend, database and architecture for serious growth.",

    serviceAI: "Solid SaaS Architecture",
    serviceAIDesc:
      "Multi-tenant systems, proper role management, scalable backend structure and production-ready standards.",

    serviceBots: "Integrations & Payments",
    serviceBotsDesc:
      "Stripe, third-party APIs, automation flows and structured integrations done properly.",

    serviceSaas: "Professional Deployment",
    serviceSaasDesc:
      "Infrastructure setup, production environments and technical configuration prepared for growth.",

    serviceAPI: "Documentation & Handoff",
    serviceAPIDesc:
      "Clean codebase, repository ownership transfer, system access and basic documentation included.",

    // Process
    processTag: "Execution Framework",
    processTitle: "Clear process. Concrete deliverables.",
    processStep1: "Strategic Diagnosis",
    processStep1Desc:
      "We analyze your stage, define realistic scope and technical priorities before writing a single line of code.",

    processStep2: "Fixed Proposal",
    processStep2Desc:
      "Defined features, timeline and fixed pricing. 50% upfront to start development.",

    processStep3: "Focused Build Sprint",
    processStep3Desc:
      "Structured development with weekly progress visibility and direct communication.",

    processStep4: "Delivery & Transfer",
    processStep4Desc:
      "Deployment, repository ownership, credentials transfer and documentation. You own everything.",

    // About
    aboutTag: "About the Studio",
    aboutTitle: "Execution-focused engineering team",
    aboutDescription:
      "JM Fullstack is a product engineering studio specialized in MVP development and scalable digital systems. We work with founders who need speed without sacrificing technical structure. Not a corporate agency. Not a solo freelancer. A focused execution partner.",
    aboutStat1: "MVPs Delivered",
    aboutStat2: "Clients",
    aboutStat3: "Technologies",

    // CTA
    ctaTitle: "What stage is your product in?",
    ctaDescription:
      "Early idea or unstable system. We define the right next move.",
    ctaCta1: "Launch my MVP",
    ctaCta2: "Restructure my product",
    ctaOr: "or email us at",

    // Footer
    footerTagline: "Product engineering for founders who execute.",
    footerRights: "All rights reserved.",
    footerServices: "Engagement",
    footerCompany: "Studio",
    footerAbout: "About",
    footerProcess: "Process",
    footerContact: "Contact",
  },
      // Diagnóstico
    diagTag: "Audit",
    diagTitle: "Product Technical Audit",
    diagTitleAccent: "in 24h",
    diagSubtitle:
      "Actionable clarity on your MVP or current system: risks, architecture, next steps, and a realistic estimate.",

    diagPaidCta: "Express Audit — USD 150",
    diagPaidUrl: "https://payoneer.com", // <- CAMBIAR por tu link real de cobro
    diagFreeCta: "Free Evaluation (48h)",
    diagFreeEmail: "juan.oddone@jmfullstack.lat",
    diagFreeSubject: "Free evaluation (48h) — Access to repo / product",
    diagNote: "The audit is discounted if we move forward with development.",

    diagBox1Title: "What you get",
    diagInc1: "Review of idea, MVP or repository",
    diagInc2: "Architecture + stack evaluation",
    diagInc3: "Technical risks and bottlenecks",
    diagInc4: "Prioritized improvements",
    diagInc5: "Realistic time & cost estimate",
    diagInc6: "15–20 min Loom video walkthrough",
    diagInc7: "Suggested roadmap (short doc)",

    diagBox2Title: "What it does NOT include",
    diagExc1: "Implementation / development work",
    diagExc2: "Ongoing support",
    diagExc3: "Full UX redesign",
    diagExc4: "Mandatory meetings",

    diagGuaranteeTitle: "Guarantee",
    diagGuaranteeDesc:
      "If the audit doesn’t give you real and actionable clarity, we refund it.",

    diagAltTitle: "Want zero friction?",
    diagAltDesc:
      "Reply to the email with your repo + a short context. We’ll handle the rest.",

  es: {
    // Nav
    navServices: "Modelo",
    navProcess: "Proceso",
    navAbout: "Estudio",
    navContact: "Contacto",
    navCta: "Evaluar Proyecto",

    // Hero
    heroTag: "Estudio de Ingeniería de Producto",
    heroTitle: "Construimos productos digitales.",
    heroTitleAccent: "Desde MVP hasta sistemas escalables.",
    heroDescription:
      "Diseñamos y desarrollamos MVPs listos para producción para founders y startups en crecimiento. Ya sea que estés validando una idea o necesites reestructurar tu sistema para escalar, trabajamos con foco en arquitectura limpia y ejecución rápida.",
    heroCta1: "Evaluar mi proyecto",
    heroCta2: "Enviar brief",

    // Services
    servicesTag: "Modelos de Trabajo",
    servicesTitle: "Dos caminos claros según tu etapa",
    servicesDescription:
      "No vendemos código aislado. Construimos productos digitales estructurados y preparados para crecer.",

    serviceWeb: "Etapa A — Lanzamiento de MVP",
    serviceWebDesc:
      "MVP en 30–45 días con funcionalidades clave, autenticación y deploy profesional para validar con usuarios reales.",

    serviceMobile: "Etapa B — Reestructuración para Escalar",
    serviceMobileDesc:
      "Si tu sistema actual es inestable o desordenado, rediseñamos backend, base de datos y arquitectura para crecimiento real.",

    serviceAI: "Arquitectura SaaS Sólida",
    serviceAIDesc:
      "Sistema multi-tenant, roles bien definidos, backend estructurado y estándares de producción.",

    serviceBots: "Integraciones & Pagos",
    serviceBotsDesc:
      "Stripe, APIs externas, automatizaciones y flujos correctamente estructurados.",

    serviceSaas: "Deploy Profesional",
    serviceSaasDesc:
      "Configuración de infraestructura, entorno productivo y base técnica preparada para escalar.",

    serviceAPI: "Documentación & Entrega",
    serviceAPIDesc:
      "Código limpio, transferencia de repositorio, accesos completos y documentación básica incluida.",

    // Process
    processTag: "Marco de Ejecución",
    processTitle: "Proceso claro. Entregables concretos.",
    processStep1: "Diagnóstico Estratégico",
    processStep1Desc:
      "Analizamos tu etapa actual y definimos prioridades técnicas antes de comenzar el desarrollo.",

    processStep2: "Propuesta Cerrada",
    processStep2Desc:
      "Funcionalidades definidas, timeline claro y precio fijo. 50% upfront para iniciar.",

    processStep3: "Sprint de Construcción",
    processStep3Desc:
      "Desarrollo estructurado con visibilidad semanal y comunicación directa.",

    processStep4: "Entrega & Transferencia",
    processStep4Desc:
      "Deploy, transferencia de repositorio, credenciales y documentación. El proyecto es completamente tuyo.",

    // About
    aboutTag: "Sobre el Estudio",
    aboutTitle: "Equipo de ingeniería enfocado en ejecución",
    aboutDescription:
      "JM Fullstack es un estudio de desarrollo especializado en MVPs y sistemas digitales escalables. Trabajamos con founders que necesitan velocidad sin sacrificar estructura técnica. No somos agencia corporativa ni freelancer aislado: somos un partner de ejecución enfocado en resultados.",
    aboutStat1: "MVPs Entregados",
    aboutStat2: "Clientes",
    aboutStat3: "Tecnologías",

    // CTA
    ctaTitle: "¿En qué etapa está tu producto?",
    ctaDescription:
      "Idea inicial o sistema que necesita estructura. Definimos el siguiente paso juntos.",
    ctaCta1: "Quiero lanzar mi MVP",
    ctaCta2: "Necesito reestructurar mi producto",
    ctaOr: "o escribinos a",

    // Footer
    footerTagline: "Ingeniería de producto para founders que ejecutan.",
    footerRights: "Todos los derechos reservados.",
    footerServices: "Modelo",
    footerCompany: "Estudio",
    footerAbout: "Sobre el Estudio",
    footerProcess: "Proceso",
    footerContact: "Contacto",
  },
      // Diagnóstico
    diagTag: "Diagnóstico",
    diagTitle: "Diagnóstico Técnico",
    diagTitleAccent: "en 24h",
    diagSubtitle:
      "Claridad accionable sobre tu MVP o sistema actual: riesgos, arquitectura, próximos pasos y estimación realista.",

    diagPaidCta: "Diagnóstico Express — USD 150",
    diagPaidUrl: "https://payoneer.com", // <- CAMBIAR por tu link real de cobro
    diagFreeCta: "Evaluación Gratis (48h)",
    diagFreeEmail: "juan.oddone@jmfullstack.lat",
    diagFreeSubject: "Evaluación gratis (48h) — Acceso a repo / producto",
    diagNote: "El diagnóstico se descuenta si avanzamos con el desarrollo.",

    diagBox1Title: "Qué recibís",
    diagInc1: "Revisión de idea, MVP o repositorio",
    diagInc2: "Evaluación de arquitectura + stack",
    diagInc3: "Riesgos técnicos y cuellos de botella",
    diagInc4: "Recomendaciones priorizadas",
    diagInc5: "Estimación realista de tiempo y costo",
    diagInc6: "Video Loom explicativo (15–20 min)",
    diagInc7: "Roadmap sugerido (documento corto)",

    diagBox2Title: "Qué NO incluye",
    diagExc1: "Desarrollo o implementación",
    diagExc2: "Soporte continuo",
    diagExc3: "Rediseño UX completo",
    diagExc4: "Reuniones obligatorias",

    diagGuaranteeTitle: "Garantía",
    diagGuaranteeDesc:
      "Si el diagnóstico no te aporta claridad real y accionable, te devolvemos el dinero.",

    diagAltTitle: "¿Cero fricción?",
    diagAltDesc:
      "Respondé el mail con tu repo + un contexto corto. Nosotros nos encargamos del resto.",
} as const

type TranslationKey = string

interface I18nContextType {
  locale: Locale
  t: (key: TranslationKey) => string
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const t = useCallback(
  (key: string): string => {
    return (translations as any)[locale][key] || key
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
