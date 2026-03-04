"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Step = "start" | "name" | "email" | "goal" | "done";

export default function ChatbotWidget() {
  const { locale } = useI18n();

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [text, setText] = useState("");

  const isES = locale === "es";

  const copy = {
    start: isES
      ? "Hola 👋 Soy el asistente de JM Fullstack. ¿Querés un diagnóstico técnico de tu producto?"
      : "Hi 👋 I'm the JM Fullstack assistant. Want a technical diagnosis of your product?",

    askName: isES
      ? "Genial. ¿Cómo te llamás?"
      : "Great. What's your name?",

    askEmail: isES
      ? "Perfecto. ¿Cuál es tu email?"
      : "Perfect. What's your email?",

    askGoal: isES
      ? "Última: en 1 frase, ¿qué querés construir o mejorar?"
      : "Last question: in one sentence, what do you want to build or improve?",

    done: isES
      ? "Listo ✅ Revisá la página de diagnóstico para continuar."
      : "All set ✅ Check the diagnosis page to continue.",

    placeholderStart: isES
      ? "Sí, quiero diagnóstico"
      : "Yes, I want a diagnosis",

    placeholder: isES
      ? "Escribí acá..."
      : "Type here...",
  };

  const messages = useMemo(() => {
    const base: { from: "bot" | "user"; text: string }[] = [
      { from: "bot", text: copy.start },
    ];

    if (step === "name") base.push({ from: "bot", text: copy.askName });
    if (name) base.push({ from: "user", text: name });

    if (step === "email") base.push({ from: "bot", text: copy.askEmail });
    if (email) base.push({ from: "user", text: email });

    if (step === "goal") base.push({ from: "bot", text: copy.askGoal });
    if (goal) base.push({ from: "user", text: goal });

    if (step === "done") base.push({ from: "bot", text: copy.done });

    return base;
  }, [step, name, email, goal, locale]);

  const sendEmail = () => {
    const subject = encodeURIComponent("Nuevo lead desde chat");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nGoal: ${goal}`
    );

    window.location.href = `mailto:juan.oddone@jmfullstack.lat?subject=${subject}&body=${body}`;
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

      setTimeout(() => {
        sendEmail();
      }, 300);

      return;
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-lg bg-primary text-primary-foreground hover:opacity-90"
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
              <Button
                onClick={() => (window.location.href = "/diagnostico")}
                className="w-full"
              >
                {isES ? "Ir al diagnóstico" : "Go to diagnosis"}
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
              placeholder={
                step === "start" ? copy.placeholderStart : copy.placeholder
              }
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
