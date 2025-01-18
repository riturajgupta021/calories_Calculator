import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <img
              src="public/Logo.png"
              alt="Company Logo"
              className="h-10 w-[100px] object-contain rounded-lg"
            />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for dishes..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
              About
            </a>
            <div className="relative">
              <a href="/cart" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                <ShoppingCart className="h-6 w-6 mr-2" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white shadow-md border-t border-gray-200">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for dishes..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a
                href="/about"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300"
              >
                About
              </a>
              <a
                href="/cart"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-300"
              >
                Cart {cartCount > 0 && `(${cartCount})`}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;