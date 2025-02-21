import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory(); // Initialize the useHistory hook

  const handleSignIn = () => {
    history.push("/log-in-out"); // Redirect to the LogInOut page
  };

  return (
    <div className="login-background">
      {/* Player Badge */}
      <div className="player-badge">
        <img src="../assets/monkey-icon.png" alt="Player Icon" className="player-icon" />
        <span className="player-text">Player 1</span>
      </div>

      {/* Login Box */}
      <div className="login-box">
        <input type="text" className="login-input" placeholder="Username" />
        <input type="password" className="login-input" placeholder="Password" />

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button className="login-btn" onClick={handleSignIn}>Sign In</button>
      </div>

      {/* Back Button */}
      <button className="back-btn">←</button>
    </div>
  );
}
