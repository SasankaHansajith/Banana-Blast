import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginWithFacebook, loginWithTwitter } from "../firebase/authService"; // Import Facebook and Twitter login functions
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await loginUser(username, password);
    if (response.success) {
      console.log("Login successful:", response.user);
      navigate("/InsPlay");
    } else {
      setError(response.error);
    }
  };

  const handleFacebookLogin = async () => {
    const response = await loginWithFacebook();
    if (response.success) {
      console.log("Facebook login successful:", response.user);
      navigate("/InsPlay");
    } else {
      setError(response.error);
    }
  };

  const handleTwitterLogin = async () => {
    const response = await loginWithTwitter();
    if (response.success) {
      console.log("Twitter login successful:", response.user);
      navigate("/InsPlay");
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="Container1">
      <div className="Container22">
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="loginn-button"></button>
        </form>
        <button className="facebook-login-button" onClick={handleFacebookLogin}>
        
        </button>
        <button className="twitter-login-button" onClick={handleTwitterLogin}>
         
        </button>
        <button className="back-bttn" onClick={() => navigate("/SignInUp")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;