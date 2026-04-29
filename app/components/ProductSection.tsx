"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    id: "pouch",
    name: "Pouch Pack",
    subtitle: "Ripe & Unripe",
    image: "/p1-removebg.png",
    color: "#D4A017",
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
    color: "#2E7D32",
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
    color: "#B22222",
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
    color: "#D4A017",
    description: "For parties, events, or the dedicated snacker. Maximum crunch, maximum joy.",
    ingredients: "Plantain, Salt, Vegetable Oil",
    nutrition: { calories: "150 kcal", fat: "7g", carbs: "22g", fiber: "2g" },
    sizes: "500g",
  },
];

type Product = (typeof products)[0];

function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: Product;
  index: number;
  onSelect: (p: Product) => void;
}) {
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
      <motion.div
        whileHover={{ scale: 1.08, y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative cursor-pointer mb-6"
        onClick={() => onSelect(product)}
      >
        {/* Colored glow behind product */}
        <div
          className="absolute inset-[-20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
          style={{ background: `radial-gradient(circle, ${product.color}30 0%, transparent 70%)` }}
        />
        <div className="relative w-44 h-56 sm:w-52 sm:h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 180px, 220px"
            loading="lazy"
          />
        </div>
      </motion.div>

      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white text-center tracking-tight">
        {product.name}
      </h3>
      <p className="text-enak-gold text-xs tracking-[0.2em] uppercase font-medium mt-1">
        {product.subtitle}
      </p>

      <button
        onClick={() => onSelect(product)}
        className="mt-4 px-6 py-2 rounded-full border border-white/10 text-white/60 text-xs uppercase tracking-wider hover:border-enak-gold/40 hover:text-enak-gold transition-all duration-300"
      >
        Find Out More
      </button>
    </motion.div>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#111] rounded-3xl overflow-hidden border border-white/[0.08]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid sm:grid-cols-2">
          {/* Left: Product image */}
          <div className="relative flex items-center justify-center p-8 sm:p-10">
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: `radial-gradient(circle at center, ${product.color}40 0%, transparent 70%)` }}
            />
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-60 sm:w-56 sm:h-72"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="250px"
              />
            </motion.div>
          </div>

          {/* Right: Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] uppercase font-medium mb-1" style={{ color: product.color }}>
              {product.subtitle}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {product.name}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-enak-gold text-[10px] uppercase tracking-widest font-semibold mb-1.5">
                  Ingredients
                </p>
                <p className="text-white/60 text-sm">{product.ingredients}</p>
              </div>

              {/* <div>
                <p className="text-enak-gold text-[10px] uppercase tracking-widest font-semibold mb-2">
                  Nutrition per serving
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {Object.entries(product.nutrition).map(([key, val]) => (
                    <div key={key} className="text-center bg-white/[0.03] rounded-lg py-2 px-1">
                      <p className="text-white text-sm font-bold">{val}</p>
                      <p className="text-white/30 text-[9px] uppercase mt-0.5">{key}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <span className="text-white/30 text-xs uppercase tracking-wider">Size</span>
                <span className="text-white/70 text-sm font-semibold">{product.sizes}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="relative bg-enak-dark overflow-hidden">
      {/* Background decorative elements — more visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[8%] w-3 h-3 rounded-full bg-enak-gold/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[30%] right-[12%] w-4 h-4 rounded-full bg-enak-red/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[20%] w-2.5 h-2.5 rounded-full bg-enak-green/25 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[40%] right-[25%] w-2 h-2 rounded-full bg-enak-gold-light/25 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-enak-gold/20 animate-float" style={{ animationDelay: "1.5s" }} />

        {/* SVG ring decoration — more visible */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.4" className="text-enak-gold" strokeDasharray="4 6" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.3" className="text-enak-gold" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.2" className="text-enak-gold" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase">
              Our <span className="text-gold-gradient">Products</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-enak-gold/40 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>

        {/* FDA Badge — prominent */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-enak-gold/20 bg-enak-gold/[0.05]">
              <svg className="w-5 h-5 text-enak-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="text-enak-gold text-sm font-semibold tracking-wide">
                FDA Approved — FDA/Rt 24-167
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.08]">
              <span className="text-white/50 text-xs font-medium tracking-wide">
                🇬🇭 Proudly Made in Ghana
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Product detail modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
