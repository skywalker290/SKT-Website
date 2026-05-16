"use client";

import { cn } from "@/utils/cn"; // Using our helper from Phase 1
import SearchWidget from "./SearchWidget";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Hero() {
  const pathname = usePathname();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Force a CSS reflow to ensure animations replay from scratch on back-navigation (bfcache fix)
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-hero-text-h1, .animate-hero-text-p, .animate-hero-widget');
      elements.forEach((el) => {
        (el as HTMLElement).style.animation = 'none';
        void (el as HTMLElement).offsetHeight; // trigger reflow
        (el as HTMLElement).style.animation = '';
      });
    }
  }, [pathname]);

  return (
    <section ref={heroRef} key={pathname} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          src="/videos/hero-loop.mp4" 
        />
        {/* Dark gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center mt-16">
        
        {/* Animated Typography */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 animate-hero-text-h1">
            Experience India's Heritage in <span className="text-brand-gold">Absolute Luxury</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light animate-hero-text-p">
            From the iconic Taj Mahal to the Royal Rajasthan Circuit. Premium Tempo Travellers, expert local guides, and unforgettable journeys.
          </p>
        </div>

        {/* 3. Glassmorphism Booking/Inquiry Widget */}
        <div className="w-full mt-4 animate-hero-widget">
          <SearchWidget />
        </div>

      </div>
    </section>
  );
}
