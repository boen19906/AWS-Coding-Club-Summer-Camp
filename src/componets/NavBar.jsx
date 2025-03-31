import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="DevQuest Camp" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link> 
        <Link to="/meet">Meet The Team</Link>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLScMeZJtDlrKpl_VkCrvmLamIXm54-BAkQaak4EWFll94_oVig/viewform?usp=sharing" className="signup-button">Sign Up Today!</Link>
      </div>
    </nav>
  );
};

export default Navbar;