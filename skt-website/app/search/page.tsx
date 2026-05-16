import Link from "next/link";
import PremiumBusCard from "../../components/PremiumBusCard";

async function getCoordinates(city: string) {
  try {
    const apiKey = 'ohv4XjTQoDIolIO6FYjhrrOjdE5ErPy3xUqrwYvG';
    const res = await fetch(
      `https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(city)}&language=hi&api_key=${apiKey}`,
      { headers: { "X-Request-Id": "req-" + Date.now() } }
    );
    const data = await res.json();
    
    const location = data.geocodingResults?.[0]?.geometry?.location;
    return location ? { lat: location.lat.toString(), lon: location.lng.toString() } : null;
  } catch (e) {
    console.error("Geocoding error:", e);
    return null;
  }
}

async function getMultiStopDistance(points: string[]): Promise<number> {
  if (points.length < 2) return 0;
  
  const coordsPromises = points.map(p => getCoordinates(p));
  const coords = await Promise.all(coordsPromises);
  const validCoords = coords.filter((c): c is {lat: string, lon: string} => c !== null);
  
  if (validCoords.length < 2) return 0;

  try {
    const origins = encodeURIComponent(validCoords.slice(0, -1).map(c => `${c.lat},${c.lon}`).join('|'));
    const destinations = encodeURIComponent(validCoords.slice(1).map(c => `${c.lat},${c.lon}`).join('|'));
    const apiKey = 'ohv4XjTQoDIolIO6FYjhrrOjdE5ErPy3xUqrwYvG';

    const url = `https://api.olamaps.io/routing/v1/distanceMatrix?origins=${origins}&destinations=${destinations}&api_key=${apiKey}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Request-Id': 'req-' + Date.now(),
      }
    });
    const data = await res.json();
    
    let totalDistance = 0;
    for (let i = 0; i < validCoords.length - 1; i++) {
      const element = data.rows?.[i]?.elements?.[i];
      if (element?.status === 'OK' && typeof element.distance === 'number') {
        totalDistance += element.distance;
      }
    }
    // Explicitly increasing the distance by 3% to match the distance values from google maps.
    return totalDistance > 0 ? Math.round((totalDistance * 1.03) / 1000) : 0;
  } catch (e) {
    console.error("Error fetching distance matrix:", e);
    return 0;
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const origin = typeof params.origin === 'string' ? params.origin : '';
  const destination = typeof params.destination === 'string' ? params.destination : '';
  const departDate = typeof params.departDate === 'string' ? params.departDate : '';
  const returnDate = typeof params.returnDate === 'string' ? params.returnDate : '';
  const passengers = typeof params.passengers === 'string' ? params.passengers : '1';
  const passengerCount = parseInt(passengers) || 1;
  
  const stopsParam = params.stops;
  const stops = Array.isArray(stopsParam) ? stopsParam : (stopsParam ? [stopsParam] : []);
  const routePoints = [origin, ...stops, destination].filter(Boolean);
  const distance = await getMultiStopDistance(routePoints);

  // Mock Data for demonstration
  const buses = [
    {
      id: 1,
      operator: "SKT Express",
      type: "AC Sleeper (2+1)",
      rating: 4.6,
      totalSeats: 36,
      amenities: ["Climate Control", "Reclining Seats", "Reading Lights", "Onboard WiFi"],
      images: [
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
        "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=1200",
        "https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=1200"
      ]
    },
    {
      id: 2,
      operator: "SKT Superfast",
      type: "Non-AC Seater (2+2)",
      rating: 4.1,
      totalSeats: 50,
      amenities: ["Spacious Legroom", "USB Charging", "Emergency Exit", "Trained Driver"],
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200",
        "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200",
        "https://images.unsplash.com/photo-1494515855673-b841b02bb0c1?q=80&w=1200"
      ]
    },
    {
      id: 3,
      operator: "SKT Premium Volvo",
      type: "Volvo Multi-Axle AC",
      rating: 4.9,
      totalSeats: 45,
      amenities: ["Luxury Semi-Sleeper", "Mineral Water", "Blankets & Pillows", "GPS Tracking"],
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
        "https://images.unsplash.com/photo-1494515855673-b841b02bb0c1?q=80&w=1200",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200",
        "https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=1200"
      ]
    }
  ];

  const filteredBuses = buses.filter(bus => bus.totalSeats >= passengerCount);

  return (
    <main className="min-h-screen bg-[#FDFCF9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="group flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-gold font-bold transition-colors mb-4 text-[10px] uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">west</span>
            New Search
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                Available Fleet
              </h1>
              <p className="mt-3 text-brand-charcoal/60 font-medium flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {origin}
                </span>
                <span className="material-symbols-outlined text-[14px] text-brand-gold">arrow_forward</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {destination}
                </span>
                {distance > 0 && <span className="ml-2 px-2.5 py-0.5 bg-brand-cream rounded-full text-[10px] font-bold text-brand-gold">{distance} KM</span>}
              </p>
            </div>
            <div className="flex gap-3">
               <div className="bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm">
                  <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-0.5">Travel Date</p>
                  <p className="font-bold text-brand-charcoal text-xs">{departDate || 'Not set'}</p>
               </div>
               <div className="bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm">
                  <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-0.5">Passengers</p>
                  <p className="font-bold text-brand-charcoal text-xs">{passengers} Adults</p>
               </div>
            </div>
          </div>
        </div>

        {/* Bus List */}
        <div className="space-y-4">
          {filteredBuses.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-gray-200">
              <span className="material-symbols-outlined text-5xl text-gray-200 mb-4">directions_bus</span>
              <p className="text-gray-400 font-bold text-lg">No vehicles found for this capacity.</p>
              <Link href="/" className="mt-4 inline-block text-brand-gold font-bold hover:underline">Try a different search</Link>
            </div>
          ) : (
            filteredBuses.map((bus) => (
              <PremiumBusCard 
                key={bus.id}
                id={bus.id}
                name={bus.operator}
                type={bus.type}
                rating={bus.rating}
                capacity={bus.totalSeats}
                images={bus.images}
                amenities={bus.amenities}
                searchParams={{
                  origin,
                  destination,
                  stops,
                  departDate,
                  returnDate,
                  passengers
                }}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

