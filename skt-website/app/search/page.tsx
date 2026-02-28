import Link from "next/link";
import ImageGallery from "./image-gallery";

async function getCoordinates(city: string) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}&limit=1`,
      { headers: { "User-Agent": "SKT-Travels-Demo/1.0" } }
    );
    const data = await res.json();
    return data[0] ? { lat: data[0].lat, lon: data[0].lon } : null;
  } catch (e) {
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
    const coordString = validCoords.map(c => `${c.lon},${c.lat}`).join(';');
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${coordString}?overview=false`
    );
    const data = await res.json();
    return data.routes?.[0]?.distance ? Math.round(data.routes[0].distance / 1000) : 0;
  } catch (e) {
    return 0;
  }
}

function calculateBusPrice(distance: number, mileage: number, busValue: number, days: number) {
  const DIESEL_PRICE = 98.98;
  const Per_KM_COST = 60;
  const basePrice = (distance * 2) * Per_KM_COST;
  const extraCharge = days > 2 ? (days - 2) * 2500 : 0;
  return Math.round(basePrice + extraCharge);
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

  let days = 1;
  if (departDate && returnDate) {
    const start = new Date(departDate);
    const end = new Date(returnDate);
    if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
      const diffTime = Math.abs(end.getTime() - start.getTime());
      days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
  }

  // Mock Data for demonstration
  const buses = [
    {
      id: 1,
      operator: "SKT Express",
      type: "AC Sleeper (2+1)",
      rating: 4.6,
      seats: 14,
      totalSeats: 36,
      mileage: 6,
      bus_value: 4.2,
      images: [
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494515855673-b841b02bb0c1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2084&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=2084&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      operator: "SKT Superfast",
      type: "Non-AC Seater (2+2)",
      rating: 4.1,
      seats: 28,
      totalSeats: 50,
      mileage: 8,
      bus_value: 3.8,
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494515855673-b841b02bb0c1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2084&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      operator: "SKT Premium Volvo",
      type: "Volvo Multi-Axle AC",
      rating: 4.9,
      seats: 8,
      totalSeats: 45,
      mileage: 5.5,
      bus_value: 4.8,
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494515855673-b841b02bb0c1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=2084&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=2070&auto=format&fit=crop"
      ]
    }
  ];

  const filteredBuses = buses.filter(bus => bus.totalSeats >= passengerCount);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block">
            &larr; Back to Search
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Available Buses
          </h1>
          <p className="mt-2 text-gray-600">
            {routePoints.length > 0 ? routePoints.join(' → ') : 'Search Results'} 
            {distance > 0 && origin && destination && ` • ${distance} km`}
            {departDate && ` • ${departDate}`} 
            {passengers && ` • ${passengers} Passenger(s)`}
          </p>
        </div>

        {/* Bus List */}
        <div className="space-y-4">
          {filteredBuses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-lg">No buses found with sufficient capacity.</p>
            </div>
          ) : (
            filteredBuses.map((bus) => {
              const price = calculateBusPrice(distance, bus.mileage, bus.bus_value, days);
              return (
            <div key={bus.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                {/* Bus Image */}
                <ImageGallery images={bus.images} operator={bus.operator} />

                {/* Bus Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{bus.operator}</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      ★ {bus.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{bus.type}</p>
                  <p className="text-sm text-gray-500 mb-4">Capacity: {bus.totalSeats} Seats • Mileage: {bus.mileage} km/l • Value: {bus.bus_value}</p>
                </div>

                {/* Price & Book */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                  <div className="text-left md:text-right">
                    <p className="text-2xl font-bold text-gray-900">₹{price}</p>
                    <p className="text-xs text-gray-500">+ GST</p>
                  </div>
                  <Link 
                    href={{
                      pathname: '/book',
                      query: {
                        busId: bus.id,
                        origin,
                        destination,
                        stops,
                        departDate,
                        returnDate,
                        passengers,
                        price
                      }
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                  >
                    Book Bus
                  </Link>
                </div>

              </div>
            </div>
          )})
          )}
        </div>
      </div>
    </main>
  );
}
