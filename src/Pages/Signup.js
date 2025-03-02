import React, { useState, useEffect } from "react";
import "./Style.css"; 
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

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
      
      const savedBrightness = localStorage.getItem("brightness");
      if (savedBrightness) {
        document.body.style.filter = `brightness(${savedBrightness}%)`;
      }
    }, []);

  return (
    <div className="Container1">
       <div className="Container22">


     
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
        <div className="remember-mee">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit" className="signuup-button"></button>

        
      </form>
      <button className="back-bttn"></button>

  
    </div></div>
  );
};

export default Signup;
