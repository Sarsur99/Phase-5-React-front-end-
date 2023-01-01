import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

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
      <nav className="bg-red-600 flex justify-end h-12 w-full">
        <ul className="flex items-center w-1/2 justify-end">
          <li>
            <Link to="/about" className="hover:text-white transition ease-in-out duration-200">About Us</Link>
          </li>
          <li className="ml-4">
            <Link to="/" onClick={handleLogOut} className="hover:text-yellow-500 transition ease-in-out duration-200">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;