"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const KEY = "ray-portfolio-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable — just dismiss */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-24 left-4 z-40 w-[calc(100vw-2rem)] max-w-xs rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur sm:bottom-6 sm:left-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-primary/10 p-2">
              <Cookie className="size-5 text-primary" />
            </span>
            <div>
              <p className="text-sm font-semibold">We value your privacy</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                This portfolio uses cookies to remember your theme and chat choices, and to
                understand visits. No ads, nothing sold — ever.
              </p>
            </div>
          </div>
          <div className="mt-3.5 flex gap-2">
            <button
              onClick={() => choose("accepted")}
              className="h-9 flex-1 rounded-full bg-foreground text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Accept
            </button>
            <button
              onClick={() => choose("declined")}
              className="h-9 flex-1 rounded-full border border-border bg-card/50 text-sm font-medium transition-colors hover:bg-accent"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
