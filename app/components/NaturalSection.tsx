"use client";

import ScrollReveal from "./ScrollReveal";
import VideoPlayer from "./VideoPlayer";

export default function NaturalSection() {
  return (
    <section id="story" className="relative bg-enak-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-enak-green/[0.04] blur-[100px] animate-drift pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44">
        {/* Video — full width, large */}
        <ScrollReveal>
          <div className="relative max-w-5xl mx-auto mb-20 sm:mb-28">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-enak-green/15 via-transparent to-enak-gold/10 blur-3xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
              <VideoPlayer src="/commercial1.mp4" poster="/p3.jpeg" />
            </div>
          </div>
        </ScrollReveal>

        {/* Natural messaging — asymmetric layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: big statement */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-enak-green-light text-xs tracking-[0.3em] uppercase font-medium">
                Pure & Natural
              </span>
              <h2 className="font-heading mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1]">
                Nothing to Hide.{" "}
                <span className="text-gold-gradient">Everything to Taste.</span>
              </h2>
              <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-lg">
                No artificial colors. No preservatives. No shortcuts. The way
                nature intended.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: ingredients text + tags stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-white/60 text-sm leading-relaxed border-l-2 border-enak-gold/30 pl-4">
                Just three ingredients — plantain, salt, and vegetable oil.
                That&apos;s it. Nothing more, nothing less.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-2.5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
