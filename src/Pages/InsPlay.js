import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./InsPlay.css";

const InsPlay = () => {

 
  const [isMuted, setIsMuted] = useState(false);
  // const navigate = useNavigate();

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

   useEffect(() => {
      // Apply brightness effect when the component mounts
      const savedBrightness = localStorage.getItem("brightness");
      if (savedBrightness) {
        document.body.style.filter = `brightness(${savedBrightness}%)`;
      }
    }, []);

  return (
    <div className="game-container">
       <div className="game-container2">
       {/* Player Badge */}
       <div className="player-badge">
        <div className="player-icon">
          <img src="" alt="" />
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
        <button className="play-button">
      <div className="play-icon">
          <img src="" alt="" />
        </div>
        </button>

        {/* Settings & Sound Mute Buttons */}
        <div className="bottom-icons">
          {/* <button className="mute-button" onClick={toggleSound}>
            {isMuted ? "🔇" : "🔊"}

          </button> */}

<button className="mute-button" onClick={toggleSound}>
  <div className="mute-icon">
    <img src={isMuted ? "../assets/SoundOff.png" : "../assets/SoundOn.png"} alt="Sound Icon" />
  </div>
</button>

          <button className="settings-button"></button>
        </div>
        
      </div>


      
    

      {/* Navigation Buttons */}

      <button className="back-btn">
      <div className="back-icon">
          <img src="" alt="" />
        </div>
        </button>


     


      <button className="leaderboard-button">LeaderBoard</button>
    </div>
    
    
    </div>
  );
};

export default InsPlay;
