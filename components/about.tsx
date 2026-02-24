"use client"

import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  const stats = [
    { value: "30+", label: t("aboutStat1") },
    { value: "20+", label: t("aboutStat2") },
    { value: "15+", label: t("aboutStat3") },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
              {t("aboutTag")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {t("aboutTitle")}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              {t("aboutDescription")}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary/50 border border-border overflow-hidden flex items-center justify-center">
              {/* Code-like visual */}
              <div className="w-full h-full p-8 font-mono text-sm">
                <div className="flex gap-2 mb-6">
                  <div className="size-3 rounded-full bg-primary/30" />
                  <div className="size-3 rounded-full bg-muted-foreground/20" />
                  <div className="size-3 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-primary">{"const"}</span>{" "}
                    <span className="text-foreground">{"developers"}</span>
                    {" = {"}
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">{"qantity:"}</span>{" "}
                    <span className="text-primary">{'"lots"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">{"brand:"}</span>{" "}
                    <span className="text-primary">{'"jmfullstack"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">{"stack:"}</span>{" ["}
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"React"'}</span>,{" "}
                    <span className="text-primary">{'"Next.js"'}</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"Node.js"'}</span>,{" "}
                    <span className="text-primary">{'"Python"'}</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"React Native"'}</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-primary">{'"PostgreSQL"'}</span>,{" "}
                    <span className="text-primary">{'"AWS"'}</span>,
                  </p>
                  <p className="pl-4">{"],"}</p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">{"focus:"}</span>{" "}
                    <span className="text-primary">{'"MVPs that ship"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">{"email:"}</span>{" "}
                    <span className="text-primary">{'"juan.oddone@fullstack.lat"'}</span>,
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>

            {/* Decorative border accent */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
