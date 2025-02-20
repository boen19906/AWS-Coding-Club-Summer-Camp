import React from "react";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <div className="team-container">
      <h1>MEET THE TEAM</h1>

      <div className="team-member left">
        <img src="team1.jpg" alt="Team Member 1" />
        <div className="info">
          <h2>Boen Liu</h2>
          <p>Lead Developer and Instructor - professinonal with extensive experience in Unity game devlopment and web developer</p>
        </div>
      </div>

      <div className="team-member right">
        <div className="info">
          <h2>Bao Vu</h2>
          <p>Instructor - web developer with amazing personality and is also pretty amazing and whatnot, really cool type shi!</p>
        </div>
        <img src="team2.jpg" alt="Team Member 2" />
      </div>
    </div>
  );
};

export default MeetTheTeam;
