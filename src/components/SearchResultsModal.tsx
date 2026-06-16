import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, SlidersHorizontal, Star, Coffee, Wifi, Sparkles, Check, CheckCircle2, Ticket, ShieldAlert } from 'lucide-react';
import { SearchState, Hotel } from '../types';

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchState: SearchState;
}

const ALL_HOTELS: Hotel[] = [
  {
    id: 'h1',
    name: 'Premier Inn London Leicester Square',
    tagline: 'In the heart of London’s theatre land',
    city: 'London',
    pricePerNight: 119,
    rating: 4.8,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Free Wi-Fi', 'King-size Bed', 'On-site Restaurant', 'Air Conditioning'],
    type: 'Premier Inn'
  },
  {
    id: 'h2',
    name: 'hub London Covent Garden',
    tagline: 'High-tech and ultra-modern rooms',
    city: 'London',
    pricePerNight: 89,
    rating: 4.6,
    reviewsCount: 935,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: ['Bed App Controls', 'Monsoon Shower', 'Free Wi-Fi', 'Smart Storage'],
    type: 'hub by Premier Inn'
  },
  {
    id: 'h3',
    name: 'Premier Inn Edinburgh City Centre (Royal Mile)',
    tagline: 'In pristine Old Town, steps from castles',
    city: 'Edinburgh',
    pricePerNight: 95,
    rating: 4.7,
    reviewsCount: 812,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    amenities: ['Free Wi-Fi', 'Family Rooms', 'Hot Buffet Breakfast', 'Work Desk'],
    type: 'Premier Inn'
  },
  {
    id: 'h4',
    name: 'hub Edinburgh Rose Street',
    tagline: 'Sleek, stylish city base to explore Scotland',
    city: 'Edinburgh',
    pricePerNight: 75,
    rating: 4.5,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Bed App Controls', 'Monsoon Shower', 'Free Wi-Fi', '40" Freeview TV'],
    type: 'hub by Premier Inn'
  },
  {
    id: 'h5',
    name: 'ZIP Manchester Airport, Handforth',
    tagline: 'The essentials done brilliantly for less',
    city: 'Manchester',
    pricePerNight: 29,
    rating: 4.2,
    reviewsCount: 388,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    amenities: ['Slide-to-Double Beds', 'Power Shower', 'Under-bed Storage', 'Fast Sheets'],
    type: 'ZIP by Premier Inn'
  },
  {
    id: 'h6',
    name: 'Premier Inn Manchester Piccadilly',
    tagline: 'Ultra-convenient access to rails & sights',
    city: 'Manchester',
    pricePerNight: 82,
    rating: 4.6,
    reviewsCount: 1105,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: ['Free Wi-Fi', 'On-site Restaurant', 'King-size Bed', 'Disability Access'],
    type: 'Premier Inn'
  },
  {
    id: 'h7',
    name: 'Premier Inn Birmingham Broad Street',
    tagline: 'Perfect stay for conference & dining hubs',
    city: 'Birmingham',
    pricePerNight: 69,
    rating: 4.5,
    reviewsCount: 760,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    amenities: ['Free Wi-Fi', 'Freeview TV', 'King-size Bed', 'Power Shower'],
    type: 'Premier Inn'
  },
  {
    id: 'h8',
    name: 'Premier Inn Cologne City Centre',
    tagline: 'Seconds away from Cologne Cathedral',
    city: 'Cologne',
    pricePerNight: 105,
    rating: 4.8,
    reviewsCount: 650,
    image: 'https://images.unsplash.com/photo-1467269204594-96e10144864c?auto=format&fit=crop&w=800&q=80',
    amenities: ['Continental Breakfast', 'Free Wi-Fi', 'King-size Bed', 'Air Conditioning'],
    type: 'Premier Inn'
  },
  {
    id: 'h9',
    name: 'Premier Inn Dubai Marina',
    tagline: 'Gorgeous sunny deck & luxury base rates',
    city: 'Dubai',
    pricePerNight: 135,
    rating: 4.9,
    reviewsCount: 880,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    amenities: ['Rooftop Swimming Pool', 'Free Wi-Fi', 'Shuttle Bus', 'Panoramic Gym'],
    type: 'Premier Inn'
  }
];

