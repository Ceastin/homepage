import React, { useState } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import PromoSections from './components/PromoSections';
import BrandCards from './components/BrandCards';
import FooterMenu from './components/FooterMenu';
import SearchResultsModal from './components/SearchResultsModal';
import { SearchState } from './types';

export default function App() {
  const [searchState, setSearchState] = useState<SearchState>({
    destination: '',
    checkInDate: '2026-06-21',
    checkOutDate: '2026-06-22',
    adults: 1,
    rooms: 1,
  });

  const [isResultsOpen, setIsResultsOpen] = useState(false);

  // Trigger search from Hero search bar
  const handleSearchExecute = (state: SearchState) => {
    setSearchState(state);
    setIsResultsOpen(true);
  };

  // Trigger quick planning getaway click selection
  const handleQuickPlan = (destinationName: string) => {
    setSearchState((prev) => ({
      ...prev,
      destination: destinationName,
    }));
    setIsResultsOpen(true);
  };

  return (
    <div className="pagewrap-bg min-h-screen text-gray-800 flex flex-col justify-start relative select-none">
      
      {/* 1. Brand Header */}
      <Header />

      {/* 2. Brand Hero Landing Page search section */}
      <HeroSearch 
        onSearch={handleSearchExecute} 
        searchState={searchState} 
        setSearchState={setSearchState} 
      />

      {/* 3. Comfy white Rounded Overlay Container for All Brand Highlights / Content */}
      <main className="w-[calc(100%-3.5rem)] md:w-[calc(100%-5.5rem)] max-w-[1140px] mx-auto bg-white rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden border border-gray-150 mb-10 md:mb-14">
        
        {/* Padding wrappers */}
        <div className="px-6 md:px-12 pt-10 md:pt-14 pb-12 md:pb-16 space-y-12">
          
          {/* Row of core Promos & getaway cards */}
          <PromoSections onPlanTrip={handleQuickPlan} />

          {/* Three core Premier brand variations detail cards */}
          <BrandCards />

        </div>

      </main>

      {/* 4. Content Tabs, link list Columns, newsletter and social handles footer (freestanding card) */}
      <FooterMenu />

      {/* 5. Dynamic search booking engine popup result view overlay dialog */}
      <SearchResultsModal 
        isOpen={false} 
        onClose={() => setIsResultsOpen(false)} 
        searchState={searchState} 
      />

    </div>
  );
}
