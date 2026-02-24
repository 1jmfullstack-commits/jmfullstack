import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import About from "@/components/about"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"
import { I18nProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <>
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
    </>
  )
}
