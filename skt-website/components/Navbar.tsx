// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        height: isScrolled ? "70px" : "90px",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300",
        isScrolled ? "backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      )}
    >
      {/* Brand Logo */}
      <div className={cn(
        "font-extrabold text-xl tracking-wider transition-colors duration-300",
        isScrolled ? "text-brand-charcoal" : "text-white"
      )}>
        SRI KELA <span className="text-brand-gold">TRAVELS</span>
      </div>

      {/* Nav Links */}
      <div className={cn(
        "hidden md:flex items-center gap-8 font-medium text-sm tracking-wide transition-colors duration-300",
        isScrolled ? "text-brand-charcoal/80" : "text-white/90"
      )}>
        <a href="#" className="hover:text-brand-gold transition-colors">Home</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Tours</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Our Fleet</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
      </div>

      {/* Adaptive CTA Button */}
      <div>
        <button className={cn(
          "px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95",
          isScrolled 
            ? "bg-brand-charcoal text-white hover:bg-brand-gold hover:text-brand-charcoal" 
            : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-brand-charcoal"
        )}>
          Book Fleet
        </button>
      </div>
    </motion.nav>
  );
}
