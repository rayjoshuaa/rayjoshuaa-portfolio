"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";

// Sends straight to Ray's Gmail via FormSubmit (no backend needed).
// Note: FormSubmit emails a one-time "Activate" link on the first
// submission — Ray clicks it once and every message after that
// lands in his inbox.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/rayjoshua432@gmail.com";
const FALLBACK_EMAIL = "rayjoshua432@gmail.com";

const inputClass =
  "w-full rounded-xl border border-border/70 bg-background/80 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bot trap
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          _subject: `Portfolio inquiry — ${data.get("service")}`,
          _template: "table",
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/60 px-6 py-8 text-center">
        <CheckCircle2 className="size-8 text-green-600" />
        <p className="font-medium">Message sent — thank you!</p>
        <p className="text-sm text-muted-foreground">
          Ray will reply to your email shortly. Need him faster? Email{" "}
          {FALLBACK_EMAIL} directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-3 text-left">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
          autoComplete="name"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className={inputClass}
          autoComplete="email"
        />
      </div>
      <div className="relative">
        <select
          name="service"
          className={`${inputClass} appearance-none pr-10`}
          defaultValue="CMS Website"
        >
          <option>CMS Website</option>
          <option>Social Media Management</option>
          <option>Custom Web Development</option>
          <option>Something else</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell me about your project — what you need, and your timeline if you have one."
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending that. Please email me directly at{" "}
          {FALLBACK_EMAIL} — sorry for the extra step!
        </p>
      )}
    </form>
  );
}
