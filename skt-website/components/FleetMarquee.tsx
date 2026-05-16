// src/components/FleetMarquee.tsx
"use client";

import Image from "next/image";
import InfiniteMarquee from "./InfiniteMarquee";
import ScrollReveal from "./ScrollReveal";
import { fleetImages } from "@/data/phase5Data";

export default function FleetMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <ScrollReveal direction="up">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">
            The Sri Kela Standard
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal">
            Our Premium Fleet
          </h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From intimate luxury tempo travellers to executive buses, travel in absolute comfort.
          </p>
        </ScrollReveal>
      </div>

      {/* Fleet Marquee Track */}
      <InfiniteMarquee direction="left" speed={35}>
        {fleetImages.map((vehicle) => (
          <div
            key={vehicle.id}
            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] rounded-2xl overflow-hidden shadow-md group shrink-0"
          >
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 300px, 400px"
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="text-white font-bold text-lg md:text-xl leading-tight">{vehicle.name}</p>
              <div className="w-8 h-1 bg-brand-gold mt-2 rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
            </div>
          </div>
        ))}
      </InfiniteMarquee>
    </section>
  );
}
