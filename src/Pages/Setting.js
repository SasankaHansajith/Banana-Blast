import React, { useState, useEffect } from "react";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const Settings = () => {
  const [brightness, setBrightness] = useState(50); // Default brightness level

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setBrightness(newBrightness);
    localStorage.setItem("brightness", newBrightness); // Save brightness to localStorage
  };

  useEffect(() => {
    // Load the saved brightness from localStorage if available
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      setBrightness(savedBrightness);
    }
  }, []);

  // Apply brightness to the whole page when it changes
  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`; // Apply filter to the body
  }, [brightness]);

  return (
    <div className="Container1">
      <div className="Container22 ">
        <div class="playerbadge">
          <span class="playername">Player 1</span>
        </div>

        <div className="settings-content">
          <h1 className="settings-title">Settings</h1>

          <div className="difficulty-section">
            <h2 className="difficulty-title">Difficulty</h2>
            <div className="difficulty-buttons">
              <button className="difficulty-button easy"></button>
              <button className="difficulty-button medium"></button>
              <button className="difficulty-button hard"></button>
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

        <button className="back-bttn"> </button>
      </div>
    </div>
  );
};

export default Settings;
