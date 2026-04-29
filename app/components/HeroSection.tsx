"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-enak-dark">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/p1.jpeg"
      >
        <source src="/commercial3.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 z-10" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-enak-dark to-transparent z-10" />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-enak-gold/40 rounded-full text-enak-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
            Crafted in Takoradi, Ghana
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-[1.1] tracking-tight"
        >
          More Than Just Chips.{" "}
          <span className="text-gold-gradient">
            It&apos;s a Story in Every Crunch.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light"
        >
          Carefully made plantain chips from Takoradi, crafted with patience,
          quality, and love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/233558283738?text=Hi!%20I%20would%20like%20to%20order%20Enak%20Plantain%20Chips"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-enak-dark font-bold px-8 py-4 rounded-full text-base sm:text-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
          <button
            onClick={scrollToStory}
            className="border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
          >
            Discover Our Story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button onClick={scrollToStory} aria-label="Scroll down" className="group">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-enak-gold/50 rounded-full flex justify-center pt-2 group-hover:border-enak-gold transition-colors"
            >
              <motion.div className="w-1.5 h-1.5 bg-enak-gold rounded-full" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
