"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface PremiumBusCardProps {
  id: number;
  name: string;
  type: string;
  rating: number;
  capacity: number;
  images: string[];
  amenities: string[];
  searchParams: {
    origin: string;
    destination: string;
    stops: string[];
    departDate: string;
    returnDate: string;
    passengers: string;
  };
}

export default function PremiumBusCard({
  id,
  name,
  type,
  rating,
  capacity,
  images,
  amenities,
  searchParams
}: PremiumBusCardProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row group mb-6">
      
      {/* LEFT SIDE: Interactive Gallery */}
      <div className="w-full md:w-[300px] p-4 flex flex-col gap-3 shrink-0">
        {/* Main Image Stage */}
        <div className="relative w-full h-48 md:h-52 rounded-2xl overflow-hidden bg-gray-50">
          <Image
            src={activeImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-brand-charcoal flex items-center gap-1 shadow-sm border border-white/20">
            <svg className="w-3 h-3 text-brand-gold fill-brand-gold" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 h-12 px-0.5">
          {images.slice(0, 4).map((img, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveImage(img)}
              onClick={() => setActiveImage(img)}
              className={cn(
                "relative flex-1 rounded-lg overflow-hidden border-2 transition-all duration-300",
                activeImage === img ? "border-brand-gold ring-2 ring-brand-gold/10" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Details & Booking */}
      <div className="w-full flex-1 p-5 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-charcoal mb-1 tracking-tight">
                {name}
              </h3>
              <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                {type}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block mb-1">Pricing</span>
              <span className="text-base font-bold text-brand-charcoal opacity-60 italic">Quote on Request</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[16px]">group</span>
              {capacity} Seats
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-200" />
            <span className="flex items-center gap-1.5 text-green-600 font-bold">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Verified
            </span>
          </div>

          {/* Premium Amenities */}
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, idx) => (
              <span key={idx} className="bg-brand-cream/50 border border-brand-gold/10 text-brand-charcoal text-[9px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 font-medium italic">
            * Final quote depends on route
          </p>
          <Link 
            href={{
              pathname: '/book',
              query: {
                busId: id,
                ...searchParams
              }
            }}
            className="w-full sm:w-auto bg-brand-charcoal hover:bg-brand-gold text-white hover:text-brand-charcoal font-bold py-3 px-8 rounded-xl transition-all duration-500 transform active:scale-95 shadow-lg shadow-brand-charcoal/5 flex items-center justify-center gap-2.5 group/btn text-sm"
          >
            Reserve Vehicle
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
