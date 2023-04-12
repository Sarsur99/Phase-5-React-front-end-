import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <nav className="bg-red-300 flex justify-between h-12 w-full shadow-lg z-50">
  <div className="flex justify-start w-1/2">
    <img src={FastFoodies} className="h-12 w-15" alt="logo" />
  </div>
  <ul className="flex items-center justify-center w-1/2">
    <li>
      <Link
        to="/about"
        className="hover:text-white transition ease-in-out duration-200"
      >
        About Us
      </Link>
    </li>
    <li className="ml-4">
      <Link
        to="/restaurants"
        className="hover:text-white transition ease-in-out duration-200"
      >
        Restaurants
      </Link>
    </li>
    <li className="ml-4">
      <Link
        to="/"
        onClick={handleLogOut}
        className="hover:text-white transition ease-in-out duration-200"
      >
        Logout
      </Link>
    </li>
  </ul>
  <div className="flex items-center">
    <a
      href="https://www.linkedin.com/in/soren-sonstein-3732a4254/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center mr-2 hover:bg-gray-600"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
    </a>
    <a
      href="https://github.com/Sarsur99"
      target="_blank"
      rel="noopener noreferrer"
      className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center mr-2 hover:bg-gray-600"
    >
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
    </a>
    <a
      href="https://medium.com/@sorenisme"
      className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center hover:bg-gray-600"
    >
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="Email" />
    </a>
  </div>
</nav>

  );
};

export default Navbar;
