import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Home Link */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg" // Replace with your logo path
              alt="Listing App Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow justify-center mx-4">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Start your search here..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* User Options */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors hidden md:block">Sign In</a>
          <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 transition-colors">Sign Up</a>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="hidden md:block border-t border-gray-200">
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-8 text-gray-600">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Rooms</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Mansion</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Countryside</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Beachfront</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Lakefront</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;