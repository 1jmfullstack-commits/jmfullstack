"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import CTA from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </I18nProvider>
    <ChatbotWidget />
  )
}
