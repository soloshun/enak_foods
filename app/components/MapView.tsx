"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface MapViewProps {
  locations: MapLocation[];
  activeLocation: MapLocation | null;
  className?: string;
}

const GOLD = "#D4A017";
const FONT = "var(--font-syne), var(--font-geist-sans), system-ui, sans-serif";

function createMarkerIcon(isActive: boolean) {
  const size = isActive ? 32 : 24;
  const dotSize = isActive ? 10 : 7;
  return L.divIcon({
    className: "enak-marker",
    html: `<div style="
      width: ${size}px;
      height: ${size}px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${isActive ? GOLD + "25" : "rgba(255,255,255,0.06)"};
      border: 1.5px solid ${isActive ? GOLD : "rgba(255,255,255,0.2)"};
      border-radius: 50%;
      transition: all 0.3s;
    ">
      <div style="
        width: ${dotSize}px;
        height: ${dotSize}px;
        background: ${isActive ? GOLD : "#fff"};
        border-radius: 50%;
        box-shadow: 0 0 ${isActive ? 10 : 4}px ${isActive ? GOLD + "90" : "rgba(255,255,255,0.3)"};
      "></div>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 6)],
  });
}

export default function MapView({ locations, activeLocation, className = "" }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
    });

    // Original dark CartoDB tiles — clean dark look with road labels
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    locations.forEach((loc) => {
      const isActive = activeLocation?.id === loc.id;
      const marker = L.marker([loc.lat, loc.lng], {
        icon: createMarkerIcon(isActive),
      })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: ${FONT}; padding: 4px 2px;">
            <strong style="color: ${GOLD}; font-size: 13px; font-weight: 700; letter-spacing: 0.01em;">${loc.name}</strong>
            <br/><span style="color: #aaa; font-size: 11px; font-weight: 400;">${loc.address}</span>
          </div>`,
          { className: "enak-popup", closeButton: false, maxWidth: 220 }
        );

      if (isActive) {
        marker.openPopup();
      }

      marker.bindTooltip(loc.name, {
        permanent: !activeLocation,
        direction: "top",
        offset: [0, -18],
        className: "enak-tooltip",
      });

      markersRef.current.push(marker);
    });

    if (activeLocation) {
      map.setView([activeLocation.lat, activeLocation.lng], 16, { animate: true, duration: 0.8 });
    } else if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng] as [number, number]));
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 12, animate: true });
    }
  }, [locations, activeLocation]);

  return (
    <>
      <style jsx global>{`
        .enak-marker {
          background: transparent !important;
          border: none !important;
        }
        .enak-popup .leaflet-popup-content-wrapper {
          font-family: ${FONT};
          background: #1a1a1a;
          border: 1px solid rgba(212, 160, 23, 0.2);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }
        .enak-popup .leaflet-popup-tip {
          background: #1a1a1a;
          border: 1px solid rgba(212, 160, 23, 0.15);
        }
        .enak-popup .leaflet-popup-content {
          margin: 8px 12px;
          color: #fff;
        }
        .enak-tooltip {
          font-family: ${FONT} !important;
          background: #1a1a1aee !important;
          border: 1px solid rgba(212, 160, 23, 0.15) !important;
          border-radius: 8px !important;
          color: ${GOLD} !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          padding: 4px 10px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
          letter-spacing: 0.02em !important;
        }
        .enak-tooltip::before {
          border-top-color: #1a1a1aee !important;
        }
        .leaflet-control-zoom a {
          font-family: ${FONT} !important;
          background: #1a1a1a !important;
          color: ${GOLD} !important;
          border-color: rgba(255,255,255,0.06) !important;
        }
        .leaflet-control-zoom a:hover {
          background: #252525 !important;
        }
      `}</style>
      <div ref={mapRef} className={`w-full ${className}`} />
    </>
  );
}
