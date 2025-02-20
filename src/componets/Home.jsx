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
            At AWSCC, we believe coding education should be available for ALL at no cost
            .
          </p>
          <Link to="/about" className="btn">About the Camp</Link>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>
            OUR <span>MISSION</span>
          </h2>
          <p>
            Giving back to our community by sharing our skillls in Unity game Development
            with youth ages 9-14 for FREE. This is our IB CAS (Community, Activity, and Service) Project! 
          </p>
          <Link to="/meet" className="btn">Meet The Team</Link>
        </div>
        <img src="summercampkids.jpg" alt="Kids enjoying activities" />
      </section>
    </div>
  );
};

export default HomePage;
