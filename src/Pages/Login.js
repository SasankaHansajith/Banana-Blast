import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../firebase/authService"; // Firebase auth function
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const Login = () => {
  const [email, setEmail] = useState("");  // Updated username to email
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Error message state

  const navigate = useNavigate();

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await loginUser(email, password);
    if (response.success) {
      console.log("Login successful:", response.user);
      navigate("/InsPlay"); // Redirect on success
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="Container1">
      <div className="Container22">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}
          <button type="submit" className="login-button"></button>
        </form>

        <button className="back-bttn" onClick={() => navigate("/SignInUp")}>
          
        </button>
      </div>
    </div>
  );
};

export default Login;
