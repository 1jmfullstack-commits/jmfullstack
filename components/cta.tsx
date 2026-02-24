"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar } from "lucide-react"

export function CTA() {
  const { t } = useI18n()

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border bg-secondary/30 overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {t("ctaTitle")}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("ctaDescription")}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 w-full sm:w-auto"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 size-4" />
                  {t("ctaCta1")}
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary hover:text-foreground text-base px-8 h-12 w-full sm:w-auto"
              >
                <a href="mailto:juan.oddone@fullstack.lat">
                  <Mail className="mr-2 size-4" />
                  {t("ctaCta2")}
                </a>
              </Button>
            </div>

            {/* Email direct link */}
            <p className="mt-6 text-sm text-muted-foreground">
              {t("ctaOr")}{" "}
              <a
                href="mailto:juan.oddone@fullstack.lat"
                className="text-primary hover:underline font-mono"
              >
                juan.oddone@fullstack.lat
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
