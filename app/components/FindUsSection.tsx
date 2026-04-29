"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface StoreLocation {
  id: string;
  name: string;
  region: string;
  address: string;
  lat: number;
  lng: number;
}

const locations: StoreLocation[] = [
  {
    id: "my-brother",
    name: "My Brother Supermarket",
    region: "Takoradi",
    address: "Market Circle Area, Takoradi",
    lat: 4.8918,
    lng: -1.7550,
  },
  {
    id: "carlos",
    name: "Carlos Supermarket",
    region: "Takoradi",
    address: "Chapel Hill, Takoradi",
    lat: 4.9010,
    lng: -1.7630,
  },
];

const regions = ["All", ...Array.from(new Set(locations.map((l) => l.region)))];

export default function FindUsSection() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeLocation, setActiveLocation] = useState<StoreLocation>(locations[0]);

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      const matchesSearch =
        search === "" ||
        loc.name.toLowerCase().includes(search.toLowerCase()) ||
        loc.address.toLowerCase().includes(search.toLowerCase());
      const matchesRegion =
        selectedRegion === "All" || loc.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [search, selectedRegion]);

  const handleLocationClick = useCallback((loc: StoreLocation) => {
    setActiveLocation(loc);
  }, []);

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${activeLocation.lng - 0.01}%2C${activeLocation.lat - 0.008}%2C${activeLocation.lng + 0.01}%2C${activeLocation.lat + 0.008}&layer=mapnik&marker=${activeLocation.lat}%2C${activeLocation.lng}`;

  return (
    <section id="find-us" className="relative bg-enak-dark overflow-hidden">
      <div className="section-divider" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-enak-green/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-44">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-enak-green-light text-xs tracking-[0.3em] uppercase font-medium">
              Locations
            </span>
            <h2 className="font-heading mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Find Us{" "}
              <span className="text-gold-gradient">Near You</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-enak-gold/40 mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {/* Left: Search & Location List */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Search input */}
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-enak-gold/30 transition-colors"
                />
              </div>

              {/* Region filter tabs */}
              <div className="flex gap-2 flex-wrap">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedRegion === region
                        ? "bg-enak-gold/20 text-enak-gold border border-enak-gold/30"
                        : "border border-white/[0.06] text-white/40 hover:text-white/60 hover:border-white/[0.12]"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Location list */}
              <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {filtered.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/30 text-sm text-center py-8"
                    >
                      No locations found. Try a different search.
                    </motion.p>
                  ) : (
                    filtered.map((loc) => (
                      <motion.button
                        key={loc.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onClick={() => handleLocationClick(loc)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                          activeLocation.id === loc.id
                            ? "border-enak-gold/30 bg-enak-gold/[0.05]"
                            : "border-white/[0.04] hover:border-white/[0.1] bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              activeLocation.id === loc.id
                                ? "bg-enak-gold/20 text-enak-gold"
                                : "bg-white/[0.04] text-white/30"
                            }`}
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <p className={`text-sm font-semibold truncate ${activeLocation.id === loc.id ? "text-enak-gold" : "text-white/80"}`}>
                              {loc.name}
                            </p>
                            <p className="text-white/35 text-xs mt-0.5 truncate">
                              {loc.address}
                            </p>
                            <span className="inline-block mt-1.5 text-[10px] text-white/25 uppercase tracking-wider border border-white/[0.06] rounded-full px-2 py-0.5">
                              {loc.region}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))
                  )}
                </AnimatePresence>
              </div>

              <p className="text-white/15 text-[10px] text-center mt-2">
                More locations coming soon
              </p>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
                <div className="absolute top-4 left-4 z-10 bg-enak-dark/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/[0.06]">
                  <p className="text-enak-gold text-xs font-semibold font-heading">{activeLocation.name}</p>
                  <p className="text-white/40 text-[10px]">{activeLocation.address}</p>
                </div>
                <iframe
                  key={activeLocation.id}
                  title={`Map - ${activeLocation.name}`}
                  width="100%"
                  height="420"
                  src={mapUrl}
                  className="border-0 w-full"
                  style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(1.1) contrast(1.1) saturate(0.3)" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
