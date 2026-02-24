"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Mail, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">
          Ready to Build?
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12 w-full sm:w-auto"
          >
            <a
              href="https://calendly.com/1jmfullstack/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 size-4" />
              Book a Call
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
              Send Email
            </a>
          </Button>

        </div>
      </div>
    </section>
  )
}
