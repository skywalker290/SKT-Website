// Define the types
export type Bus = {
  bus_id: string;
  bus_name: string;
  bus_capacity: number;
  origin: string;
  destination: string;
  departureTime: string;
  price: number;
};

export type Booking = {
  booking_id: string;
  bus_id: string;
  passenger_name: string;
  travel_date: string;
  seats_booked: number;
};

// Table 1: Mock Buses Table
export const busesTable: Bus[] = [
  { 
    bus_id: "B-001", 
    bus_name: "Taj Express Travels", 
    bus_capacity: 40,
    origin: "Agra",
    destination: "Delhi",
    departureTime: "08:00 AM",
    price: 450
  },
  { 
    bus_id: "B-002", 
    bus_name: "Mughal Roadways Volvo", 
    bus_capacity: 45,
    origin: "Delhi",
    destination: "Agra",
    departureTime: "10:30 AM",
    price: 600
  },
  { 
    bus_id: "B-003", 
    bus_name: "Yamuna Transit Standard", 
    bus_capacity: 50,
    origin: "Agra",
    destination: "Jaipur",
    departureTime: "06:00 AM",
    price: 350
  }
];

// Table 2: Mock Bookings Table
export const bookingsTable: Booking[] = [
  { 
    booking_id: "TKT-9912", 
    bus_id: "B-001", 
    passenger_name: "Rahul Sharma", 
    travel_date: "2026-03-05", 
    seats_booked: 2 
  },
  { 
    booking_id: "TKT-9913", 
    bus_id: "B-002", 
    passenger_name: "Anita Desai", 
    travel_date: "2026-03-05", 
    seats_booked: 4 
  }
];