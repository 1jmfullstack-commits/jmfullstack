"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X, CreditCard, Mail } from "lucide-react"

export function Diagnostico() {
  const { t } = useI18n()

  return (
    <section className="relative pt-24 pb-24 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.22_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.22_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
            {t("diagTag")}
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-foreground">{t("diagTitle")}</span>{" "}
            <span className="text-primary">{t("diagTitleAccent")}</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {t("diagSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 w-full sm:w-auto"
            >
              <a
                href={t("diagPaidUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CreditCard className="mr-2 size-4" />
                {t("diagPaidCta")}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground text-base px-8 h-12 w-full sm:w-auto"
            >
              <a href={`mailto:${t("diagFreeEmail")}?subject=${encodeURIComponent(t("diagFreeSubject"))}`}>
                <Mail className="mr-2 size-4" />
                {t("diagFreeCta")}
              </a>
            </Button>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            {t("diagNote")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-8">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              {t("diagBox1Title")}
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "diagInc1",
                "diagInc2",
                "diagInc3",
                "diagInc4",
                "diagInc5",
                "diagInc6",
                "diagInc7",
              ].map((k) => (
                <li key={k} className="flex gap-3">
                  <Check className="mt-0.5 size-4 text-primary" />
                  <span>{t(k as any)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-8">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              {t("diagBox2Title")}
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {["diagExc1", "diagExc2", "diagExc3", "diagExc4"].map((k) => (
                <li key={k} className="flex gap-3">
                  <X className="mt-0.5 size-4 text-muted-foreground" />
                  <span>{t(k as any)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-5">
              <p className="text-sm font-medium text-foreground">
                {t("diagGuaranteeTitle")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("diagGuaranteeDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{t("diagAltTitle")}</span>{" "}
          {t("diagAltDesc")}
        </div>
      </div>
    </section>
  )
}
