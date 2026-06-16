import React, { useState } from 'react';
import { Sparkles, Tv, ShieldCheck, ShowerHead, Wifi, ChevronDown, ChevronUp } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  perks: { icon: React.ReactNode; label: string }[];
  buttonText: string;
  buttonBg: string;
  buttonTextCol: string;
}

export default function BrandCards() {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  const BRANDS: Brand[] = [
    {
      id: 'premier-inn',
      name: 'Premier Inn',
      badge: 'Classic Quality',
      badgeBg: 'bg-purple-100 text-purple-900',
      badgeText: 'Classic Comfort',
      tagline: 'Comfy, reliable, and everywhere',
      shortDesc: 'With over 800 hotels across the UK and beyond, we really are everywhere. Sleep in a super comfy bed, enjoy Freeview TV, and an en-suite bathroom with power shower.',
      longDesc: 'Our hotels offer amazing value for families, couples, and business travellers. Each room features an extra-cushy double or king-size bed, a power shower, flat screen TV with Freeview channels, and workspaces. Plus, with our Good Night Guarantee, you can rest assured you’ll get a great night’s sleep.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      perks: [
        { icon: <ShieldCheck className="w-4 h-4 text-purple-700" />, label: 'Good Night Guarantee' },
        { icon: <Tv className="w-4 h-4 text-purple-700" />, label: 'Freeview TV inside' },
      ],
      buttonText: 'Discover Premier Inn',
      buttonBg: 'bg-[#511e62] hover:bg-[#3d154b] active:bg-[#2c0e37]',
      buttonTextCol: 'text-white'
    },
    {
      id: 'hub',
      name: 'hub by Premier Inn',
      badge: 'Urban Tech',
      badgeBg: 'bg-lime-100 text-lime-900',
      badgeText: 'Smart Style',
      tagline: 'Modern, tech-focused, in city centres',
      shortDesc: 'Smart, stylish rooms across London and Edinburgh with smart control screens, fast free Wi-Fi, 40" Freeview TVs, and high-powered monsoon showers in awesome prime spots.',
      longDesc: 'Designed to maximize space, comfort and functionality. Use your bedside touch console or download our hub app to control your room’s environment, such as lighting, temperature, and TV. Superfast free Wi-Fi comes standard as well as smart under-bed storage.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      perks: [
        { icon: <ShowerHead className="w-4 h-4 text-lime-700" />, label: 'Monsoon Showers' },
        { icon: <Wifi className="w-4 h-4 text-lime-700" />, label: 'Bed App Environment Controls' },
      ],
      buttonText: 'Discover hub',
      buttonBg: 'bg-[#b6cf21] hover:bg-[#a6bd1a] active:bg-[#92a613]',
      buttonTextCol: 'text-gray-900'
    },
    {
      id: 'zip',
      name: 'ZIP by Premier Inn',
      badge: 'Minimal Budget',
      badgeBg: 'bg-pink-100 text-pink-900',
      badgeText: 'Essentials Only',
      tagline: 'Simple, neat, from just £25/night',
      shortDesc: 'Our idea is simple. Do the essentials brilliantly, then take away everything else. You get a small room, simple stay and best of all, a price to match – from £25 a night.',
      longDesc: 'Clean, clever, compact design by professional yacht designers. These rooms offer configurable single beds that slide together into a double, high-powered shower, overhead storage, and clean sheets. Optional add-ons like room cleaning and streaming TV are selectable so you only pay for what you actually use.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
      perks: [
        { icon: <Sparkles className="w-4 h-4 text-pink-600" />, label: 'Slide-to-Double Beds' },
        { icon: <ShieldCheck className="w-4 h-4 text-pink-600" />, label: 'Super Low Base Rates' },
      ],
      buttonText: 'Discover ZIP',
      buttonBg: 'bg-[#ff0055] hover:bg-[#e6004d] active:bg-[#cc0044]',
      buttonTextCol: 'text-white'
    }
  ];

  const toggleExpand = (id: string) => {
    if (expandedBrand === id) {
      setExpandedBrand(null);
    } else {
      setExpandedBrand(id);
    }
  };

  return (
    <div className="py-12 border-b border-gray-100" id="discover-our-hotels">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 tracking-tight">
          Discover our hotels
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Explore our tailored experiences matching your space and budget needs perfectly.
        </p>
      </div>

      {/* Grid of Brand Cards (3 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map((brand) => {
          const isExpanded = expandedBrand === brand.id;
          return (
            <div 
              key={brand.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group.parent"
              id={`brand-card-${brand.id}`}
            >
              {/* Image Section */}
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase ${brand.badgeBg}`}>
                  {brand.badgeText}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-gray-900 tracking-tight">
                    {brand.name}
                  </h3>
                  
                  <div className="space-y-2 mt-2 text-sm text-gray-600 leading-relaxed min-h-[85px]">
                    <p>{brand.shortDesc}</p>
                    {isExpanded && (
                      <p className="animate-fade-in text-gray-500 bg-gray-50 p-2.5 rounded-lg border-l-2 border-purple-300">
                        {brand.longDesc}
                      </p>
                    )}
                  </div>

                  {/* Show More toggle link */}
                  <button
                    onClick={() => toggleExpand(brand.id)}
                    type="button"
                    className="mt-3 flex items-center space-x-1 text-purple-700 text-xs font-bold hover:text-purple-900 active:text-purple-950 transition-colors"
                  >
                    <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Highlights perks list */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {brand.perks.map((perk, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[11px] font-semibold text-gray-600"
                      >
                        {perk.icon}
                        <span>{perk.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA pill Button */}
                <div className="mt-6">
                  <button
                    type="button"
                    className={`w-full py-2.5 px-4 rounded-full font-sans font-bold text-sm tracking-wide shadow-sm cursor-pointer transition-colors ${brand.buttonBg} ${brand.buttonTextCol}`}
                  >
                    {brand.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
