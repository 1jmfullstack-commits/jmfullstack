"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.22_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.22_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary font-mono uppercase tracking-wider">
              {t("heroTag")}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
            <span className="text-foreground">{t("heroTitle")}</span>
            <br />
            <span className="text-primary">{t("heroTitleAccent")}</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            {t("heroDescription")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
            >
              <a href="#contact">
                {t("heroCta1")}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground text-base px-8 h-12"
            >
              <a href="mailto:juan.oddone@fullstack.lat">
                <Mail className="mr-2 size-4" />
                {t("heroCta2")}
              </a>
            </Button>
          </div>

          {/* Tech tags */}
          <div className="mt-16 flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "Python", "React Native", "PostgreSQL", "AI/ML", "AWS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border rounded-md bg-secondary/50"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
      </div>
    </section>
  )
}
