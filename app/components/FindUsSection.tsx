"use client";

import { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-white/[0.02] rounded-2xl border border-white/[0.06] flex items-center justify-center">
      <p className="text-white/20 text-sm">Loading map...</p>
    </div>
  ),
});

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
    region: "Western Region",
    address: "27 Collins St, Takoradi",
    lat: 4.89763000697724,
    lng: -1.7627794558196435,
  },
  {
    id: "carlos-plus",
    name: "Carlos Plus Supermarket",
    region: "Western Region",
    address: "Joe D. Laryea St, Takoradi",
    lat: 4.8988365239682965,
    lng: -1.762087964417992,
  },
  {
    id: "ransbet",
    name: "Ransbet Supermarket",
    region: "Western Region",
    address: "Tarkwa",
    lat: 5.306552175519182,
    lng: -1.9943943468992227,
  },
];

const regions = ["All", ...Array.from(new Set(locations.map((l) => l.region)))];

export default function FindUsSection() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeLocation, setActiveLocation] = useState<StoreLocation | null>(null);

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

  const showOverview = () => setActiveLocation(null);

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
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3 pl-11 pr-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-enak-gold/30 transition-colors"
                />
              </div>

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

              <button
                onClick={showOverview}
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-medium tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeLocation === null
                    ? "border-enak-green/30 bg-enak-green/[0.08] text-enak-green-light"
                    : "border-white/[0.06] text-white/40 hover:border-white/[0.12] hover:text-white/60"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Show All on Map
              </button>

              <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1">
                <AnimatePresence mode="popLayout">
                  {filtered.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/30 text-sm text-center py-8"
                    >
                      No locations found.
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
                          activeLocation?.id === loc.id
                            ? "border-enak-gold/30 bg-enak-gold/[0.05]"
                            : "border-white/[0.04] hover:border-white/[0.1] bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              activeLocation?.id === loc.id
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
                            <p className={`text-sm font-semibold truncate ${activeLocation?.id === loc.id ? "text-enak-gold" : "text-white/80"}`}>
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

              <p className="text-white/15 text-[10px] text-center mt-1">
                More locations coming soon
              </p>
            </div>

            {/* Right: Leaflet Map — height matches left content */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] h-full min-h-[450px] lg:min-h-0">
                <MapView
                  locations={filtered}
                  activeLocation={activeLocation}
                  className="h-full min-h-[450px]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
