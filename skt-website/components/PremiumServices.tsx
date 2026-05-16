"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    id: "corporate",
    title: "Executive & Corporate",
    description: "Seamless logistical management for corporate offsites, VIP delegates, and executive retreats.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "wedding",
    title: "Destination Weddings",
    description: "Immaculate fleet coordination to ensure your guests travel in absolute comfort and style.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: "custom",
    title: "Bespoke Itineraries",
    description: "Tailor-made journeys across India, designed exactly to your pace and preferences.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    id: "airport",
    title: "Airport Concierge",
    description: "Punctual, premium airport transfers with meet-and-greet services for complete peace of mind.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function PremiumServices() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden relative">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-xs md:text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-3">
              Curated Excellence
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
              Our Premium Services
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 opacity-50" />
          </ScrollReveal>
        </div>

        {/* Services Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              direction="up" 
              delay={index * 0.15}
            >
              <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Multi-layered Vignette Overlay */}
                <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  {/* Icon & Title */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h4>
                  </div>

                  {/* Hidden Description (Reveals on Hover) */}
                  <div className="h-0 overflow-hidden opacity-0 group-hover:h-[80px] group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-300 text-sm leading-relaxed border-t border-brand-gold/30 pt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
