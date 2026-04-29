"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function OrderSection() {
  return (
    <section id="order" className="relative bg-enak-dark pb-24 sm:pb-32 overflow-hidden">
      <div className="section-divider mb-24" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-enak-red/[0.05] via-transparent to-enak-gold/[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-enak-gold text-sm tracking-[0.3em] uppercase font-medium">
                Get Yours Today
              </span>
              <h2 className="font-heading mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to{" "}
                <span className="text-gold-gradient">Crunch?</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
                Available in select locations across Takoradi and for direct
                orders. Get your Enak Crunchy Plantain Chips delivered right
                to you.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/233558283738?text=Hi!%20I%20would%20like%20to%20order%20Enak%20Plantain%20Chips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-enak-dark font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order via WhatsApp
                </a>

                <a
                  href="tel:+233247861005"
                  className="border-2 border-enak-gold/40 text-enak-gold font-bold px-8 py-4 rounded-full text-lg hover:bg-enak-gold/10 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Us
                </a>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-enak-gold/20 via-enak-red/10 to-enak-green/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-enak-gold/20">
                <Image
                  src="/flyer1.jpeg"
                  alt="Enak Foods Product Range"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-enak-dark border border-enak-gold/30 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-enak-gold font-bold text-sm">Smart Choice.</p>
                <p className="text-white/60 text-xs">Great Taste!</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
