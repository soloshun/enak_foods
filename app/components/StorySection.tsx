"use client";

import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const storyParts = [
    {
      title: "A Dream from a Small Kitchen",
      text: "Enak Foods started as a simple idea — born not from a business plan, but from a passion for quality. In a modest kitchen in Takoradi, something extraordinary began to take shape.",
      accent: "var(--enak-red)",
    },
    {
      title: "Years of Patience & Perfection",
      text: "Five years of consistency, care, and relentless attention to detail. Every batch fried to perfection. Every chip tested for that signature crunch. No shortcuts. No compromises.",
      accent: "var(--enak-green)",
    },
    {
      title: "From Hands That Care",
      text: "What began as a family recipe has grown into a product loved across Takoradi and beyond. But the hands that started it all? They still prepare every batch with the same love.",
      accent: "var(--enak-gold)",
    },
    {
      title: "This Is More Than a Snack",
      text: "It's a journey of patience, growth, and belief. When you open a pack of Enak, you're not just eating chips — you're tasting years of dedication, a story of resilience, and the pride of a community.",
      accent: "var(--enak-gold)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative bg-enak-dark py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--enak-gold) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-enak-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Where It All{" "}
              <span className="text-gold-gradient">Began</span>
            </h2>
            <div className="mt-6 w-20 h-0.5 bg-enak-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-enak-gold/10 sm:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-enak-gold to-enak-gold-light"
              style={{ height: lineHeight }}
            />
          </div>

          {storyParts.map((part, i) => (
            <div
              key={i}
              className={`relative flex flex-col sm:flex-row items-start mb-16 last:mb-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full border-2 border-enak-gold bg-enak-dark -translate-x-1/2 mt-2 z-10" />

              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1}
                className={`pl-12 sm:pl-0 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16 sm:text-left"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-enak-gold/30 transition-colors duration-500">
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ background: part.accent, marginLeft: i % 2 === 0 ? "auto" : undefined }}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {part.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-base">
                    {part.text}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
