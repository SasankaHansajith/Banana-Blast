import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./InsPlay.css";

const InsPlay = () => {

 
  const [isMuted, setIsMuted] = useState(false);
  // const navigate = useNavigate();

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="game-container">
       {/* Player Badge */}
       <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>

      {/* Instructions Box */}
      <div className="instructions-box">
        <h2>Instructions</h2>
        <p>
          Solve math puzzles, collect coins, <br />
          climb the leaderboard. <br />
          Become the top banana champion. <br />
          Are you ready?
        </p>

        {/* Play Button */}
        <button className="play-button">▶</button>

        {/* Settings & Sound Mute Buttons */}
        <div className="bottom-icons">
          <button className="mute-button" onClick={toggleSound}>
            {isMuted ? "🔇" : "🔊"}
          </button>
          <button className="settings-button">⚙</button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="back-btn">←</button>
      <button className="leaderboard-button">LeaderBoard</button>
    </div>
  );
};

export default InsPlay;
