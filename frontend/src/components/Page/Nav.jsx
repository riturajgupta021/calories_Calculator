import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="shadow-md fixed w-full top-3 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <img
              src="/Logo.png"
              alt="Company Logo"
              className="h-10 w-[100px] object-contain rounded-lg"
            />
          </div>

        

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-white hover:text-blue-600 transition duration-300"
            >
              About US
            </Link>
           
          </div>

          {/* Mobile Menu Button */}
         
        </div>

        {/* Mobile Menu */}
       
           

           
         
        
      </div>
    </nav>
  );
};

export default Nav;
