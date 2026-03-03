import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"
import { Diagnostico } from "@/components/diagnostico"
import { I18nProvider } from "@/lib/i18n"

export default function DiagnosticoPage() {
  return (
    <>
      <I18nProvider>
        <Header />
        <main>
          <Diagnostico />
        </main>
        <Footer />
      </I18nProvider>

      <ChatbotWidget />
    </>
  )
}
