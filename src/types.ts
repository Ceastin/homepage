export interface SearchState {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  rooms: number;
}

export interface Hotel {
  id: string;
  name: string;
  tagline: string;
  city: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  image: string;
  amenities: string[];
  type: 'Premier Inn' | 'hub by Premier Inn' | 'ZIP by Premier Inn';
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  buttonText: string;
  accentColor?: string;
}

export interface Getaway {
  id: string;
  title: string;
  image: string;
  buttonText: string;
}

export interface NewsCard {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}
