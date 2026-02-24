"use client"

import { useI18n } from "@/lib/i18n"
import { Globe, Smartphone, Brain, Bot, Layers, Plug } from "lucide-react"

const serviceIcons = [Globe, Smartphone, Brain, Bot, Layers, Plug]

const serviceKeys = [
  { name: "serviceWeb", desc: "serviceWebDesc" },
  { name: "serviceMobile", desc: "serviceMobileDesc" },
  { name: "serviceAI", desc: "serviceAIDesc" },
  { name: "serviceBots", desc: "serviceBotsDesc" },
  { name: "serviceSaas", desc: "serviceSaasDesc" },
  { name: "serviceAPI", desc: "serviceAPIDesc" },
] as const

export function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
            {t("servicesTag")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("servicesTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            {t("servicesDescription")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {serviceKeys.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <div
                key={service.name}
                className="group bg-background p-8 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(service.name)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(service.desc)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
