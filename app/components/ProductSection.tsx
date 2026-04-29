"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    id: "pouch",
    name: "Pouch Pack",
    subtitle: "Ripe & Unripe",
    image: "/p1-removebg.png",
    glowClass: "product-glow-gold",
    accentColor: "enak-gold",
    description: "Perfect for on-the-go snacking. Grab one, tear it open, enjoy the crunch.",
    ingredients: "Plantain, Salt, Vegetable Oil",
    nutrition: { calories: "150 kcal", fat: "7g", carbs: "22g", fiber: "2g" },
    sizes: "150g",
  },
  {
    id: "jar-unripe",
    name: "Jar",
    subtitle: "Unripe",
    image: "/p2-removebg.png",
    glowClass: "product-glow-green",
    accentColor: "enak-green-light",
    description: "The classic savoury crunch in a resealable jar. Stays fresh, stays crispy.",
    ingredients: "Unripe Plantain, Salt, Vegetable Oil",
    nutrition: { calories: "145 kcal", fat: "7g", carbs: "21g", fiber: "2.5g" },
    sizes: "300g",
  },
  {
    id: "jar-duo",
    name: "Jar Duo",
    subtitle: "Ripe & Unripe",
    image: "/p3-removebg.png",
    glowClass: "product-glow-red",
    accentColor: "enak-red-light",
    description: "Can't choose? Get both. Two jars of golden goodness for the whole family.",
    ingredients: "Plantain, Salt, Vegetable Oil",
    nutrition: { calories: "148 kcal", fat: "7g", carbs: "21g", fiber: "2g" },
    sizes: "300g each",
  },
  {
    id: "bulk",
    name: "Bulk Bag",
    subtitle: "Ripe & Unripe",
    image: "/p4-removebg.png",
    glowClass: "product-glow-gold",
    accentColor: "enak-gold",
    description: "For parties, events, or the dedicated snacker. Maximum crunch, maximum joy.",
    ingredients: "Plantain, Salt, Vegetable Oil",
    nutrition: { calories: "150 kcal", fat: "7g", carbs: "22g", fiber: "2g" },
    sizes: "500g",
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group flex flex-col items-center"
    >
      {/* Product image with hover effect */}
      <motion.div
        whileHover={{ scale: 1.06, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative cursor-pointer mb-6"
        onClick={() => setExpanded(!expanded)}
      >
        <div className={`absolute inset-0 rounded-full ${product.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
        <div className="relative w-44 h-56 sm:w-52 sm:h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 180px, 220px"
          />
        </div>
      </motion.div>

      {/* Product info */}
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white text-center tracking-tight">
        {product.name}
      </h3>
      <p className={`text-${product.accentColor} text-xs tracking-[0.2em] uppercase font-medium mt-1`}>
        {product.subtitle}
      </p>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-6 py-2 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-wider hover:border-enak-gold/40 hover:text-enak-gold transition-all duration-300"
      >
        {expanded ? "Close" : "Find Out More"}
      </button>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className="mt-6 glass-card rounded-2xl p-5 sm:p-6 max-w-xs mx-auto">
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-enak-gold text-[10px] uppercase tracking-widest font-medium mb-1">
                    Ingredients
                  </p>
                  <p className="text-white/60 text-xs">{product.ingredients}</p>
                </div>

                <div>
                  <p className="text-enak-gold text-[10px] uppercase tracking-widest font-medium mb-1">
                    Nutrition (per serving)
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(product.nutrition).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <p className="text-white text-sm font-semibold">{val}</p>
                        <p className="text-white/30 text-[9px] uppercase">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                  <span className="text-white/30 text-[10px] uppercase tracking-wider">Size</span>
                  <span className="text-white/60 text-xs font-medium">{product.sizes}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="relative bg-enak-dark overflow-hidden">
      {/* Background SVG animated circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-enak-gold/20 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-enak-red/15 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-enak-green/20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-48 right-1/3 w-1.5 h-1.5 rounded-full bg-enak-gold/15 animate-float" style={{ animationDelay: "0.5s" }} />
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.015]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-enak-gold" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.3" className="text-enak-gold" />
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.2" className="text-enak-gold" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase">
              Our Products
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-enak-gold/40 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-white/20 text-xs tracking-widest uppercase mt-20">
            FDA/Rt 24-167 · Made in Ghana
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
