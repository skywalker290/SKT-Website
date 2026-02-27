export default function Home() {
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
        <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8">
          <form action="/search" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 items-end">
            
            {/* Origin Input */}
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Leaving from</label>
              {/* Set default value to Agra since that's the hub */}
              <input 
                type="text" 
                id="origin" 
                name="origin"
                defaultValue="Agra, Uttar Pradesh"
                placeholder="e.g., New York" 
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
              />
            </div>

            {/* Destination Input */}
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Going to</label>
              <input 
                type="text" 
                id="destination" 
                name="destination"
                placeholder="e.g., Delhi" 
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
              />
            </div>

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
                Return Date <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input 
                type="date" 
                id="returnDate" 
                name="returnDate"
                className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
              />
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
            <div>
              <button 
                type="submit" 
                className="w-full rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Search Buses
              </button>
            </div>

          </form>
        </div>
      </div>
      
    </main>
  );
}