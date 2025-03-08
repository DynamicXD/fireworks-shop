import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import CartIcon from "./CartIcon"; // Import the CartIcon component
import { CalendarIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons from Heroicons

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-[#f5f1eb]/30 dark:bg-[#101828]/30 shadow-lg z-50 border-b border-white/20 dark:border-gray-700/20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-800 dark:text-white text-2xl font-bold hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
            >
              Fireworks Shop
            </Link>
          </div>

          {/* Events and Cart icons (visible on small screens) */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Link
              to="/events"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
            >
              <CalendarIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300"
            >
              <CartIcon className="h-6 w-6" />
              {cartCount > 0 && ( // Conditionally render the badge
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Hamburger Menu Icon (visible on small screens) */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" /> // Close icon
              ) : (
                <Bars3Icon className="h-6 w-6" /> // Hamburger icon
              )}
            </button>
          </div>

          {/* Menus in the center (visible on larger screens) */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link
              to="/"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/fireworks"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 relative group"
            >
              Fireworks
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/bundles"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 relative group"
            >
              Bundles
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/planner"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 relative group"
            >
              Planner
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 relative group"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 h-0.5 bg-gray-800 dark:bg-white w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Events and Cart buttons on the right (visible on larger screens) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/events" // Navigate to the Events Page
              className="bg-transparent text-gray-800 dark:text-white px-4 py-2 rounded-md border-2 border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition duration-300 flex items-center"
            >
              <CalendarIcon className="h-6 w-6 mr-2" /> {/* Calendar Icon */}
              Events
            </Link>
            <Link
              to="/cart" // Navigate to the Cart Page
              className="relative bg-transparent text-gray-800 dark:text-white px-4 py-2 rounded-md border-2 border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition duration-300 flex items-center group"
            >
              <CartIcon className="h-6 w-6 mr-2 transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-white" />
              Cart
              {cartCount > 0 && ( // Conditionally render the badge
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Blurred Background and Drawer */}
      {isMenuOpen && (
        <>
          {/* Blurred Background (covers the entire page) */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Drawer with Slide Animation */}
          <div
            className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-[#f5f1eb] dark:bg-[#101828] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="container mx-auto px-6 py-4">
              {/* Close Button with Hover Effect */}
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-300"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items with Hover Effects */}
              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  to="/"
                  className="text-gray-800 dark:text-white hover:bg-[#dcc7ad] dark:hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/fireworks"
                  className="text-gray-800 dark:text-white hover:bg-[#dcc7ad] dark:hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Fireworks
                </Link>
                <Link
                  to="/bundles"
                  className="text-gray-800 dark:text-white hover:bg-[#dcc7ad] dark:hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Bundles
                </Link>
                <Link
                  to="/planner"
                  className="text-gray-800 dark:text-white hover:bg-[#dcc7ad] dark:hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Planner
                </Link>
                <Link
                  to="/contact-us"
                  className="text-gray-800 dark:text-white hover:bg-[#dcc7ad] dark:hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;