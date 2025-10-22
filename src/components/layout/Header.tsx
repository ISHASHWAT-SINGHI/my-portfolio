'use client';

import { useState } from 'react';
import SmoothLink from '../ui/SmoothLink';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <SmoothLink href="#home" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-300">
            Shashwat Singh
          </SmoothLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <SmoothLink href="#home" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300">Home</SmoothLink>
            <SmoothLink href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300">About</SmoothLink>
            <SmoothLink href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300">Projects</SmoothLink>
            <SmoothLink href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-300">Contact</SmoothLink>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="flex flex-col space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
              <span className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
              <span className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <SmoothLink href="#home" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Home</SmoothLink>
              <SmoothLink href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>About</SmoothLink>
              <SmoothLink href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Projects</SmoothLink>
              <SmoothLink href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2" onClick={() => setIsMenuOpen(false)}>Contact</SmoothLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}