"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Sparkles } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">¿En qué etapa está tu producto?</h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Elegí el camino rápido: evaluación gratis (48h) o diagnóstico express (24h) con roadmap y estimación.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 w-full sm:w-auto"
          >
            <Link href="/diagnostico">
              <Sparkles className="mr-2 size-4" />
              Diagnóstico Express
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary hover:text-foreground text-base px-8 h-12 w-full sm:w-auto"
          >
            <a href="mailto:projects@jmfullstack.com?subject=Evaluación%20Gratis%20-%20Proyecto">
              <Mail className="mr-2 size-4" />
              Evaluación Gratis (Email)
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
