import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // To display errors if any

  const navigate = useNavigate();

  // Handle form submit without Firebase (since it's removed)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic (without Firebase)
    console.log("Username:", username, "Password:", password);

    // Redirect after successful login (custom logic here)
    navigate("/InsPlay");
  };

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  const handleSignInUp = () => {
    navigate("/SignInUp");
  };

  const handleInsPlay = () => {
    navigate("/InsPlay");
  };

  return (
    <div className="Container1">
      <div className="Container22">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email" // Use email input type
            placeholder="Username" // Placeholder should be changed to "Email" for clarity
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
          {error && <p className="error-message">{error}</p>} {/* Show error message if login fails */}
          <button
            type="submit"
            className="login-button"
            onClick={handleInsPlay}
          >
           
          </button>
        </form>

        <button className="back-bttn" onClick={handleSignInUp}>
          
        </button>
      </div>
    </div>
  );
};

export default Login;
