'use client';

import { useState } from 'react';
import SmoothLink from '../ui/SmoothLink'; // Add this import

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <SmoothLink href="#home" className="text-xl font-bold text-gray-900 hover:text-gray-700">
            Shashwat Singh Rathour
          </SmoothLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <SmoothLink href="#home" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</SmoothLink>
            <SmoothLink href="#about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</SmoothLink>
            <SmoothLink href="#projects" className="text-gray-600 hover:text-gray-900 transition duration-300">Projects</SmoothLink>
            <SmoothLink href="#contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</SmoothLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <SmoothLink href="#home" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Home</SmoothLink>
              <SmoothLink href="#about" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>About</SmoothLink>
              <SmoothLink href="#projects" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Projects</SmoothLink>
              <SmoothLink href="#contact" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Contact</SmoothLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}