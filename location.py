import csv
import time
from geopy.geocoders import Nominatim
from geopy.distance import geodesic

# Your full list (truncated for brevity, keep your full list here)
CITIES = [
    "Kolhapur, Maharashtra", "Port Blair, Andaman & Nicobar Islands",
    "Agra, Uttar Pradesh", "Delhi, Delhi", "Mathura, Uttar Pradesh"
    # ... paste your full list here
]

geolocator = Nominatim(user_agent="sri_kela_travels_mapper")

def get_coordinates():
    city_coords = {}
    print(f"Geocoding {len(CITIES)} cities...")
    
    with open('city_coordinates.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(["City", "Latitude", "Longitude"])
        
        for city in CITIES:
            try:
                location = geolocator.geocode(city, timeout=10)
                if location:
                    city_coords[city] = (location.latitude, location.longitude)
                    writer.writerow([city, location.latitude, location.longitude])
                    print(f"Done: {city}")
                # Sleep to respect OpenStreetMap's 1-req-per-second policy
                time.sleep(1.1) 
            except Exception as e:
                print(f"Error geocoding {city}: {e}")
    
    return city_coords

if __name__ == "__main__":
    get_coordinates()