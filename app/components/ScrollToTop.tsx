"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

function scrollThresholdPx() {
  if (typeof window === "undefined") return 400;
  return Math.min(480, Math.round(window.innerHeight * 0.45));
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > scrollThresholdPx());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-5 z-40 sm:bottom-10 sm:right-8"
          initial={{ opacity: 0, y: 28, scale: 0.88, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, scale: 0.92, filter: "blur(4px)" }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 28,
            mass: 0.85,
          }}
        >
          <motion.button
            type="button"
            onClick={goTop}
            aria-label="Scroll back to top"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-enak-gold/35 bg-enak-dark/85 py-2.5 pl-4 pr-3 shadow-lg shadow-black/40 backdrop-blur-xl transition-shadow hover:border-enak-gold/55 hover:shadow-enak-gold/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-enak-gold focus-visible:ring-offset-2 focus-visible:ring-offset-enak-dark"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-40 transition-opacity group-hover:opacity-70"
              style={{
                background:
                  "conic-gradient(from 120deg, transparent 0%, rgba(212,160,23,0.15) 25%, transparent 50%, rgba(212,160,23,0.12) 75%, transparent 100%)",
              }}
            />
            <motion.span
              className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,160,23,0.25), transparent 45%, rgba(212,160,23,0.12))",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : { rotate: [0, 360] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 14, repeat: Infinity, ease: "linear" }
              }
            />

            <span className="font-heading relative text-[11px] font-semibold uppercase tracking-[0.2em] text-enak-gold-light/90 group-hover:text-enak-gold-light">
              Top
            </span>

            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-enak-gold/12 ring-1 ring-enak-gold/25 transition-[background-color,box-shadow] group-hover:bg-enak-gold/20 group-hover:shadow-[0_0_24px_rgba(212,160,23,0.35)]">
              <motion.svg
                className="h-5 w-5 text-enak-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -4, 0] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
