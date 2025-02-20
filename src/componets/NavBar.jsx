import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link> 
        <Link to="/meet">Meet The Team</Link>
        <Link to="/signup">Sign Up</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
