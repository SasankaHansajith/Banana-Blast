import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../Pages/InsPlay.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

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
    <div className="Container1">
      <div className="Container22">
        <div class="playerbadge">
          <span class="playername">Player 1</span>
        </div>

        {/* Instructions Box */}
        <div className="instructions-bbox">
          <h2>Instructions</h2>
          <p>
            Solve math puzzles, collect coins, <br />
            climb the leaderboard. <br />
            Become the top banana champion. <br />
            Are you ready?
          </p>

          <button className="play-button"></button>

          {/* Play Button */}
          {/* <button className="play-button">
      <div className="play-icon">
          <img src="" alt="" />
        </div>
        </button> */}

          {/* Settings & Sound Mute Buttons */}
          <div className="bottom-icons">
            {/* <button className="mute-button" onClick={toggleSound}>
            {isMuted ? "🔇" : "🔊"}

          </button> */}

            <button className="mute-button" onClick={toggleSound}>
              <div className="mute-icon">
                <img
                  src={
                    isMuted ? "../assets/SoundOff.png" : "../assets/SoundOn.png"
                  }
                  alt="Sound Icon"
                />
              </div>
            </button>

            <button className="settings-button"></button>
          </div>
        </div>
        <button className="back-bttn"></button>
        <button className="leaderboard-button"></button>
      </div>
    </div>
  );
};

export default InsPlay;
