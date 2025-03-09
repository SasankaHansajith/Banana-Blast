import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../firebase/authService"; // Import Firebase signup function
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Error state for handling signup errors

  const navigate = useNavigate();

  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signupUser(email, password);
    if (response.success) {
      console.log("Signup successful:", response.user);
      navigate("/InsPlay"); // Redirect to InsPlay on success
    } else {
      setError(response.error);
    }
  };

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
          {/* <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label>Remember Me</label>
          </div> */}
          {error && <p className="error-message">{error}</p>} {/* Show error if signup fails */}
          <button type="submit" className="signup-button"></button>
        </form>
        <button className="back-bttn" onClick={() => navigate("/SignInUp")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Signup;
