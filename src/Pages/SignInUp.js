import React from "react";
import "./SignInUp.css";
// import MiddleBox from "../Components/MiddleBox";

const SignInOut = () => {
  return (
    <div className="signin-container">
      {/* Player Badge */}
      <div className="player-badge">
        <div className="player-icon">
          <img src="./assets/Loading.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>

      {/* Sign In / Sign Up Box */}
      <div className="signin-box">
        {/* <MiddleBox> */}
          <button className="signin-button">Sign In</button>
          <button className="signup-button">Sign Up</button>
          <button className="guest-button">Guest</button>
        {/* </MiddleBox> */}
      </div>

      <button className="back-btn">←</button>
    </div>
  );
};

export default SignInOut;
