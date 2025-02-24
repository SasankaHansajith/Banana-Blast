import React, { useState, useEffect } from "react";
import "./Signup.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Details:", { email, username, password, rememberMe });
  };

   useEffect(() => {
      // Apply brightness effect when the component mounts
      const savedBrightness = localStorage.getItem("brightness");
      if (savedBrightness) {
        document.body.style.filter = `brightness(${savedBrightness}%)`;
      }
    }, []);

  return (
    <div className="signup-container">
       <div className="signup-container2">

 {/* Player Badge */}
 {/* <div className="player-badge">
        <div className="player-icon">
          <img src="" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div> */}
        
      <div className="backgroud-image">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>

        
      </form>
      <button className="back-btn">
      <div className="back-icon">
          <img src="" alt="" />
        </div>
        </button>

    </div>
    </div></div>
  );
};

export default Signup;
