"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "What flavors of plantain chips do you offer?",
    answer:
      "We currently offer two delicious flavors: Ripe Plantain Chips (sweet and golden) and Unripe Plantain Chips (classic and savoury). Both are fried to crispy perfection.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can order directly via WhatsApp at 055 828 3738 or call us at 024 786 1005. We'll get your order sorted and delivered to you.",
  },
  {
    question: "Where can I find Enak Chips in stores?",
    answer:
      "Our chips are currently available at My Brother Supermarket and Carlos Supermarket in Takoradi. We're expanding to more locations — follow us on social media for updates!",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer multiple sizes to suit your needs: convenient pouches for on-the-go snacking, jars to keep them fresh at home, and bulk bags for the true chips lover.",
  },
  {
    question: "Are your chips FDA approved?",
    answer:
      "Yes! Our products are FDA approved with registration number FDA/Rt 24-167. Quality and safety are at the core of everything we do.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08} direction="up">
      <div
        className={`border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 ${
          open ? "border-enak-gold/20 bg-white/[0.02]" : "hover:border-white/[0.1]"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
        >
          <span className="text-white font-medium text-base sm:text-lg pr-4">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-enak-gold shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <p className="text-white/55 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section className="relative bg-enak-dark py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-enak-gold text-sm tracking-[0.3em] uppercase font-medium">
              Questions?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Frequently <span className="text-gold-gradient">Asked</span>
            </h2>
            <div className="mt-6 w-20 h-0.5 bg-enak-gold mx-auto" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
