import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase/firebaseConfig"; // Import auth and db from firebaseConfig
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

//  ****************************************
//  *         Code By @Sasaa_💀              *
//  ****************************************

const Settings = () => {
  const [brightness, setBrightness] = useState(50); // Default brightness level
  const [username, setUsername] = useState("Player 1"); // State for username
  const [difficulty, setDifficulty] = useState("easy"); // Default difficulty level
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setBrightness(newBrightness);
    localStorage.setItem("brightness", newBrightness); // Save brightness to localStorage
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    localStorage.setItem("difficulty", level); // Save difficulty to localStorage
  };

  useEffect(() => {
    // Load the saved brightness from localStorage if available
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      setBrightness(savedBrightness);
    }

    // Load the saved difficulty from localStorage if available
    const savedDifficulty = localStorage.getItem("difficulty");
    if (savedDifficulty) {
      setDifficulty(savedDifficulty);
    } else {
      setDifficulty("easy"); // Default to "easy" if no saved difficulty
    }

    // Set username from location state if available
    const guestUsername = location.state?.username;
    if (guestUsername) {
      setUsername(guestUsername);
    } else {
      const fetchUsername = async (user) => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData.username.substring(0, 9)); // Limit username to 9 characters
        }
      };

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchUsername(user);
        } else {
          setUsername("Player 1");
        }
      });

      return () => unsubscribe();
    }
  }, [location.state]);

  // Apply brightness to the whole page when it changes
  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`; // Apply filter to the body
  }, [brightness]);

  const navigateBack = () => {
    navigate("/InsPlay", { state: { username } });
  };

  return (
    <div className="Container1">
      <div className="Container22">
        <div className="playerbadge">
          <span className="playername">{username}</span>
        </div>

        <div className="settings-content">
          <h1 className="settings-title">Settings</h1>

          <div className="difficulty-section">
            <h2 className="difficulty-title">Difficulty</h2>
            <div className="difficulty-buttons">
              <button
                className={`difficulty-button easy ${difficulty === "easy" ? "selected" : ""}`}
                onClick={() => handleDifficultyChange("easy")}
              >
               
              </button>
              <button
                className={`difficulty-button medium ${difficulty === "medium" ? "selected" : ""}`}
                onClick={() => handleDifficultyChange("medium")}
              >
               
              </button>
              <button
                className={`difficulty-button hard ${difficulty === "hard" ? "selected" : ""}`}
                onClick={() => handleDifficultyChange("hard")}
              >
                
              </button>
            </div>
          </div>

          <div className="brightness-section">
            <h2>Brightness Level</h2>
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                className="brightness-slider"
                onChange={handleBrightnessChange}
              />
            </div>
            <p>Adjust the slider until the icon is easy to see.</p>
          </div>
        </div>

        <button className="back-bttn" onClick={navigateBack}></button>
      </div>
    </div>
  );
};

export default Settings;