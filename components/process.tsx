"use client"

import { useI18n } from "@/lib/i18n"

const processSteps = [
  { num: "01", key: "processStep1", descKey: "processStep1Desc" },
  { num: "02", key: "processStep2", descKey: "processStep2Desc" },
  { num: "03", key: "processStep3", descKey: "processStep3Desc" },
  { num: "04", key: "processStep4", descKey: "processStep4Desc" },
] as const

export function Process() {
  const { t } = useI18n()

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
            {t("processTag")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("processTitle")}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, i) => (
            <div
              key={step.num}
              className="group relative flex gap-6"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center size-14 rounded-xl border border-border bg-background text-primary font-mono text-lg font-bold group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  {step.num}
                </div>
                {/* Connector line */}
                {i < processSteps.length - 1 && i % 2 === 0 && (
                  <div className="hidden md:block absolute top-14 left-7 w-px h-[calc(100%+2rem)] bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(step.key)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
