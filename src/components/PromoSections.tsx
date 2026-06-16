import React from 'react';
import { Calendar, ChevronRight, HelpCircle, Shield, Award, Sparkles, Building2, Smile } from 'lucide-react';

interface PromoSectionsProps {
  onPlanTrip: (destination: string) => void;
}

export default function PromoSections({ onPlanTrip }: PromoSectionsProps) {
  
  const handleQuickBook = (dest: string) => {
    onPlanTrip(dest);
  };

  return (
    <div className="space-y-12">
      
      {/* SECTION 1: Standard Promos Row (2 columns large cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-150/70 pb-12" id="promo-row-1">
        
        {/* Card 1: Premier Plus rooms */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80" 
                alt="Premier Plus Room" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-purple-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow uppercase tracking-wide">
                Premium Choice
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-2">
                Premier Plus rooms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                More comfort. More convenience. More connectivity. That's our Premier Plus rooms. Just perfect if you fancy a little more from your stay. Go on, treat yourself.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button
              onClick={() => handleQuickBook('London')}
              type="button"
              className="px-6 py-2.5 rounded-full bg-[#511e62] hover:bg-[#3f164d] text-white text-sm font-bold tracking-wide shadow transition-all cursor-pointer inline-flex items-center space-x-1"
            >
              <span>Premier Plus rooms</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Food & drink */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=80" 
                alt="Food & Drink" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-yellow-500 text-gray-950 text-[10px] font-bold px-3 py-1 rounded-full shadow uppercase tracking-wide">
                Tempting Dining
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-2">
                Food & drink
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                People rave about our tempting Premier Inn Breakfast. And in the evenings, you can sit down to a mouth-watering menu of delicious dishes from our restaurant.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6">
            <button
              onClick={() => handleQuickBook('Edinburgh')}
              type="button"
              className="px-6 py-2.5 rounded-full bg-[#511e62] hover:bg-[#3f164d] text-white text-sm font-bold tracking-wide shadow transition-all cursor-pointer inline-flex items-center space-x-1"
            >
              <span>Ready to tuck in?</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

      {/* SECTION 2: Row of 3 Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-150/70 pb-12" id="promo-row-2">
        
        {/* Card 1: Family-friendly rooms */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Family friendly rooms" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5 flex items-center gap-1.5">
                <Smile className="w-4.5 h-4.5 text-purple-700" />
                <span>Family-friendly rooms</span>
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Grown-ups can get comfy in a king-size* bed, with two pull-out or sofa beds for the kids. Cots are available for babies, too.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button
              onClick={() => handleQuickBook('Manchester')}
              type="button"
              className="w-full py-2 px-4 rounded-full bg-[#511e62] hover:bg-[#3f164d] text-white text-xs font-bold tracking-wide text-center cursor-pointer transition-colors"
            >
              Family friendly
            </button>
          </div>
        </div>

        {/* Card 2: Your old mattress recycled for free */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-44 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80" 
                alt="Mattress Recycle" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Text overlay on mattress image similar to banner overlay "Start fresh with FREE mattress recycling*" */}
              <div className="absolute inset-0 bg-blue-900/60 p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#b6cf21]">Eco Initiative</span>
                <p className="text-sm font-bold text-white tracking-tight mt-0.5 leading-snug">
                  Start fresh with <span className="text-[#b6cf21]">FREE</span> mattress recycling*
                </p>
                <div className="mt-2 text-[8px] bg-yellow-400 text-gray-900 px-2 py-0.5 rounded font-extrabold max-w-max uppercase">
                  Shop now
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4.5 h-4.5 text-blue-600" />
                <span>Your old mattress recycled for free</span>
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Ready for your best sleep ever? With free mattress recycling, a bedroom upgrade has never been easier. T&Cs apply.*
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button
              type="button"
              className="w-full py-2 px-4 rounded-full bg-[#511e62] hover:bg-[#3f164d] text-white text-xs font-bold tracking-wide text-center cursor-pointer transition-colors"
            >
              Shop mattresses & beds
            </button>
          </div>
        </div>

        {/* Card 3: Premier Inn Business */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                alt="Business services" 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-4.5 h-4.5 text-purple-700" />
                <span>Premier Inn Business</span>
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Our free online booking tool gives businesses of all sizes access to a guaranteed 5% and up to 15% discount* off our Flex rate.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button
              onClick={() => handleQuickBook('Birmingham')}
              type="button"
              className="w-full py-2 px-4 rounded-full bg-[#511e62] hover:bg-[#3f164d] text-white text-xs font-bold tracking-wide text-center cursor-pointer transition-colors"
            >
              Premier Inn Business
            </button>
          </div>
        </div>

      </section>

      {/* SECTION 3: Plan your next getaway */}
      <section className="space-y-6 pb-2" id="section-getaways">
        
        {/* Section Heading */}
        <div className="border-b-2 border-purple-800 pb-2 max-w-max">
          <h3 className="font-sans font-bold text-xl md:text-2xl text-purple-950 tracking-tight">
            Plan your next getaway
          </h3>
        </div>

        {/* 4 columns list matching Page 1's circular card format */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Hiking Guide */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleQuickBook('Edinburgh')}>
            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
                alt="Hiking Guide" 
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-350"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <button
              type="button"
              className="px-5 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-800 font-sans font-bold text-xs hover:bg-[#511e62] hover:text-white hover:border-[#511e62] transition-colors md:text-sm text-center shadow-sm"
            >
              Hiking Guide
            </button>
          </div>

          {/* Card 2: Biking Guide */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleQuickBook('London')}>
            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80" 
                alt="Biking Guide" 
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-350"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <button
              type="button"
              className="px-5 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-800 font-sans font-bold text-xs hover:bg-[#511e62] hover:text-white hover:border-[#511e62] transition-colors md:text-sm text-center shadow-sm"
            >
              Biking Guide
            </button>
          </div>

          {/* Card 3: Premier Inn Germany */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleQuickBook('Cologne')}>
            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1467269204594-96e10144864c?auto=format&fit=crop&w=800&q=80" 
                alt="Premier Inn Germany" 
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-350"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <button
              type="button"
              className="px-5 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-800 font-sans font-bold text-xs hover:bg-[#511e62] hover:text-white hover:border-[#511e62] transition-colors md:text-sm text-center shadow-sm"
            >
              Premier Inn Germany
            </button>
          </div>

          {/* Card 4: Hotels in the Middle East */}
          <div className="flex flex-col items-center group cursor-pointer" onClick={() => handleQuickBook('Dubai')}>
            <div className="w-full h-40 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" 
                alt="Hotels in Palm Jumeirah" 
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-350"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <button
              type="button"
              className="px-5 py-2 w-full rounded-full border border-gray-300 bg-white text-gray-800 font-sans font-bold text-xs hover:bg-[#511e62] hover:text-white hover:border-[#511e62] transition-colors md:text-sm text-center shadow-sm"
            >
              Hotels in the Middle East
            </button>
          </div>

        </div>

      </section>

      {/* SECTION 4: Premier Inn information, news and features (3 columns matching Page 2's design) */}
      <section className="py-8 border-t border-gray-150/70 space-y-6" id="news-features">
        
        {/* Title */}
        <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
          Premier Inn information, news and features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Premier Inn news */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Premier Inn news" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5">
                  Premier Inn news
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  Want to hear all the latest updates from Premier Inn, hub and ZIP? Visit our news page to stay up to date with competitions, travel tips and more.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-full border-2 border-purple-800 text-purple-900 font-sans font-bold text-xs hover:bg-purple-100 outline-none transition-colors"
              >
                Premier Inn news
              </button>
            </div>
          </div>

          {/* Card 2: New hotels */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                  alt="New hotels facade" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5">
                  New hotels
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  From city centres to seafronts and beyond, we'll be opening new hotels in great locations throughout the year. Check out our list of latest openings!
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                onClick={() => handleQuickBook('Cologne')}
                type="button"
                className="w-full py-2 px-4 rounded-full border-2 border-purple-800 text-purple-900 font-sans font-bold text-xs hover:bg-purple-100 outline-none transition-colors"
              >
                New hotels
              </button>
            </div>
          </div>

          {/* Card 3: Committed to cleanliness */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
            <div>
              <div className="h-44 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
                  alt="Cleaning device display" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <h4 className="font-sans font-bold text-base text-gray-900 mb-1.5">
                  Committed to cleanliness
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  To make sure we keep everyone safe, we have a rigorous, daily cleaning regime - an enhanced hygiene promise we call Premier Inn CleanProtect™.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                type="button"
                className="w-full py-2 px-4 rounded-full border-2 border-purple-800 text-purple-900 font-sans font-bold text-xs hover:bg-purple-100 outline-none transition-colors"
              >
                Premier Inn CleanProtect™
              </button>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
