import React, { useState } from "react";



import "./Setting.css";


const Settings = () => {
  const [brightness, setBrightness] = useState(50); // Default brightness level

  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
  };


  return (
    <div className="settings-container">

       {/* Player Badge */}
       <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>



      <button className="back-button">←</button>
      <div className="settings-content">
        <h1 className="settings-title">Settings</h1>

        <div className="difficulty-section">
          <h2>Difficulty</h2>
          <div className="difficulty-buttons">
            <button className="difficulty-button easy">Easy</button>
            <button className="difficulty-button medium">Medium</button>
            <button className="difficulty-button hard">Hard</button>
          </div>
        </div>

        <div className="brightness-section">
          <h2>Brightness Level</h2>
          <div className="slider-container">
            <span className="icon">🐵</span>
            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              className="brightness-slider"
              onChange={handleBrightnessChange}
            />
            <span className="icon">🐵</span>
          </div>
          <p>Adjust the slider until the icon is easy to see.</p>
        </div>
       

    

      </div>
      <button className="back-btn">←</button>
    </div>
  );
};

export default Settings;
