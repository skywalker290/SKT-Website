// src/components/TestimonialMarquee.tsx
"use client";

import InfiniteMarquee from "./InfiniteMarquee";
import ScrollReveal from "./ScrollReveal";
import { reviews } from "@/data/phase5Data";

export default function TestimonialMarquee() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <ScrollReveal direction="up">
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">
            Client Experiences
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal">
            Trusted by Travelers Worldwide
          </h3>
        </ScrollReveal>
      </div>

      {/* Testimonials Marquee Track */}
      <InfiniteMarquee direction="right" speed={45}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[320px] md:w-[420px] p-8 rounded-2xl bg-white border border-gray-100 shadow-sm shrink-0 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Quote Icon SVG (Optional but looks great) */}
            <svg className="w-8 h-8 text-brand-gold/30 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-gray-700 italic text-sm md:text-base mb-6 leading-relaxed whitespace-normal">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-charcoal font-bold border border-brand-gold/20 shrink-0">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-brand-charcoal text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </InfiniteMarquee>
    </section>
  );
}
