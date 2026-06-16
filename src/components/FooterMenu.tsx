import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Share2, Youtube, Instagram, Facebook } from 'lucide-react';

// Custom inline SVG icons for social media
const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.88-.5-4.13-1.25-.13.91-.44 1.81-.97 2.57-.01 4.38.01 8.76-.01 13.14-1.12.75-2.5 1.13-3.84 1.12-2.51.05-5.06-1.07-6.27-3.26-1.55-2.61-1.01-6.19 1.25-8.2 1.64-1.52 4.14-1.89 6.16-1.09.02-1.43.01-2.86.01-4.29-2.31-.29-4.6-.29-6.9 0v-4.3c2.76-.28 5.51-.28 8.27 0l.1-.03z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function FooterMenu() {
  const [activeTab, setActiveTab] = useState<'about' | 'city' | 'summer' | 'winter' | 'business'>('about');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const TABS_CONTENT = {
    about: {
      text: "Is it our comfy beds, our seriously tasty food, our great value hotels or our amazing teams that guests love so much? We reckon it's a bit of everything. Take a look around to find out why we're a much-loved, award-winning hotel chain, and rest easy knowing our range of rates give you both choice and flexibility.",
    },
    city: {
      text: "Explore spectacular urban adventures across Britain! From the dazzling theater stages of Central London and historical castles of Edinburgh to the thriving musical heritage of Liverpool and Manchester, our clean city hotels keep you steps from the absolute best sightseeing.",
    },
    summer: {
      text: "Ready for coastal sunshine? Discover our beautiful seaside resorts and beachfront getaways. Enjoy unlimited full English breakfast, flexible bookings, and comfy premium mattresses after a fun-filled day out exploring coastal sandy beaches and parks.",
    },
    winter: {
      text: "Cozy up during frosty dates in warm, peaceful sanctuaries. Discover scenic alpine sights in Germany or explore historic cities surrounded by beautiful winter festive markets. Feel safe with our Good Night Guarantee and warm hot cocoa at on-site restaurants.",
    },
    business: {
      text: "Unlock massive savings of 5% to 15% guaranteed on business hotel bookings. Our smart portal enables team managers to track expenses, manage schedules, and coordinate multiple rooms anywhere in the UK with dedicated business support round the clock.",
    },
  };

  const FOOTER_COLUMNS = [
    {
      title: 'Get in touch',
      links: ['Contact us', 'FAQs', 'Group bookings', 'Affiliates', 'International development', 'Careers'],
    },
    {
      title: 'Legal',
      links: ['Terms and conditions', 'Terms of use', 'Privacy policy', 'Cookies notice', 'Good Night Guarantee', 'Modern Slavery Act statement'],
    },
    {
      title: 'Locations',
      links: ['Hotel directory', 'New hotels', 'Local guides', 'Short breaks', 'Hotels in Germany', 'Dubai and beyond'],
    },
    {
      title: 'Our hotels',
      links: ['Our rooms', 'Family friendly', 'Sleep', 'Food & drink', 'hub by Premier Inn', 'ZIP by Premier Inn'],
    },
    {
      title: 'Find out more',
      links: ['About us', 'News', 'GOSH Charity', 'Force for Good', 'Disabled access'],
    },
    {
      title: 'Everything else',
      links: ['Our rates', 'Offers', 'Buy our bed', 'Mobile apps', 'We value difference', 'Sitemap'],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter an email address.');
      return;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-[1280px] mx-auto bg-white rounded-t-3xl md:rounded-t-[40px] rounded-b-none shadow-2xl overflow-hidden mb-0 pt-10 pb-16 border border-gray-100 border-b-0 mt-auto" id="footer-container">
      
      {/* 1. Tabbed info box */}
      <div className="px-6 md:px-12">
        <div className="flex flex-wrap bg-gray-50/80 border border-gray-200 rounded-xl md:rounded-2xl p-1.5 gap-1" id="footer-tabs">
          {(['about', 'city', 'summer', 'winter', 'business'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`px-5 py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#511e62] text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-900 hover:bg-purple-100/40'
              }`}
            >
              <span className="capitalize">{tab === 'about' ? 'About us' : tab === 'city' ? 'City breaks' : tab === 'summer' ? 'Summer breaks' : tab === 'winter' ? 'Winter breaks' : 'Business'}</span>
            </button>
          ))}
        </div>

        {/* Tab display text panel */}
        <div className="py-5 px-1 min-h-[90px] animate-fade-in text-gray-650 text-xs md:text-sm leading-relaxed" id="footer-tab-content">
          <p className="font-sans font-normal text-gray-600">{TABS_CONTENT[activeTab].text}</p>
        </div>
      </div>

      <hr className="border-gray-200 my-4 px-6 md:px-12" />

      {/* 2. Structured Link Columns Grid */}
      <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-6" id="footer-links-grid">
        {FOOTER_COLUMNS.map((col, idx) => (
          <div key={idx} className="space-y-3.5">
            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest border-l-2 border-purple-800 pl-2">
              {col.title}
            </h4>
            <ul className="space-y-2 text-xs text-gray-550">
              {col.links.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="hover:text-purple-800 transition-colors hover:underline block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-gray-200 my-4" />

      {/* 3. Newsletter and Social Media segment */}
      <div className="px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 pt-4" id="footer-actions">
        
        {/* Newsletter form with email check validation */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold text-gray-850 mb-3" id="signup-tagline">
            Get #PremierInnspiration, short break ideas and much more delivered straight to your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                  setErrorMsg('');
                }}
                disabled={submitted}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none leading-relaxed text-gray-850 disabled:bg-gray-100 disabled:text-gray-400"
              />
              {submitted && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-green-600 text-xs font-bold gap-1 mt-[1px]">
                  <Check className="w-4 h-4" />
                  <span>Success</span>
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={submitted}
              id="btn-subscribe"
              className="py-2.5 px-6 rounded-lg bg-[#511e62] hover:bg-purple-900 active:bg-purple-950 font-sans font-bold text-xs uppercase tracking-wider text-white shadow-sm cursor-pointer transition-colors disabled:bg-purple-950"
            >
              Sign up
            </button>
          </form>

          {errorMsg && (
            <p className="text-red-500 font-semibold text-xs mt-2 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}
        </div>

        {/* Brand identity copyright and social icons */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 border-gray-100 pt-6 lg:pt-0">
          <span className="text-xs text-gray-450 font-medium">
            © 2026 Premier Inn. All rights reserved.
          </span>
          
          <div className="flex items-center space-x-3 text-purple-900" id="social-container">
            <a href="#tiktok" aria-label="TikTok" className="w-9 h-9 p-2 rounded-full border border-purple-100 hover:bg-purple-100 text-purple-900 active:bg-purple-200 flex items-center justify-center transition-colors">
              <TikTokIcon />
            </a>
            <a href="#instagram" aria-label="Instagram" className="w-9 h-9 p-2 rounded-full border border-purple-100 hover:bg-purple-100 text-purple-900 active:bg-purple-200 flex items-center justify-center transition-colors">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="#twitter" aria-label="X Twitter" className="w-9 h-9 p-2 rounded-full border border-purple-100 hover:bg-purple-100 text-purple-900 active:bg-purple-200 flex items-center justify-center transition-colors">
              <XIcon />
            </a>
            <a href="#facebook" aria-label="Facebook" className="w-9 h-9 p-2 rounded-full border border-purple-100 hover:bg-purple-100 text-purple-900 active:bg-purple-200 flex items-center justify-center transition-colors">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="w-9 h-9 p-2.5 rounded-full border border-purple-100 hover:bg-purple-100 text-purple-900 active:bg-purple-200 flex items-center justify-center transition-colors">
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
