"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "Ripe Plantain Chips",
    description:
      "Sweet, golden, and irresistibly crunchy. Made from carefully selected ripe plantains for a naturally sweeter bite.",
    image: "/p3_1.jpeg",
    badge: "Ripe",
    badgeColor: "bg-enak-red",
  },
  {
    name: "Unripe Plantain Chips",
    description:
      "Classic and crispy. Our unripe plantain chips deliver a satisfying crunch with a subtly savoury taste.",
    image: "/p2.jpeg",
    badge: "Unripe",
    badgeColor: "bg-enak-green",
  },
];

const sizes = [
  { label: "Pouch", desc: "Perfect for on-the-go snacking", image: "/p1.jpeg" },
  { label: "Jar", desc: "Keep the crunch fresh at home", image: "/p3.jpeg" },
  { label: "Bulk Bag", desc: "For the ultimate chips lover", image: "/p4.jpeg" },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] rounded-3xl overflow-hidden hover:border-enak-gold/30 transition-all duration-500"
    >
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-enak-dark via-transparent to-transparent" />
        <span
          className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase`}
        >
          {product.badge}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
        <p className="text-white/60 leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="relative bg-enak-dark py-24 sm:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-enak-gold text-sm tracking-[0.3em] uppercase font-medium">
              What We Make
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              The <span className="text-gold-gradient">Product</span>
            </h2>
            <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
              Freshly made plantain chips, sliced and fried to perfection.
              Crispy, golden, and satisfying in every bite.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Available in <span className="text-enak-gold">Every Size</span>
            </h3>
            <p className="mt-3 text-white/50 text-base">
              From a quick snack to stocking your pantry — we&apos;ve got you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {sizes.map((size, i) => (
            <ScrollReveal key={size.label} delay={i * 0.15} direction="up">
              <div className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-enak-gold/30 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={size.image}
                    alt={size.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-enak-dark via-enak-dark/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-lg font-bold text-white">{size.label}</h4>
                  <p className="text-white/50 text-sm mt-1">{size.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm tracking-wide">
              FDA/Rt 24-167 • Made with quality ingredients and a process
              refined over time
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
