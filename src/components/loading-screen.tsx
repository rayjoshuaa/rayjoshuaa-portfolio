"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { DATA } from "@/data/resume";

const SEEN_KEY = "rj-loader-seen";
const MIN_SHOW_MS = 2000;
const MAX_SHOW_MS = 3800;

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23595959' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

/**
 * Branded intro: avatar, name and roles animate in over a dotted
 * backdrop (the same texture the site uses), a progress bar + counter
 * run for a choreographed ~2s, then the whole screen lifts away like
 * a curtain to reveal the homepage underneath. Once per session;
 * skipped for reduced-motion users.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const progress = useMotionValue(0);
  const barScale = useTransform(progress, (v) => v / 100);
  const [pct, setPct] = useState(0);

  // Counter + bar
  useEffect(() => {
    if (!visible) return;
    const controls = animate(progress, 100, {
      duration: 1.7,
      delay: 0.35,
      ease: [0.65, 0, 0.35, 1],
    });
    const unsub = progress.on("change", (v) => setPct(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [visible, progress]);

  // Show / hide timing
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setVisible(false);
      return;
    }
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode — loader just shows again next visit */
    }

    document.body.style.overflow = "hidden";
    const start = Date.now();
    let hidden = false;
    const hide = () => {
      if (hidden) return;
      hidden = true;
      setVisible(false);
      document.body.style.overflow = "";
    };
    const tryHide = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= MIN_SHOW_MS) hide();
      else setTimeout(hide, MIN_SHOW_MS - elapsed);
    };

    if (document.readyState === "complete") {
      var minTimer = setTimeout(tryHide, MIN_SHOW_MS);
    } else {
      window.addEventListener("load", tryHide, { once: true });
      var minTimer = setTimeout(tryHide, MIN_SHOW_MS);
    }
    const capTimer = setTimeout(hide, MAX_SHOW_MS);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(capTimer);
      window.removeEventListener("load", tryHide);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[9999] overflow-hidden bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* dotted texture — same as the pages underneath */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: DOT_PATTERN, backgroundSize: "30px 30px" }}
          />
          <motion.div
            className="relative flex h-full flex-col items-center justify-center gap-5 px-6"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/15 [animation-duration:1.6s]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={DATA.avatarUrl}
                alt=""
                className="relative size-24 rounded-full object-cover object-[50%_30%] shadow-xl ring-2 ring-border"
              />
            </motion.div>

            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-bold tracking-tight"
              >
                Ray Joshua Balingkit
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
              >
                ICT Teacher · Web Developer · SMM
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex w-52 items-center gap-3"
            >
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full w-full origin-left rounded-full bg-foreground"
                  style={{ scaleX: barScale }}
                />
              </div>
              <span className="w-9 text-right text-xs font-medium tabular-nums text-muted-foreground">
                {pct}%
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
