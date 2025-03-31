import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaDatabase, FaReact, FaClock} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <header className="about-hero">
        <div className="hero-content">
          <h1>ABOUT <span>DEVQUEST CAMP</span></h1>
          <div className="hero-tagline">
            <p>Learn web development, programming, and design — FREE and FUN!</p>
          </div>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScMeZJtDlrKpl_VkCrvmLamIXm54-BAkQaak4EWFll94_oVig/viewform?usp=sharing" className="btn primary-btn">Secure Your Spot</Link>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="content-container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-heading">
            <h2>OUR <span>MISSION</span></h2>
            <div className="heading-underline"></div>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Our mission is to provide a fun, engaging opportunity 
                for students to get involved in React web development 
                <strong> completely FREE of charge</strong>. 
              </p>
              <p>
                We believe that web development is a perfect way to introduce 
                young minds to coding, problem-solving, and creative thinking. 
                By removing financial barriers, we hope to make technology 
                education accessible to all interested students in the community.
              </p>
            </div>
            <div className="mission-image">
              <img src="/mission-image.jpg" alt="Students working on game development" />
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="activities-section">
  <div className="section-heading">
    <h2>WHAT TO <span>EXPECT</span></h2>
    <div className="heading-underline"></div>
  </div>
  <div className="activities-grid">
    <div className="activity-card">
      <div className="activity-icon"><FaCode /></div>
      <h3>Front-End Fundamentals</h3>
      <p>Get introduced to HTML, CSS, and JavaScript through hands-on projects while learning modern responsive design principles</p>
    </div>
    <div className="activity-card">
      <div className="activity-icon"><FaReact /></div>
      <h3>React Development & State Management</h3>
      <p>Build dynamic user interfaces with React, implement component architecture, and manage application state efficiently</p>
    </div>
    <div className="activity-card">
      <div className="activity-icon"><FaDatabase /></div>
      <h3>Full-Stack Integration</h3>
      <p>Connect your React applications to back-end services, work with APIs, and deploy complete web applications</p>
    </div>
  </div>
</section>

        {/* Schedule Section */}
<section className="schedule-section">
  <div className="section-heading">
    <h2>DAILY <span>SCHEDULE</span></h2>
    <div className="heading-underline"></div>
  </div>
  <div className="schedule-container">
    <div className="schedule-description">
      <p>Each day at DevQuest Camp follows a structured yet flexible schedule designed to maximize learning while keeping the experience fun and engaging. Here's what a typical day looks like:</p>
    </div>
    
    <div className="timeline">
      <div className="timeline-item">
        <div className="time-block">
          <FaClock className="clock-icon" />
          <span>10:00 AM</span>
        </div>
        <div className="timeline-content">
          <h3>Welcome & Icebreakers</h3>
          <p>Start the day with fun activities to get to know your fellow campers</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="time-block">
          <FaClock className="clock-icon" />
          <span>10:30 AM</span>
        </div>
        <div className="timeline-content">
          <h3>Guided Teaching Session</h3>
          <p>Interactive lessons on web frameworks, component design, and React fundamentals</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="time-block">
          <FaClock className="clock-icon" />
          <span>11:30 AM</span>
        </div>
        <div className="timeline-content">
          <h3>Guided Practice & Coding</h3>
          <p>Apply what you've learned with hands-on React exercises and mini-projects</p>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="time-block">
          <FaClock className="clock-icon" />
          <span>12:00 PM</span>
        </div>
        <div className="timeline-content">
          <h3>Share & Showcase</h3>
          <p>Present your progress, get feedback, and celebrate achievements</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to start your app development journey?</h2>
            <p>Spaces are limited to <strong>10</strong>  participants. Secure your spot today!</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScMeZJtDlrKpl_VkCrvmLamIXm54-BAkQaak4EWFll94_oVig/viewform?usp=sharing" className="btn primary-btn">Register Now</Link>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default About;