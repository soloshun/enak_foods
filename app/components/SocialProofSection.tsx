"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "The crunch is unmatched! I tried Enak once and now it's the only plantain chips I buy. My family loves it.",
    name: "Ama K.",
    location: "Takoradi",
  },
  {
    quote:
      "I always keep a jar at home. The quality is always the same — fresh, crispy, and delicious every time.",
    name: "Kwame M.",
    location: "Takoradi",
  },
  {
    quote:
      "Perfect snack for any occasion. I even take them to the office — everyone always asks where I got them!",
    name: "Efua A.",
    location: "Sekondi",
  },
];

const stats = [
  { value: "5+", label: "Years of Craft" },
  { value: "1000s", label: "Happy Customers" },
  { value: "2", label: "Delicious Flavors" },
  { value: "100%", label: "Made in Ghana" },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-3xl sm:text-4xl font-bold text-gold-gradient">{stat.value}</p>
      <p className="text-white/50 text-sm mt-1">{stat.label}</p>
    </motion.div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="relative bg-enak-dark py-24 sm:py-32 overflow-hidden">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-enak-gold text-sm tracking-[0.3em] uppercase font-medium">
              Word of Mouth
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What People Are{" "}
              <span className="text-gold-gradient">Saying</span>
            </h2>
            <div className="mt-6 w-20 h-0.5 bg-enak-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15} direction="up">
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-enak-gold/30 transition-all duration-500 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-enak-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed text-base flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
