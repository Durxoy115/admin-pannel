import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-lg font-bold">
        <img
          src="https://via.placeholder.com/150x50" // Replace with your logo URL
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 bg-gray-100 focus:outline-none rounded-l-lg"
        />
        <button className="text-gray-500 px-3 hover:text-gray-700">
          🔍
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-500 transition duration-200"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Services
        </Link>
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-blue-500">
          🔔
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Placeholder avatar
            alt="Avatar"
            className="rounded-full h-10 w-10"
          />
          <span className="font-semibold text-gray-800">Durjoy</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
