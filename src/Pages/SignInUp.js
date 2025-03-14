import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

//  ****************************************
//  *         Code By @Sasaa_💀             *
//  ****************************************

const SignInOut = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleSignUp = () => {
    navigate("/signup"); // Navigate to the Signup page
  };

  const handleGuest = () => {
    navigate("/insplay", { state: { username: "Guest001" } }); // Navigate to a guest page with guest username
  };

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  return (
    <div className="Container1">
      <div className="Container22">
        {/* Sign In / Sign Up Box */}
        <div className="signin-box">
          <button className="signin-button" onClick={handleSignIn}></button>
          <button className="signup-button" onClick={handleSignUp}></button>
          <button className="guest-button" onClick={handleGuest}></button>
        </div>
      </div>
    </div>
  );
};

export default SignInOut;