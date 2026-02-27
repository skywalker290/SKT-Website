"use client";

import { useState, useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
  operator: string;
}

export default function ImageGallery({ images, operator }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="w-full md:w-48 flex-shrink-0 flex flex-col gap-2">
        <div 
          className="h-32 relative cursor-pointer group"
          onClick={() => setSelectedIndex(0)}
        >
          <img 
            src={images[0]} 
            alt={operator} 
            className="w-full h-full object-cover rounded-md group-hover:opacity-95 transition-opacity" 
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-md">
            <span className="text-white font-medium text-sm drop-shadow-md">View</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {images.slice(1).map((img, idx) => (
            <div 
              key={idx} 
              className="w-12 h-12 relative cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedIndex(idx + 1)}
            >
              <img 
                src={img} 
                alt={`${operator} view ${idx + 2}`} 
                className="w-full h-full object-cover rounded-md border border-gray-200" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div 
            className="relative max-w-6xl max-h-full w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedIndex]} 
              alt={`${operator} - Image ${selectedIndex + 1}`} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            
            {/* Image Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