export default function SearchResultsModal({ isOpen, onClose, searchState }: SearchResultsModalProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'price-low' | 'rating-high'>('price-low');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  
  // Checkout configurations
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [addFlexibleRate, setAddFlexibleRate] = useState(true);
  const [bookingCompleted, setBookingCompleted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle Dynamic matches selection
  const matchedHotels = useMemo(() => {
    let list = ALL_HOTELS.filter((hotel) => {
      // Filter by city search
      const query = (searchState.destination || '').toLowerCase().trim();
      if (!query) return true;
      return hotel.city.toLowerCase().includes(query) || hotel.name.toLowerCase().includes(query);
    });

    // If no exact matches based on specific popular city, provide fallback hotels for custom query
    if (list.length === 0) {
      list = [
        {
          id: 'fb1',
          name: `Premier Inn ${searchState.destination || 'City Center'} Base`,
          tagline: 'Comfy reliable rooms with easy high street access',
          city: searchState.destination || 'City Center',
          pricePerNight: 79,
          rating: 4.6,
          reviewsCount: 145,
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
          amenities: ['Free Wi-Fi', 'King-size Bed', 'Flat-screen TV', 'On-site Café'],
          type: 'Premier Inn'
        },
        {
          id: 'fb2',
          name: `hub by Premier Inn ${searchState.destination || 'Metropolitan'} Smart`,
          tagline: 'High technology compact room with superb speed connects',
          city: searchState.destination || 'Metropolitan',
          pricePerNight: 59,
          rating: 4.4,
          reviewsCount: 94,
          image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
          amenities: ['Bed App Controls', 'Monsoon Shower', 'Free Wi-Fi', 'Sleek Desk'],
          type: 'hub by Premier Inn'
        }
      ];
    }

    // Filter by Brand selection
    if (selectedBrand !== 'All') {
      list = list.filter((hotel) => hotel.type === selectedBrand);
    }

    // Sort matching
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [searchState.destination, selectedBrand, sortBy]);

  // Calculations
  const numberOfNights = 1; // Default
  const calculateTotal = (hotel: Hotel) => {
    let base = hotel.pricePerNight * searchState.rooms * numberOfNights;
    if (addBreakfast) {
      base += 12 * searchState.adults * numberOfNights;
    }
    if (addFlexibleRate) {
      base += 10 * searchState.rooms;
    }
    return base;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const referenceCode = `PI-${~~(Math.random() * 900000) + 100000}-GB`;
    setBookingRef(referenceCode);
    setBookingCompleted(true);
  };

  const resetFlow = () => {
    setSelectedHotel(null);
    setBookingCompleted(false);
    setBookingRef('');
    setAddBreakfast(false);
    setAddFlexibleRate(true);
  };

  const closeFullResults = () => {
    resetFlow();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="bg-white w-full h-full md:h-[90vh] md:max-w-[1100px] md:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-gray-850"
          id="search-overlay-container"
        >
          {/* Header Segment */}
          <div className="bg-[#511e62] px-6 py-4 flex items-center justify-between text-white border-b border-purple-950">
            <div>
              <div className="flex items-center space-x-1.5 bg-white/10 px-2.5 py-1 rounded-full text-xs max-w-max font-bold uppercase tracking-wider mb-1">
                <span>Rooms Available</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight">
                Search Results for "{searchState.destination || 'Popular locations'}"
              </h2>
              <p className="text-xs text-purple-200 mt-0.5">
                {searchState.adults} {searchState.adults === 1 ? 'Adult' : 'Adults'} · {searchState.rooms} {searchState.rooms === 1 ? 'Room' : 'Rooms'} · {numberOfNights} Night
              </p>
            </div>
            
            <button
              onClick={closeFullResults}
              type="button"
              id="btn-close-results"
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Core Body */}
          <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col md:flex-row relative">
            
            {/* LEFT / TOP PORTION: Hotel Results Selection */}
            {!selectedHotel ? (
              <>
                {/* Result Controls Sidemenu */}
                <div className="w-full md:w-[260px] bg-white border-b md:border-b-0 md:border-r border-gray-150 p-5 space-y-5">
                  <div className="flex items-center space-x-2 text-gray-900 border-b border-gray-100 pb-3">
                    <SlidersHorizontal className="w-4.5 h-4.5 text-[#511e62]" />
                    <span className="font-bold text-sm tracking-wide uppercase">Filters & Sort</span>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">Hotel Brand</span>
                    <div className="space-y-1.5 text-xs">
                      {['All', 'Premier Inn', 'hub by Premier Inn', 'ZIP by Premier Inn'].map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          type="button"
                          className={`w-full text-left p-2.5 rounded-lg border font-semibold transition-all flex items-center justify-between ${
                            selectedBrand === brand
                              ? 'bg-purple-50 border-[#511e62] text-[#511e62] font-semibold'
                              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{brand}</span>
                          {selectedBrand === brand && <Check className="w-4.5 h-4.5 text-[#511e62]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Sort */}
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">Sort Sights</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full text-xs font-semibold p-2 rounded-lg border border-gray-300 bg-white outline-none focus:border-purple-600 cursor-pointer"
                    >
                      <option value="price-low">Price: Low to High</option>
                      <option value="rating-high">Rating: High to Low</option>
                    </select>
                  </div>

                  <div className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-150/50 text-[11px] text-[#511e62] leading-relaxed">
                    <p className="font-bold">✓ Best Price Guarantee</p>
                    <p className="mt-0.5">Booking direct always guarantees the lowest room rates. Flexible refunds up to 1:00 PM on arrival day.</p>
                  </div>
                </div>

                {/* Hotels List Area */}
                <div className="flex-1 p-4 md:p-6 space-y-4" id="hotels-list-results">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                      {matchedHotels.length} {matchedHotels.length === 1 ? 'Hotel' : 'Hotels'} found
                    </span>
                  </div>

                  {matchedHotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
                    >
                      {/* Thumbnail Image */}
                      <div className="w-full md:w-56 h-48 md:h-full min-h-[190px] relative shrink-0">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className={`absolute top-3 left-3 text-[9px] font-bold px-2 py-0.5 rounded text-white ${
                          hotel.type === 'hub by Premier Inn' 
                            ? 'bg-[#c4d600] text-gray-900 font-extrabold'
                            : hotel.type === 'ZIP by Premier Inn'
                            ? 'bg-[#ff0055]'
                            : 'bg-[#511e62]'
                        }`}>
                          {hotel.type}
                        </span>
                      </div>

                      {/* Info Panel */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                            <h3 className="font-sans font-bold text-base md:text-lg text-gray-900 tracking-tight leading-snug">
                              {hotel.name}
                            </h3>
                            {/* Rating badge */}
                            <div className="flex items-center space-x-1 text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                              <span>{hotel.rating}</span>
                              <span className="text-gray-400 font-normal">({hotel.reviewsCount})</span>
                            </div>
                          </div>

                          <p className="text-xs text-gray-400 font-medium mb-3.5">
                            {hotel.tagline}
                          </p>

                          {/* Amenities Taglets */}
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {hotel.amenities.map((am) => (
                              <span
                                key={am}
                                className="text-[10px] bg-purple-50/50 text-[#511e62] border border-purple-100 px-2 py-0.5 rounded font-medium"
                              >
                                {am}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Pricing and booking CTA */}
                        <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between flex-wrap gap-3">
                          <div>
                            <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold">Standard Nightly Rate</span>
                            <div className="flex items-baseline space-x-1 text-gray-900">
                              <span className="text-2xl font-bold font-mono">£{hotel.pricePerNight}</span>
                              <span className="text-xs text-gray-400 font-medium">/ night</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => setSelectedHotel(hotel)}
                            type="button"
                            className="px-5 py-2 rounded-full bg-[#511e62] hover:bg-purple-900 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-sm"
                          >
                            Select Room
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* RIGHT PORTION: Checkout / Booking form */
              <div className="flex-1 w-full p-4 md:p-8 max-w-2xl mx-auto" id="checkout-container">
                
                {/* Back Link */}
                {!bookingCompleted && (
                  <button
                    onClick={resetFlow}
                    type="button"
                    className="text-xs font-bold text-[#511e62] mb-5 flex items-center space-x-1 hover:underline cursor-pointer"
                  >
                    <span>← Back to hotels list</span>
                  </button>
                )}

                {!bookingCompleted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl border border-gray-150 p-6 shadow-md"
                  >
                    {/* Hotel Details in Checkout */}
                    <div className="flex items-center space-x-3.5 border-b border-gray-100 pb-4 mb-5">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img src={selectedHotel.image} alt={selectedHotel.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <span className="text-[9px] bg-purple-100 text-[#511e62] px-2 py-0.5 rounded font-extrabold">{selectedHotel.type}</span>
                        <h4 className="font-sans font-bold text-base text-gray-950 mt-0.5 leading-snug">{selectedHotel.name}</h4>
                        <p className="text-xs text-gray-400 font-medium">{selectedHotel.city}, UK</p>
                      </div>
                    </div>

                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      
                      {/* Configuration checks */}
                      <div className="space-y-3">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Enhance your booking</span>
                        
                        {/* Option 1: Breakfast add-on */}
                        <label className="flex items-start space-x-3.5 p-3 rounded-xl border border-gray-150 hover:bg-purple-50/10 cursor-pointer transition-colors block">
                          <input
                            type="checkbox"
                            checked={addBreakfast}
                            onChange={(e) => setAddBreakfast(e.target.checked)}
                            className="mt-1 accent-purple-800"
                          />
                          <div className="flex-1 text-xs">
                            <span className="block font-bold text-gray-900 flex items-center gap-1">
                              <Coffee className="w-4 h-4 text-[#511e62]" />
                              <span>Add Unlimited Premier Breakfast (+£12 / adult)</span>
                            </span>
                            <span className="text-gray-500 block mt-0.5">
                              Famous hot buffet, croissants, fresh juices, and organic coffees. Kids eat fully free.
                            </span>
                          </div>
                        </label>

                        {/* Option 2: Flex rate upgrade */}
                        <label className="flex items-start space-x-3.5 p-3 rounded-xl border border-gray-150 hover:bg-purple-50/10 cursor-pointer transition-colors block">
                          <input
                            type="checkbox"
                            checked={addFlexibleRate}
                            onChange={(e) => setAddFlexibleRate(e.target.checked)}
                            className="mt-1 accent-purple-800"
                          />
                          <div className="flex-1 text-xs">
                            <span className="block font-bold text-gray-900 flex items-center gap-1">
                              <Ticket className="w-4 h-4 text-[#511e62] rotate-12" />
                              <span>Upgrade to Flexible Flexi-Rate (+£10 / room)</span>
                            </span>
                            <span className="text-gray-500 block mt-0.5">
                              Free cancellation up to 1:00 PM on check-in day. Otherwise, non-refundable base.
                            </span>
                          </div>
                        </label>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Guest Details Input fields */}
                      <div className="space-y-3.5 pt-2">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Lead Guest Details</span>
                        <div className="grid grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase">First Name</label>
                            <input required type="text" placeholder="John" className="w-full text-xs font-medium p-2.5 border border-gray-300 rounded-lg focus:border-purple-600 outline-none mt-1" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase">Last Name</label>
                            <input required type="text" placeholder="Smith" className="w-full text-xs font-medium p-2.5 border border-gray-300 rounded-lg focus:border-purple-600 outline-none mt-1" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-500 uppercase">Contact Email</label>
                          <input required type="email" placeholder="john.smith@gmail.com" className="w-full text-xs font-medium p-2.5 border border-gray-300 rounded-lg focus:border-purple-600 outline-none mt-1" />
                        </div>
                      </div>

                      {/* Total Calculations summary table */}
                      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 mt-6 space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                          <span>Base room rate (×{searchState.rooms} {searchState.rooms === 1 ? 'room' : 'rooms'}):</span>
                          <span>£{selectedHotel.pricePerNight * searchState.rooms}</span>
                        </div>
                        {addBreakfast && (
                          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <span>Hot buffet breakfasts (×{searchState.adults} guests):</span>
                            <span>£{12 * searchState.adults}</span>
                          </div>
                        )}
                        {addFlexibleRate && (
                          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <span>Flexible rate insurance fee:</span>
                            <span>£{10 * searchState.rooms}</span>
                          </div>
                        )}
                        <hr className="border-gray-200 my-1" />
                        <div className="flex items-center justify-between text-gray-900">
                          <span className="text-xs font-bold uppercase">Estimated Total</span>
                          <span className="text-xl font-bold font-mono">£{calculateTotal(selectedHotel)}</span>
                        </div>
                      </div>

                      {/* Booking submit button */}
                      <button
                        type="submit"
                        id="btn-confirm-booking"
                        className="w-full py-3 rounded-full bg-[#fed100] hover:bg-[#ffe14d] active:bg-[#e6bd00] text-gray-950 font-sans font-extrabold text-sm uppercase tracking-widest text-center cursor-pointer transition-colors mt-6 shadow-sm"
                      >
                        Confirm Booking
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  /* Success Confirmed Receipt Screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl border border-emerald-100 p-8 shadow-xl text-center space-y-6"
                    id="booking-receipt-success"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-650">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-950 tracking-tight">
                        Booking Placed Successfully!
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        A confirmation receipt and boarding details have been dispatched to your email address.
                      </p>
                    </div>

                    {/* Booking Reference receipt number widget */}
                    <div className="bg-purple-50 rounded-2xl p-4 max-w-xs mx-auto border border-purple-100 font-mono text-center">
                      <span className="block text-[10px] text-purple-700 font-bold uppercase tracking-widest mb-1">Booking Reference</span>
                      <span className="text-lg font-bold text-[#511e62] tracking-wider uppercase">{bookingRef}</span>
                    </div>

                    {/* Summary card details */}
                    <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-150 inline-block text-left text-xs max-w-sm space-y-2 mx-auto">
                      <p className="font-bold text-gray-900 border-b pb-1.5">{selectedHotel.name}</p>
                      <div className="flex justify-between text-gray-500">
                        <span>Rooms booked:</span>
                        <span className="font-semibold text-gray-800">{searchState.rooms}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Total Paid sum:</span>
                        <span className="font-bold text-purple-950 font-mono">£{calculateTotal(selectedHotel)}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Rate structure:</span>
                        <span className="font-medium text-purple-700">{addFlexibleRate ? 'Flexible Rate' : 'Standard Rate'}</span>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={closeFullResults}
                        type="button"
                        className="px-6 py-2.5 rounded-full bg-[#511e62] hover:bg-purple-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book another stay
                      </button>
                    </div>

                  </motion.div>
                )}

              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
