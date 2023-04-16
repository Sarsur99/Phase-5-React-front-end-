import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import FastFoodies from "./img/FastFoodies.png";

const Navbar = () => {
  const handleLogOut = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log("User logged out");
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ml-2">
            <img
              className="h-12 w-auto"
              src={FastFoodies}
              alt="FastFoodies Logo"
            />
          </div>
          <div className="hidden md:flex md:items-center md:ml-6">
            <Link
              to="/restaurants"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Restaurants
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/"
              onClick={handleLogOut}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/soren-sonstein-3732a4254/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-2 hover:bg-gray-600"
            >
              <FaLinkedin color="white" size={20} />
            </a>
            <a
              href="https://github.com/Sarsur99"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-2 hover:bg-gray-600"
            >
              <FaGithub color="white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
