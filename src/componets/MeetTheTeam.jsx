import React from "react";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <>
      <div className="team-hero">
        <div className="team-content">
          <h1>MEET THE <span>TEAM</span></h1>
          <div className="hero-tagline">
            <p>Introducing our team of passionate, skilled instructors!</p>
          </div>
        </div>
      </div>
      
      <section className="team-section">
        <div className="team-container">
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src="team1.png" alt="Boen Liu" />
              </div>
              <div className="team-member-info">
                <h3>Boen Liu</h3>
                <div className="team-member-role">Lead Developer and Instructor</div>
                <p className="team-member-bio">Professional with extensive experience in Unity game development and web development.</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="team-member-image">
                <img src="team2.jpg" alt="Bao Vu" />
              </div>
              <div className="team-member-info">
                <h3>Bao Vu</h3>
                <div className="team-member-role">Web Development Instructor</div>
                <p className="team-member-bio">Web developer with an amazing personality who brings creativity and enthusiasm to every project.</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="team-member-image">
                <img src="team3.jpg" alt="Ryan Cao" />
              </div>
              <div className="team-member-info">
                <h3>Ryan Cao</h3>
                <div className="team-member-role">Web Development Instructor</div>
                <p className="team-member-bio">Talented web developer with exceptional teaching skills and a passion for helping students succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTheTeam;