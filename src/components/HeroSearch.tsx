import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, Search, X, Check, HelpCircle } from 'lucide-react';
import { SearchState } from '../types';

interface HeroSearchProps {
  onSearch: (state: SearchState) => void;
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}

const POPULAR_DESTINATIONS = [
  { name: 'London', country: 'United Kingdom', tag: 'Top Choice' },
  { name: 'Edinburgh', country: 'Scotland', tag: 'Highly Rated' },
  { name: 'Manchester', country: 'United Kingdom', tag: 'Business Hub' },
  { name: 'Birmingham', country: 'United Kingdom', tag: 'Central' },
  { name: 'Cologne', country: 'Germany', tag: 'Popular International' },
  { name: 'Dubai', country: 'United Arab Emirates', tag: 'Luxury Stay' },
];

export default function HeroSearch({ onSearch, searchState, setSearchState }: HeroSearchProps) {
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const destRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  // Close dropdowns of click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (destRef.current && !destRef.current.contains(event.target as Node)) {
        setShowDestDropdown(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
        setShowGuestDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectDest = (city: string) => {
    setSearchState((prev) => ({ ...prev, destination: city }));
    setShowDestDropdown(false);
  };

  const handleAdultChange = (val: number) => {
    const updated = Math.max(1, Math.min(10, searchState.adults + val));
    setSearchState((prev) => ({ ...prev, adults: updated }));
  };

  const handleRoomChange = (val: number) => {
    const updated = Math.max(1, Math.min(5, searchState.rooms + val));
    setSearchState((prev) => ({ ...prev, rooms: updated }));
  };

const executeSearch = (e: React.FormEvent) => {
  e.preventDefault();

  const destination = searchState.destination.trim().toLowerCase();

  if (destination?.toLowerCase() === 'birmingham') {
    window.location.href = 'https://premiereclass-3ktb.vercel.app/';
    return;
  }
};

  return (
    <div className="w-full text-white pt-8 pb-12 px-4 md:px-8 max-w-[1200px] mx-auto z-20 relative">
      {/* Search Header Banner */}
      <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight text-white mb-8" id="search-heading">
        Get a great night's sleep
      </h1>

      {/* Primary search bar wrapper */}
      <form onSubmit={executeSearch} className="w-full bg-white text-gray-800 rounded-2xl md:rounded-xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden border border-purple-950/20" id="search-booking-form">
        
        {/* Step 1: Destination input */}
        <div ref={destRef} className="flex-1 border-b md:border-b-0 md:border-r border-gray-200/80 px-4 py-3.5 relative hover:bg-purple-50/20 active:bg-purple-100/20 transition-all cursor-pointer" onClick={() => setShowDestDropdown(true)}>
          <div className="flex items-center space-x-3 h-full">
            <MapPin className="w-5 h-5 text-purple-700 shrink-0" />
            <div className="flex-1">
              <span className="block text-[11px] font-bold text-purple-900 tracking-wider uppercase">Destination</span>
              <input
                type="text"
                value={searchState.destination}
                onChange={(e) => setSearchState((prev) => ({ ...prev, destination: e.target.value }))}
                placeholder="Where are you going?"
                id="input-destination"
                className="w-full font-sans text-sm md:text-base font-semibold text-gray-850 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-transparent cursor-pointer"
              />
            </div>
            {searchState.destination && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchState((prev) => ({ ...prev, destination: '' }));
                }}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Autocomplete suggestions popup */}
          {showDestDropdown && (
            <div className="absolute top-full left-0 w-full md:w-[350px] bg-white border border-gray-200 shadow-2xl rounded-xl p-4 mt-2 z-50 animate-fade-in text-gray-800" id="dest-dropdown">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Popular Searches</span>
                <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-bold">UK & Beyond</span>
              </div>
              <div className="space-y-1">
                {POPULAR_DESTINATIONS.filter(item => 
                  !searchState.destination || item.name.toLowerCase().includes(searchState.destination.toLowerCase())
                ).map((dest) => (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => handleSelectDest(dest.name)}
                    className="w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 active:bg-purple-100 transition-all"
                  >
                    <div className="flex items-center space-x-2.5">
                      <MapPin className="w-4 h-4 text-purple-500" />
                      <div>
                        <div className="text-sm font-semibold text-gray-850">{dest.name}</div>
                        <div className="text-xs text-gray-400">{dest.country}</div>
                      </div>
                    </div>
                    {dest.tag && (
                      <span className="text-[9px] text-[#511e62] bg-purple-100/50 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        {dest.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Date Picker placeholder simulation (interactive) */}
        <div ref={dateRef} className="flex-1 border-b md:border-b-0 md:border-r border-gray-200/80 px-4 py-3.5 relative hover:bg-purple-50/20 active:bg-purple-100/20 transition-all cursor-pointer" onClick={() => setShowDateDropdown(true)}>
          <div className="flex items-center space-x-3 h-full">
            <Calendar className="w-5 h-5 text-purple-700 shrink-0" />
            <div className="flex-1">
              <span className="block text-[11px] font-bold text-purple-900 tracking-wider uppercase">Dates</span>
              <span className="block font-sans text-sm md:text-base font-semibold text-gray-850" id="txt-selected-dates">
                {searchState.checkInDate ? `${searchState.checkInDate} → ${searchState.checkOutDate}` : 'Today | Tomorrow'}
              </span>
            </div>
          </div>

          {/* Calendar popup selection dialog */}
          {showDateDropdown && (
            <div className="absolute top-full left-0 w-full md:w-[320px] bg-white border border-gray-200 shadow-2xl rounded-xl p-4 mt-2 z-50 text-gray-800" id="date-dropdown">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Select Room Dates</span>
                <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-bold">1 Night default</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Check-In</label>
                  <input
                    type="date"
                    value={searchState.checkInDate}
                    onChange={(e) => setSearchState(prev => ({ ...prev, checkInDate: e.target.value }))}
                    className="w-full text-xs font-semibold p-1.5 border border-gray-200 rounded focus:border-purple-500 outline-none mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase">Check-Out</label>
                  <input
                    type="date"
                    value={searchState.checkOutDate}
                    onChange={(e) => setSearchState(prev => ({ ...prev, checkOutDate: e.target.value }))}
                    className="w-full text-xs font-semibold p-1.5 border border-gray-200 rounded focus:border-purple-500 outline-none mt-1"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSearchState(prev => ({
                      ...prev,
                      checkInDate: '2026-06-16',
                      checkOutDate: '2026-06-17'
                    }));
                  }}
                  className="text-[10px] text-purple-700 font-bold hover:underline"
                >
                  Reset To Today
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDateDropdown(false);
                  }}
                  className="bg-[#511e62] text-white px-3 py-1 rounded text-xs font-bold hover:bg-purple-900 active:bg-purple-950 flex items-center space-x-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Done</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 3: Occupants / Guests counter */}
        <div ref={guestRef} className="flex-1 px-4 py-3.5 relative hover:bg-purple-50/20 active:bg-purple-100/20 transition-all cursor-pointer" onClick={() => setShowGuestDropdown(true)}>
          <div className="flex items-center space-x-3 h-full">
            <Users className="w-5 h-5 text-purple-700 shrink-0" />
            <div className="flex-1">
              <span className="block text-[11px] font-bold text-purple-900 tracking-wider uppercase">Guests & Rooms</span>
              <span className="block font-sans text-sm md:text-base font-semibold text-gray-850" id="txt-guests">
                {searchState.adults} {searchState.adults === 1 ? 'adult' : 'adults'}, {searchState.rooms} {searchState.rooms === 1 ? 'room' : 'rooms'}
              </span>
            </div>
          </div>

          {/* Interactive Guest Count popup */}
          {showGuestDropdown && (
            <div className="absolute top-full right-0 w-full md:w-[280px] bg-white border border-gray-200 shadow-2xl rounded-xl p-4 mt-2 z-50 text-gray-800" id="guest-dropdown">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Adjust Party Size</span>
                <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-bold">Max 10 Adults</span>
              </div>
              <div className="space-y-4">
                {/* Adults counter */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-semibold text-gray-800">Adults</span>
                    <span className="text-[10px] text-gray-400">Ages 16+</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={searchState.adults <= 1}
                      onClick={(e) => { e.stopPropagation(); handleAdultChange(-1); }}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold hover:bg-purple-50 hover:border-purple-600 disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      -
                    </button>
                    <span className="w-4 text-center font-semibold text-sm">{searchState.adults}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleAdultChange(1); }}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold hover:bg-purple-50 hover:border-purple-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Rooms counter */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-semibold text-gray-800">Rooms</span>
                    <span className="text-[10px] text-gray-400">Total rooms needed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={searchState.rooms <= 1}
                      onClick={(e) => { e.stopPropagation(); handleRoomChange(-1); }}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold hover:bg-purple-50 hover:border-purple-600 disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      -
                    </button>
                    <span className="w-4 text-center font-semibold text-sm">{searchState.rooms}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleRoomChange(1); }}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold hover:bg-purple-50 hover:border-purple-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-purple-400" />
                  Need cot/kids bed?
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowGuestDropdown(false);
                  }}
                  className="bg-[#511e62] text-white px-3 py-1 rounded text-xs font-bold hover:bg-purple-900 active:bg-purple-950 flex items-center space-x-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Apply</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 4: Heavy yellow search button */}
        <button
          type="submit"
          id="btn-search-submit"
          className="bg-[#fed100] text-gray-900 py-4 px-8 font-sans font-bold text-sm lg:text-base tracking-widest hover:bg-[#ffe14d] active:bg-[#e6bd00] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md uppercase min-w-[150px]"
        >
          <Search className="w-5 h-5 text-gray-900" />
          <span>Search</span>
        </button>

      </form>

      {/* Best price guarantee anchor link */}
      <div className="mt-4 flex items-center space-x-2 text-xs md:text-sm text-yellow-300 font-sans font-bold hover:opacity-90 active:opacity-100 transition-opacity cursor-pointer inline-flex">
        <Search className="w-4 h-4" />
        <span className="underline">Explore our best prices</span>
      </div>
    </div>
  );
}
