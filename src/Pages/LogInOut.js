import React from "react";
import "./LogInOut.css";
import profilePic from "../assets/profile.png"; // ✅ Import the image

const LogInOut = () => {
  return (
    <div className="background">
      {/* Player Tag */}
      <div className="player-tag">
        <img src={profilePic} alt="Player" className="player-icon" />
        Player 1
      </div>

      {/* Login Box */}
      <div className="login-box">
        <button className="login-btn">Sign In</button>
        <button className="login-btn">Sign Up</button>
        <button className="login-btn">Guest</button>
      </div>

      {/* Back Button */}
      <button className="back-btn">⬅</button>
    </div>
  );
};

export default LogInOut;
