"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface PromiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const promises: PromiseItem[] = [
  {
    id: "fleet",
    number: "01",
    title: "Immaculate Premium Fleet",
    description: "Every tempo traveller and bus in our lineup undergoes rigorous daily detailing and mechanical checks. You step into a pristine, climate-controlled environment every single time.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "chauffeurs",
    number: "02",
    title: "Expert Local Chauffeurs",
    description: "Our drivers aren't just navigators; they are vetted professionals trained in defensive driving, multi-lingual communication, and elite hospitality.",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pricing",
    number: "03",
    title: "Transparent Pricing",
    description: "Luxury shouldn't come with hidden fees. Your quote includes all state taxes, tolls, and parking. What we quote is exactly what you pay—down to the rupee.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "support",
    number: "04",
    title: "24/7 Concierge Support",
    description: "From the moment you book until you return home, a dedicated travel concierge is available around the clock to handle route changes, emergency support, or local recommendations.",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function OurPromise() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <ScrollReveal direction="up">
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">
              Our Promise
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-charcoal">
              Why Discerning Travelers <br className="hidden md:block" /> Choose Us
            </h3>
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative">
          
          {/* LEFT SIDE: Sticky Image Crossfade (Hidden on mobile for better flow) */}
          <div className="hidden md:block w-1/2 relative">
            <div className="sticky top-32 h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={promises[activeIndex].image}
                    alt={promises[activeIndex].title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: The Interactive List */}
          <div className="w-full md:w-1/2 flex flex-col">
            {promises.map((item, index) => (
              <PromiseItemCard 
                key={item.id} 
                item={item} 
                index={index} 
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function PromiseItemCard({ 
  item, 
  index, 
  isActive, 
  setActiveIndex 
}: { 
  item: PromiseItem; 
  index: number; 
  isActive: boolean; 
  setActiveIndex: (i: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // Trigger when the item is in the middle 20% of the screen
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActiveIndex(index)}
      className={cn(
        "group relative py-12 md:py-20 border-b border-gray-100 cursor-pointer transition-all duration-500",
        isActive ? "opacity-100" : "opacity-30 hover:opacity-100"
      )}
    >
      <div className="flex gap-6 md:gap-8 items-start">
        {/* Giant Typography Number */}
        <span className={cn(
          "text-5xl md:text-7xl font-extrabold transition-colors duration-500",
          isActive ? "text-brand-gold" : "text-gray-200"
        )}>
          {item.number}
        </span>
        
        <div className="flex-1">
          <h4 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-4 transition-transform duration-500 group-hover:translate-x-2">
            {item.title}
          </h4>
          
          {/* Mobile Image */}
          <div className="md:hidden w-full h-[250px] relative rounded-2xl overflow-hidden mb-6 mt-4 shadow-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 leading-relaxed max-w-md text-lg">
            {item.description}
          </p>
        </div>
      </div>
      
      {/* Active Indicator Line */}
      {isActive && (
        <motion.div
          layoutId="activePromiseLine"
          className="absolute left-0 bottom-0 w-full h-[3px] bg-brand-gold"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}
