
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import FastFoodies from './img/FastFoodies.png';

const Navbar = () => {
    const handleLogOut = () => {
      fetch('http://localhost:3000/logout', {
        method: 'DELETE'
      }).then(res => {
        if (res.ok) {
          console.log('User logged out');
        }
      });
    };
  
    useEffect(() => {
  
    }, []);
  
    return (
      <nav className="bg-red-300 flex justify-between h-12 w-full shadow-lg z-50">
        <div className="flex justify-start w-1/2">
          <img src={FastFoodies} className="h-12 w-15" alt="logo" />
        </div>
        <ul className="flex items-center w-1/2 justify-end">
          <li>
            <Link to="/about" className="hover:text-white transition ease-in-out duration-200">About Us</Link>
          </li>
          <li className="ml-4">
            <Link to="/restaurants"  className="hover:text-white transition ease-in-out duration-200">Restaurants</Link>
          </li>
          <li className="ml-4">
            <Link to="/" onClick={handleLogOut} className="hover:text-white transition ease-in-out duration-200">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;

  