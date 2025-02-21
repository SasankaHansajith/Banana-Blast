import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="login-container">

      
       {/* Player Badge */}
       <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>


      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="login-button">

       

          Sign In
        </button>
      </form>

      <button className="back-btn">←</button>
    </div>
  );
};

export default Login;
