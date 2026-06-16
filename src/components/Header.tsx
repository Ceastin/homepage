import React, { useState } from 'react';
import { Menu, X, Globe, LogIn, UserPlus, BookOpen, Briefcase, Calendar } from 'lucide-react';
import Logo from './Logo';
import premierLogo from '../assets/newPILogo.png';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Elegant inline SVG for the UK Flag
  const UKFlag = () => (
    <svg className="w-5 h-5 rounded-full object-cover border border-purple-300 shadow-sm" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="uk-clip">
        <circle cx="30" cy="15" r="15" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0 V30 M0 15 H60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );

  return (
    <header className="w-full text-white py-4 px-4 md:px-8 bg-transparent relative z-30">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div
          className="flex items-center cursor-pointer group"
          id="header-logo"
        >
          <img
            src={premierLogo}
            alt="Premier Inn"
            className="h-10 md:h-12 w-auto transition-opacity duration-200 group-hover:opacity-95"
          />
        </div>

        {/* Desktop Navbar Items */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans font-medium text-sm">
          {/* UK Flag dropdown placeholder */}
          <div className="flex items-center space-x-1.5 cursor-pointer hover:text-purple-200 transition-colors py-1.5" id="nav-lang">
            <UKFlag />
            <span className="text-xs">EN</span>
          </div>

          <a href="#discover" className="hover:text-purple-200 transition-colors py-1.5 border-b-2 border-transparent hover:border-white/50 duration-200" id="nav-discover">
            Discover Premier Inn
          </a>
          <a href="#business" className="hover:text-purple-200 transition-colors py-1.5 border-b-2 border-transparent hover:border-white/50 duration-200" id="nav-business">
            Business
          </a>
          <a href="#manage-booking" className="hover:text-purple-200 transition-colors py-1.5 border-b-2 border-transparent hover:border-white/50 duration-200" id="nav-manage">
            Manage booking
          </a>
        </nav>

        {/* Desktop Access Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            type="button" 
            id="btn-login-desktop"
            className="px-6 py-2 rounded-full border border-white text-white text-sm font-semibold hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer shadow-sm"
          >
            Log in
          </button>
          <button 
            type="button" 
            id="btn-signup-desktop"
            className="px-6 py-2 rounded-full bg-white text-[#511e62] text-sm font-bold hover:bg-purple-100 active:bg-purple-200 transition-all cursor-pointer shadow-md"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <div className="flex items-center space-x-1 border border-white/20 rounded-full px-2.5 py-1 bg-white/5">
            <UKFlag />
            <span className="text-xs font-semibold">EN</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button"
            className="p-1.5 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle Menu"
            id="btn-hamburger"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#3c1053] border-b border-purple-950/40 p-5 shadow-2xl flex flex-col space-y-4 lg:hidden z-40 animate-fade-in-down" id="mobile-drawer">
          <a
            href="#discover"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
          >
            <BookOpen className="w-4 h-4 text-purple-300" />
            <span>Discover Premier Inn</span>
          </a>
          <a
            href="#business"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
          >
            <Briefcase className="w-4 h-4 text-purple-300" />
            <span>Business Solutions</span>
          </a>
          <a
            href="#manage-booking"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
          >
            <Calendar className="w-4 h-4 text-purple-300" />
            <span>Manage business/booking</span>
          </a>

          <hr className="border-white/10 my-1" />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              id="btn-login-mobile"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full border border-white text-white text-xs font-semibold hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Log in</span>
            </button>
            <button
              type="button"
              id="btn-signup-mobile"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-white text-[#511e62] text-xs font-bold hover:bg-purple-100 active:bg-purple-200 transition-all cursor-pointer shadow-sm"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign up</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
