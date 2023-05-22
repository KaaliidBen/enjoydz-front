import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../ressources/Logo.png'; // Replace with the actual path to your logo image
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/search">search</a></li>
        <li><a href="/contact">contact us</a></li>
      </ul>
      <div classname="login-buttons">
        <Link to='/login'><button classname="login-button">Connect</button></Link>
        <Link to='/signup'><button classname="signup-button">sign up</button></Link>
      </div>
    </nav>
  );
}
export default Navbar;