"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function NaturalSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="story" className="relative bg-enak-dark overflow-hidden">
      {/* Subtle animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-enak-green/[0.04] blur-[100px] animate-drift pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Video */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-enak-green/20 via-transparent to-enak-gold/10 blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/p3.jpeg"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/commercial1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Natural messaging */}
          <div className="flex flex-col gap-10">
            <ScrollReveal direction="right" delay={0.1}>
              <span className="text-enak-green-light text-xs tracking-[0.3em] uppercase font-medium">
                Pure & Natural
              </span>
              <h2 className="font-heading mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
                Nothing to Hide.{" "}
                <span className="text-gold-gradient">Everything to Taste.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-md">
                Just plantain, salt, and vegetable oil. No artificial colors. No
                preservatives. No shortcuts. The way nature intended.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {["100% Plantain", "No Preservatives", "No Artificial Colors", "FDA Approved"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-enak-green/20 text-enak-green-light text-xs font-medium tracking-wide bg-enak-green/[0.05]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </ScrollReveal>

            {/* Animated ingredient circles */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex items-center gap-8 mt-2">
                {[
                  { icon: "🍌", label: "Plantain" },
                  { icon: "🧂", label: "Salt" },
                  { icon: "🫒", label: "Vegetable Oil" },
                ].map((ingredient, i) => (
                  <motion.div
                    key={ingredient.label}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15, type: "spring" }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-2xl sm:text-3xl">
                      {ingredient.icon}
                    </div>
                    <p className="text-white/40 text-[10px] sm:text-xs mt-2 font-medium">
                      {ingredient.label}
                    </p>
                  </motion.div>
                ))}
                <div className="text-white/20 text-sm font-light italic">
                  That&apos;s it.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
