"use client";

import { useState, useRef, useEffect } from "react";
import LocationInput, { CITIES } from "./location-input";
import AutoLocationButton from "./auto-location-button";
import DateRangeDragger from "./DateRangeDragger";

export default function SearchWidget() {
  const [destinations, setDestinations] = useState<{ id: number }[]>([{ id: Date.now() }]);
  const [origin, setOrigin] = useState("");
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
              { headers: { "User-Agent": "SKT-Travels-Demo/1.0" } }
            );
            const data = await res.json();
            
            const rawCity = 
              data.address.city || 
              data.address.town || 
              data.address.village || 
              data.address.county;
              
            const rawState = data.address.state;
            let finalLocation = "";

            if (rawCity) {
              const rawCityLower = rawCity.toLowerCase();
              const match = CITIES.find((c) => {
                const cLower = c.toLowerCase();
                const cCityOnly = cLower.split(",")[0].trim();
                return cLower.includes(rawCityLower) || rawCityLower.includes(cCityOnly);
              });
              
              finalLocation = match ? match : (rawState ? `${rawCity}, ${rawState}` : rawCity);
            } else if (rawState) {
              finalLocation = rawState;
            }

            setOrigin(finalLocation || "Agra, Uttar Pradesh");
          } catch (error) {
            console.error("Error fetching location:", error);
            setOrigin("Agra, Uttar Pradesh");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setOrigin("Agra, Uttar Pradesh");
        }
      );
    } else {
      setOrigin("Agra, Uttar Pradesh");
    }
  }, []);

  const addStop = () => {
    setDestinations((prev) => {
      const newDestinations = [...prev];
      newDestinations.splice(newDestinations.length - 1, 0, { id: Date.now() + Math.random() });
      return newDestinations;
    });
  };

  const removeDestination = (id: number) => {
    if (destinations.length <= 1) return;
    setDestinations((prev) => prev.filter((stop) => stop.id !== id));
  };

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    if (dragItem.current === null) return;
    dragOverItem.current = index;
    if (dragItem.current !== dragOverItem.current) {
      const _destinations = [...destinations];
      const draggedItemContent = _destinations[dragItem.current];
      _destinations.splice(dragItem.current, 1);
      _destinations.splice(dragOverItem.current, 0, draggedItemContent);
      dragItem.current = dragOverItem.current;
      setDestinations(_destinations);
    }
  };

  return (
    <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
      <div className="glass-card rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-white/20">
        <form action="/search" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Route [THE BRAIN] */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative">
            
            {/* Visual Connector Line - No-Line style */}
            <div className="absolute left-[1.15rem] top-12 bottom-12 w-0.5 bg-surface-container -z-10" />

            {/* Origin */}
            <div className="flex gap-6 items-start">
              <div className="mt-10 w-4 h-4 rounded-full border-2 border-primary bg-white shrink-0 z-10" />
              <div className="flex-1">
                <LocationInput 
                  label="Departure City" 
                  name="origin" 
                  defaultValue={origin} 
                  onChange={setOrigin}
                  placeholder="e.g., Agra" 
                  required
                  actionRight={<AutoLocationButton onLocationFound={(city) => setOrigin(city)} />}
                />
              </div>
            </div>

            {/* Stops as Chips - Horizontal Path */}
            <div className="flex flex-wrap gap-3 items-center ml-10">
              {destinations.slice(0, -1).map((stop, index) => (
                <div 
                  key={stop.id}
                  className="bg-primary/5 border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2 group hover:bg-primary/10 transition-all animate-in fade-in slide-in-from-left-2"
                >
                  <span className="text-[0.65rem] font-bold text-primary uppercase">Stop {index + 1}</span>
                  <input 
                    type="text" 
                    name="stops"
                    placeholder="Enter city"
                    className="bg-transparent border-none outline-none text-sm font-bold text-on-surface w-24 placeholder:text-outline/50"
                  />
                  <button 
                    type="button"
                    onClick={() => removeDestination(stop.id)}
                    className="text-primary/40 hover:text-red-500 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addStop}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-outline-variant hover:border-primary hover:text-primary transition-all group"
              >
                <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest">Add stop</span>
              </button>
            </div>

            {/* Final Destination */}
            <div className="flex gap-6 items-start">
              <div className="mt-10 w-4 h-4 rounded-full border-2 border-secondary bg-white shrink-0 z-10">
                <div className="w-full h-full rounded-full bg-secondary scale-50" />
              </div>
              <div className="flex-1">
                <LocationInput 
                  label="Final Destination" 
                  name="destination" 
                  placeholder="e.g., Delhi" 
                  required
                />
              </div>
            </div>

          </div>

          {/* Right Column: Dates & Passengers */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-surface-container-low/50 p-6 rounded-2xl border border-outline-ghost">
            <DateRangeDragger />

            {/* Passengers */}
            <div>
              <label htmlFor="passengers" className="block text-sm font-bold text-on-surface mb-2 uppercase tracking-wider">Travelers</label>
              <div className="relative">
                <input 
                  type="number" 
                  id="passengers" 
                  name="passengers"
                  min="1"
                  defaultValue="1"
                  className="w-full bg-white rounded-xl border border-outline-ghost py-4 px-4 text-on-surface shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all font-sans pl-12" 
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button - Premium Gradient */}
            <div className="mt-auto pt-4">
              <button 
                type="submit" 
                className="w-full rounded-xl bg-gradient-to-br from-primary to-primary-container py-5 px-6 text-base font-bold text-white shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.1em]"
              >
                Search Elite Voyages
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
