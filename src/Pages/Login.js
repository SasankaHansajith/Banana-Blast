import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginWithFacebook, loginWithGoogle } from "../firebase/authService"; // Import Facebook and Google login functions
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

//  ****************************************
//  *         Code By @Sasaa_💀             *
//  ****************************************


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
      setError("Login Unsuccessful");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const response = await loginWithFacebook();
      if (response.success) {
        console.log("Facebook login successful:", response.user);
        navigate("/InsPlay");
      } else {
        setError("Login Unsuccessful");
      }
    } catch (error) {
      setError("Login Unsuccessful");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await loginWithGoogle();
      if (response.success) {
        console.log("Google login successful:", response.user);
        navigate("/InsPlay");
      } else {
        setError("Login Unsuccessful");
      }
    } catch (error) {
      setError("Login Unsuccessful");
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
        <button className="facebook-login-button" onClick={handleFacebookLogin}></button>
        <button className="google-login-button" onClick={handleGoogleLogin}></button>
        <button className="back-bttn" onClick={() => navigate("/SignInUp")}></button>
      </div>
    </div>
  );
};

export default Login;