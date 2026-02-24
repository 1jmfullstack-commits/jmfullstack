"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t, locale, toggleLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t("navServices"), href: "#services" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navContact"), href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground font-mono">
              {"jm"}
              <span className="text-primary">fullstack</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-xs font-mono font-medium border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">{t("navCta")}</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1 text-xs font-mono font-medium border border-border rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  {t("navCta")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
