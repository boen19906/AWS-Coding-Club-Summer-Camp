import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">

      {/* Hero Section with Background Image */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            WELCOME TO <span>AWSCC Free Summer Camps!</span>
          </h1>
          <p>
            At AWSCC, we believe coding education should be available for all at no cost
            .
          </p>
          <Link to="/signup" className="btn">Sign Up Now!</Link>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>
            OUR <span>MISSION</span>
          </h2>
          <p>
            Providing extensive Unity Game development education for kids ages 9-14. Our world-class insructors 
            have passion for teaching and sharing our skills at no cost providing the community this essential service.
          </p>
          <Link to="/about" className="btn">About Us</Link>
        </div>
        <img src="summercampkids.jpg" alt="Kids enjoying activities" />
      </section>
    </div>
  );
};

export default HomePage;
