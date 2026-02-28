"use client";

import { useState, useRef } from "react";
import LocationInput from "./location-input";

export default function Home() {
  const [destinations, setDestinations] = useState<{ id: number }[]>([{ id: Date.now() }]);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

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
    <main className="relative min-h-screen isolate overflow-hidden">
      
      {/* Background Image Layer */}
      {/* NOTE: For production, you should download this image locally to /public/hero.jpg 
          and use: bg-[url('/hero.jpg')] for better performance.
      */}
      <img
        src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Taj Mahal background"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* The Dark Overlay Layer (makes text readable) */}
      <div className="absolute inset-0 -z-10 bg-gray-900/70 mix-blend-multiply" />

      {/* Hero Section Text */}
      <div className="relative pb-32 pt-24 sm:pb-40 sm:pt-32 lg:pb-48 lg:pt-40 text-center">
        <div className="relative px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sri Kela Travels
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Start your journey from the city of the Taj. Comfortable, safe, and affordable travel across India.
          </p>
        </div>
      </div>

      {/* Search Form Container (Overlapping the image) */}
      {/* We adjusted the negative margin (-mt) to match the new taller hero padding */}
      <div className="-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 border border-gray-100">
          <form action="/search" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Route (Origin -> Stops -> Destination) */}
            <div className="lg:col-span-7 flex flex-col gap-4 relative">
              
              {/* Visual Connector Line */}
              <div className="absolute left-[1.15rem] top-10 bottom-10 w-0.5 bg-gray-200 -z-10" />

              {/* Origin */}
              <div className="flex gap-4 items-start">
                <div className="mt-9 w-4 h-4 rounded-full border-2 border-gray-800 bg-white shrink-0 z-10" />
                <div className="flex-1">
                  <LocationInput 
                    label="Start your journey" 
                    name="origin" 
                    defaultValue="Agra, Uttar Pradesh" 
                    placeholder="e.g., New York" 
                    required
                  />
                </div>
              </div>

              {/* Stops & Destination */}
              {destinations.map((stop, index) => {
                const isLast = index === destinations.length - 1;
                return (
                <div 
                  key={stop.id} 
                  className="flex gap-4 items-start group"
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={() => { dragItem.current = null; dragOverItem.current = null; }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <div className={`mt-9 w-4 h-4 rounded-full border-2 ${isLast ? 'border-red-600' : 'border-gray-400'} bg-white shrink-0 z-10 cursor-grab active:cursor-grabbing flex items-center justify-center hover:bg-gray-50`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${isLast ? 'bg-red-600' : 'bg-gray-400'}`} />
                  </div>
                  <div className="flex-1 relative">
                    <LocationInput
                      label={isLast ? "Going to" : `Stop ${index + 1}`}
                      name={isLast ? "destination" : "stops"}
                      placeholder={isLast ? "e.g., Delhi" : "e.g. Jaipur"}
                      required
                    />
                    {destinations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDestination(stop.id)}
                      className="absolute top-8 right-2 text-gray-400 hover:text-red-500 p-1"
                      title="Remove stop"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                    )}
                  </div>
                </div>
                );
              })}

              {/* Add Stop Button */}
              <div className="flex gap-4 items-center">
                <div className="w-4 flex justify-center">
                  <div className="w-0.5 h-full bg-gray-200" />
                </div>
                <button
                  type="button"
                  onClick={addStop}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1 py-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  Add Stop
                </button>
              </div>

            </div>

            {/* Right Column: Dates & Passengers */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Depart Date */}
                <div>
                  <label htmlFor="departDate" className="block text-sm font-medium text-gray-700">Depart Date</label>
                  <input 
                    type="date" 
                    id="departDate" 
                    name="departDate"
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
                  />
                </div>

                {/* Return Date */}
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                    Return Date
                  </label>
                  <input 
                    type="date" 
                    id="returnDate" 
                    name="returnDate"
                    required
                    className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Passengers</label>
                <input 
                  type="number" 
                  id="passengers" 
                  name="passengers"
                  min="1"
                  defaultValue="1"
                  className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
                />
              </div>

              {/* Submit Button */}
              <div className="mt-auto">
                <button 
                  type="submit" 
                  className="w-full rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Search Buses
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
      
    </main>
  );
}