// src/components/FeaturedTours.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// 1. TypeScript Interface for type safety
interface Tour {
  id: string;
  title: string;
  duration: string;
  image: string;
  colSpan?: string; // Used to create the asymmetrical Bento look
  rowSpan?: string;
}

// 2. Dummy Data (Replace with your actual tour details)
const tours: Tour[] = [
  {
    id: "agra-flagship",
    title: "Agra Heritage Premium",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-2", // This makes it the big "Showstopper" card
  },
  {
    id: "jaipur-royal",
    title: "Jaipur Royal Escapade",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "delhi-culture",
    title: "Delhi Cultural Immersion",
    duration: "1 Full Day",
    image: "https://images.unsplash.com/photo-1713729991304-d0b6c328560e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jayanth-muppaneni-LMj_BZKeGfE-unsplash.jpg&w=1920",
  },
  {
    id: "udaipur-lakes",
    title: "Udaipur City of Lakes",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-2", // Spans across the bottom
  },
];

export default function FeaturedTours() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-cream w-full max-w-7xl mx-auto">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">
            Curated Experiences
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal">
            Trending Destinations
          </h3>
        </div>
        <button className="hidden md:block border-b-2 border-brand-charcoal pb-1 text-brand-charcoal font-medium hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
          View All Packages →
        </button>
      </motion.div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {tours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered reveal
            className={cn(
              "relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500",
              tour.colSpan,
              tour.rowSpan
            )}
          >
            {/* Background Image with Hover Scale */}
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
              <span className="text-brand-gold-light text-sm font-medium tracking-wide mb-1 drop-shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {tour.duration}
              </span>
              <h4 className="text-white text-2xl md:text-3xl font-bold drop-shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {tour.title}
              </h4>
              
              {/* Hidden button that slides up on hover */}
              <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-brand-charcoal transition-colors">
                  Explore Itinerary
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile View All Button */}
      <button className="md:hidden mt-8 w-full border border-brand-charcoal text-brand-charcoal font-medium py-3 rounded-xl hover:bg-brand-charcoal hover:text-white transition-colors">
        View All Packages
      </button>
    </section>
  );
}
