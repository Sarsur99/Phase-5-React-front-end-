import React, { useState } from 'react';
import Login from './Login';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './About';
import Page from './components/Restaurant/Page';
import Restaurants from './components/Restaurants/Restaurants';
// import Restaurant from './components/Restaurants/Restaurant';
import Navbar from './Navbar';
import About from './About';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  if (!isLoggedIn && localStorage.getItem('isLoggedIn')) {
    setIsLoggedIn(true);
  }

  const WithNavbar = (props) => {
    return (
      <>
        <div>
        { isLoggedIn && <Navbar /> }
        <Routes>
          <Route exact path="/" element={<Login onLogin={handleLogin}/>}/>
          {/* <Route path="/welcome" element={<Home isLoggedIn={isLoggedIn}/>}/> */}
          <Route path="/restaurants/:slug" element={<Page/>} />
          <Route path="/restaurants" element={<Restaurants/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <WithNavbar isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;