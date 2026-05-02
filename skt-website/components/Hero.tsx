import React from "react";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Taj Mahal Sunrise"
          className="w-full h-full object-cover brightness-75"
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-surface"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center text-white pt-24">
        <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight mb-12 drop-shadow-lg">
          Experience India's Heritage with <span className="text-primary-container">Sri Kela Travels</span>
        </h1>
        {/* Enquiry Widget */}
        <SearchWidget />
      </div>
    </section>
  );
}
