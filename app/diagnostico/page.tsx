"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X, Clock, Shield, Mail, CreditCard } from "lucide-react"

const PAYONEER_PAYMENT_LINK = "https://PAYONEER-LINK-AQUI" // <-- pegá tu Payment Request link

export default function DiagnosticoPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-mono text-muted-foreground">
            <Clock className="size-4" />
            Respuesta en 24h hábiles
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            Diagnóstico Técnico de Producto en <span className="text-primary">24h</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Te devolvemos claridad accionable sobre tu MVP o sistema actual: riesgos, arquitectura, próximos pasos y
            estimación realista.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto px-8 h-12 text-base">
              <a href={PAYONEER_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                <CreditCard className="mr-2 size-4" />
                Diagnóstico Express — USD 150
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 h-12 text-base"
            >
              <a href="mailto:juan.oddone@jmfullstack.lat?subject=Evaluación%20Gratis%20-%20Proyecto">
                <Mail className="mr-2 size-4" />
                Evaluación Gratis (48h)
              </a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            El diagnóstico se <span className="text-foreground font-medium">descuenta</span> si avanzamos con el desarrollo.
          </p>
        </div>

        {/* GRID: WHAT YOU GET / WHAT IT ISN'T */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="text-xl font-semibold">Qué recibís</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Revisión de idea, MVP o repositorio",
                "Evaluación de arquitectura + stack",
                "Riesgos técnicos y cuellos de botella",
                "Recomendaciones de mejora (priorizadas)",
                "Estimación realista de tiempo y costo",
                "Video Loom 15–20 min explicativo",
                "Roadmap sugerido (documento corto)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 size-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="text-xl font-semibold">Qué NO incluye</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Desarrollo o implementación",
                "Soporte continuo",
                "Rediseño UX completo",
                "Reuniones obligatorias",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <X className="mt-0.5 size-5 text-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-5">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Shield className="size-4 text-primary" />
                Garantía
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Si el diagnóstico no te aporta claridad real y accionable, te devolvemos el dinero.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-16 rounded-2xl border border-border bg-background p-8">
          <h2 className="text-xl font-semibold">Cómo funciona</h2>

          <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            {[
              {
                title: "1) Pagás el diagnóstico",
                desc: "USD 150 por Payoneer (link).",
              },
              {
                title: "2) Enviás material",
                desc: "Repo / URL / doc / Loom / credenciales temporales si aplica.",
              },
              {
                title: "3) Analizamos",
                desc: "Arquitectura, riesgos, prioridades y próximos pasos.",
              },
              {
                title: "4) Recibís entrega",
                desc: "Loom + roadmap + estimación en 24h hábiles.",
              },
            ].map((step) => (
              <li key={step.title} className="rounded-xl border border-border bg-secondary/20 p-5">
                <div className="font-medium text-foreground">{step.title}</div>
                <div className="mt-1 text-sm">{step.desc}</div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <a href={PAYONEER_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                Pagar Diagnóstico Express
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link href="/">Volver al sitio</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
