"use client"

import { useI18n } from "@/lib/i18n"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  const serviceLinks = [
    { label: t("serviceWeb"), href: "#services" },
    { label: t("serviceMobile"), href: "#services" },
    { label: t("serviceAI"), href: "#services" },
    { label: t("serviceBots"), href: "#services" },
  ]

  const companyLinks = [
    { label: t("footerAbout"), href: "#about" },
    { label: t("footerProcess"), href: "#process" },
    { label: t("footerContact"), href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold tracking-tight text-foreground font-mono">
              {"jm"}
              <span className="text-primary">fullstack</span>
            </span>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {t("footerTagline")}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("footerServices")}
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("footerCompany")}
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"2026 jmfullstack. "}{t("footerRights")}
          </p>
          <a
            href="mailto:juan.oddone@fullstack.lat"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            juan.oddone@fullstack.lat
          </a>
        </div>
      </div>
    </footer>
  )
}
