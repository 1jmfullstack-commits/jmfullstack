"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export default function DiagnosticoPage() {
  const { t } = useI18n()

  return (
    <main className="pt-24 pb-24">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold">
          {t("diagTitle")}{" "}
          <span className="text-primary">{t("diagTitleAccent")}</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          {t("diagSubtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href={t("diagPaidUrl")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("diagPaidCta")}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <a
              href={`mailto:${t("diagFreeEmail")}?subject=${encodeURIComponent(
                t("diagFreeSubject")
              )}`}
            >
              {t("diagFreeCta")}
            </a>
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          {t("diagNote")}
        </p>
      </section>

      {/* COMPARISON */}
      <section className="mt-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* GRATIS */}
        <div className="border border-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            {t("diagFreeCta")}
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Revisión general del proyecto
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              3–5 observaciones clave
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Confirmación de encaje
            </li>
            <li className="flex items-start gap-2">
              <X className="size-4 text-muted-foreground mt-1" />
              Sin roadmap estructurado
            </li>
            <li className="flex items-start gap-2">
              <X className="size-4 text-muted-foreground mt-1" />
              Sin estimación detallada
            </li>
            <li className="flex items-start gap-2">
              <X className="size-4 text-muted-foreground mt-1" />
              Sin documento entregable
            </li>
          </ul>
        </div>

        {/* PAGO */}
        <div className="border border-primary rounded-xl p-8 bg-primary/5">
          <h2 className="text-2xl font-semibold mb-6">
            {t("diagPaidCta")}
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Revisión técnica completa del repositorio
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Evaluación de arquitectura + base de datos
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Identificación de riesgos técnicos
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Roadmap por fases priorizado
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Estimación realista de tiempo y costo
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Video Loom (15–20 min)
            </li>
            <li className="flex items-start gap-2">
              <Check className="size-4 text-primary mt-1" />
              Documento entregable + garantía
            </li>
          </ul>
        </div>
      </section>

      {/* CIERRE */}
      <section className="mt-24 text-center max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">
          ¿Por qué pagar por claridad?
        </h3>

        <p className="mt-6 text-muted-foreground">
          Un diagnóstico profesional puede ahorrarte miles en malas decisiones técnicas.
          Construir mal desde el inicio es mucho más caro que validar correctamente.
        </p>
      </section>

    </main>
  )
}
