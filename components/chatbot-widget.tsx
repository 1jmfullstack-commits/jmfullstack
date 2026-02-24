"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Calendar, Send } from "lucide-react";

type Step = "start" | "name" | "email" | "goal" | "done";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [text, setText] = useState("");

  const messages = useMemo(() => {
    const base: { from: "bot" | "user"; text: string }[] = [
      { from: "bot", text: "Hola 👋 Soy el asistente de JM Fullstack. ¿Querés agendar una llamada?" },
    ];

    if (step === "name") base.push({ from: "bot", text: "Genial. ¿Cómo te llamás?" });
    if (name) base.push({ from: "user", text: name });

    if (step === "email") base.push({ from: "bot", text: "Perfecto. ¿Cuál es tu email?" });
    if (email) base.push({ from: "user", text: email });

    if (step === "goal") base.push({ from: "bot", text: "Última: en 1 frase, ¿qué querés construir?" });
    if (goal) base.push({ from: "user", text: goal });

    if (step === "done") {
      base.push({ from: "bot", text: "Listo ✅ Abrí el calendario para elegir horario." });
    }

    return base;
  }, [step, name, email, goal]);

  const openCalendly = () => {
    const Calendly = (window as any).Calendly;
    Calendly?.initPopupWidget({
      url: "https://calendly.com/1jmfullstack/30min",
      // si querés prefill (a veces funciona según el plan/flujo):
      prefill: { name, email },
      utm: { utmCampaign: "site-chat" },
    });
  };

  const next = (value: string) => {
    const v = value.trim();
    if (!v) return;

    if (step === "start") {
      setStep("name");
      return;
    }
    if (step === "name") {
      setName(v);
      setText("");
      setStep("email");
      return;
    }
    if (step === "email") {
      setEmail(v);
      setText("");
      setStep("goal");
      return;
    }
    if (step === "goal") {
      setGoal(v);
      setText("");
      setStep("done");
      // abrir calendly al toque (o dejar botón)
      setTimeout(openCalendly, 250);
      return;
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-lg bg-primary text-primary-foreground hover:opacity-90"
        aria-label="Open chat"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-[380px] rounded-2xl border border-border bg-background shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <div className="font-medium">JM Assistant</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="size-4" />
            </Button>
          </div>

          <div className="p-4 space-y-3 max-h-[340px] overflow-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={[
                  "text-sm leading-relaxed rounded-2xl px-3 py-2 w-fit max-w-[85%]",
                  m.from === "bot"
                    ? "bg-secondary text-foreground"
                    : "bg-primary text-primary-foreground ml-auto",
                ].join(" ")}
              >
                {m.text}
              </div>
            ))}

            {step === "done" && (
              <Button onClick={openCalendly} className="w-full">
                <Calendar className="mr-2 size-4" />
                Agendar llamada
              </Button>
            )}
          </div>

          <form
            className="p-3 border-t border-border flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              next(text);
            }}
          >
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={step === "start" ? "Sí, agendar" : "Escribí acá…"}
            />
            <Button type="submit" size="icon">
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
