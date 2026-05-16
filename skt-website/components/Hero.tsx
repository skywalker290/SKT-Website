"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Using our helper from Phase 1
import SearchWidget from "./SearchWidget";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // Animation variants for staggered text reveal
  const textContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section key={pathname} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
        <motion.div
          variants={textContainerVariant}
          initial="hidden"
          animate="show"
          className="max-w-3xl mb-10"
        >
          <motion.h1 
            variants={itemVariant}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Experience India's Heritage in <span className="text-brand-gold">Absolute Luxury</span>
          </motion.h1>
          <motion.p 
            variants={itemVariant}
            className="text-lg md:text-xl text-gray-200 font-light"
          >
            From the iconic Taj Mahal to the Royal Rajasthan Circuit. Premium Tempo Travellers, expert local guides, and unforgettable journeys.
          </motion.p>
        </motion.div>

        {/* 3. Glassmorphism Booking/Inquiry Widget */}
        <div className="w-full mt-4 animate-hero-widget">
          <SearchWidget />
        </div>

      </div>
    </section>
  );
}
