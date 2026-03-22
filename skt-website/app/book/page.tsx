import Link from "next/link";
import GenerateBillButton from "./GenerateBillButton";

// Mock Data (duplicated from search page for simplicity)
const buses = [
  {
    id: 1,
    operator: "SKT Express",
    type: "AC Sleeper (2+1)",
    rating: 4.6,
  },
  {
    id: 2,
    operator: "SKT Superfast",
    type: "Non-AC Seater (2+2)",
    rating: 4.1,
  },
  {
    id: 3,
    operator: "SKT Premium Volvo",
    type: "Volvo Multi-Axle AC",
    rating: 4.9,
  }
];

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const busId = typeof params.busId === 'string' ? parseInt(params.busId) : 0;
  const origin = typeof params.origin === 'string' ? params.origin : '';
  const destination = typeof params.destination === 'string' ? params.destination : '';
  const stopsParam = params.stops;
  const stops = Array.isArray(stopsParam) ? stopsParam : (stopsParam ? [stopsParam] : []);
  const departDate = typeof params.departDate === 'string' ? params.departDate : '';
  const returnDate = typeof params.returnDate === 'string' ? params.returnDate : '';
  const passengers = typeof params.passengers === 'string' ? parseInt(params.passengers) : 1;
  const basePrice = typeof params.price === 'string' ? parseInt(params.price) : 0;

  const bus = buses.find(b => b.id === busId);

  if (!bus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Bus not found</h1>
          <p className="text-gray-600 mt-2">The bus you are looking for does not exist or is no longer available.</p>
          <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Search</Link>
        </div>
      </div>
    );
  }

  const gst = Math.round(basePrice * 0.18);
  const totalPrice = basePrice + gst;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href={`/search?origin=${origin}&destination=${destination}&departDate=${departDate}&returnDate=${returnDate}&passengers=${passengers}`} className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block">
            &larr; Back to Search
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Complete your Booking</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details & Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Trip Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Trip Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                <div>
                  <p className="text-gray-500">Route</p>
                  <p className="font-medium text-gray-900">
                    {origin}
                    {stops.map((stop, i) => <span key={i} className="text-gray-500"> &rarr; {stop}</span>)}
                    <span className="text-gray-400"> to </span> {destination}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium text-gray-900">
                    {departDate}
                    {returnDate && <span className="text-gray-500 font-normal"> (Return: {returnDate})</span>}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Bus Operator</p>
                  <p className="font-medium text-gray-900">{bus.operator}</p>
                </div>
                <div>
                  <p className="text-gray-500">Bus Type</p>
                  <p className="font-medium text-gray-900">{bus.type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Passengers</p>
                  <p className="font-medium text-gray-900">{passengers}</p>
                </div>
              </div>
            </div>

            {/* Passenger Details Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Passenger Details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. John Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" id="age" name="age" required min="1" max="120" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="e.g. 25" />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input type="tel" id="phone" name="phone" required className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Fare Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Base Fare</span>
                  <span>₹{basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg text-gray-900">
                  <span>Total Payable</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                Proceed to Pay
              </button>
              
              <GenerateBillButton 
                tripDetails={{
                  origin,
                  destination,
                  stops,
                  departDate,
                  returnDate,
                  operator: bus.operator,
                  type: bus.type,
                  passengers
                }}
                fareDetails={{
                  basePrice,
                  gst,
                  totalPrice
                }}
              />
              
              <div className="mt-4 flex items-start gap-2">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
