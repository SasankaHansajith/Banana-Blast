import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInUp.css";

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

  // Navigate back to the previous page when the back button is clicked
  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  return (
    <div className="signin-container">
       <div className="signin-container2">
      {/* Player Badge */}
      <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="Player Icon" />
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

        {/* Back Button */}
        <button className="back-btn" onClick={handleBack}>
          ←
        </button>
      </div>
    </div> </div>
  );
};

export default SignInOut;
