import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">🍄</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Ever Mushroom</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Shop</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Benefits</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Shop</a>
              <a href="#benefits" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Benefits</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Contact</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>View Cart</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;