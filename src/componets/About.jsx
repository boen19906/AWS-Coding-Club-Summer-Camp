import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-camp">
      {/* Hero Section */}
      <header className="hero-container">
        <div className="hero-content">
          <h1>ABOUT <span>CODING CAMP</span></h1>
          <p>Learn game dev, code, and design—FREE and FUN!</p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="mission">
        <h2>OUR <span>MISSION</span></h2>
        <p>
          Our mission is to provide a fun, engaging opporunity 
          for students to get involved in Unity 2D and 3D game developement 
          for FREE. This is our CAS (Community Activity and Service) project!
        </p>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <h2>WHAT TO EXPECT</h2>
        <ul>
        <li>🎮 Unity Game Development Workshops</li>
        <li>💻 Coding & Scripting in C#</li>
        <li>🎨 2D & 3D Game Design</li>
        <li>🕹 Playtesting & Debugging</li>
        <li>🚀 Team Projects & Game Jams</li>
        </ul>
      </section>

      {/* Schedule Section */}
      <section className="schedule">
        <h2>EXAMPLE SCHEDULE</h2>
        <ul>
        <li>10:00 - Icebreakers</li>
        <li>10:30 - Guided Teaching on 2D animation</li>
        <li>11:30 - Guided Practice and Coding</li>
        <li>12:00 - Reports and Presentations</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
