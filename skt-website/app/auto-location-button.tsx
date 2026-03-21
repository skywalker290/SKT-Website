"use client";

import { useState } from "react";
import { CITIES } from "./location-input";

interface AutoLocationButtonProps {
  onLocationFound: (location: string) => void;
}

export default function AutoLocationButton({ onLocationFound }: AutoLocationButtonProps) {
  const [isLocating, setIsLocating] = useState(false);

  const handleAutoDetect = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);

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

          if (finalLocation) {
            onLocationFound(finalLocation);
          } else {
            alert("Could not determine your city from coordinates.");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          alert("Failed to detect location.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Please allow location access to detect your starting point.");
        setIsLocating(false);
      }
    );
  };

  return (
    <button
      type="button"
      onClick={handleAutoDetect}
      disabled={isLocating}
      className="text-xs text-blue-600 hover:text-blue-800 disabled:text-gray-400 font-medium transition-colors flex items-center gap-1 mb-1"
      title="Detect my current location"
    >
      {isLocating ? (
        <span>Locating...</span>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span>Current Location</span>
        </>
      )}
    </button>
  );
}