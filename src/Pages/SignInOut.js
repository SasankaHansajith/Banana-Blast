import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignInOut.css"; // Ensure the path is correct

const SignInOut = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleSignUp = () => {
    navigate("/signup"); // Navigate to the Signup page
  };

  const handleGuest = () => {
    navigate("/insplay"); // Navigate to a guest page
  };

  return (
    <div className="signin-container">
      {/* Player Badge */}
 <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>


      {/* Sign In / Sign Up Box */}
      <div className="signin-box">
        <button className="signin-button" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="guest-button" onClick={handleGuest}>
          Guest
        </button>
      </div>

      {/* Back Button */}
      <button className="back-btn">←</button>
    </div>
  );
};

export default SignInOut;
