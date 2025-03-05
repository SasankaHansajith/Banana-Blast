import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

// Import the sound file
import gameSoundPath from "../assets/Sound.mp3";

const InsPlay = () => {
  const [isMuted, setIsMuted] = useState(false); // State for mute/unmute functionality
  const navigate = useNavigate();

  // Create the audio object once when the component mounts
  const gameSound = new Audio(gameSoundPath);

  // Handle game sound playing or pausing based on mute state
  useEffect(() => {
    if (!isMuted) {
      gameSound.loop = true; // Loop the sound for continuous play
      gameSound.play(); // Play the sound
    } else {
      gameSound.pause(); // Pause the sound when muted
    }

    // Cleanup: stop sound when the component unmounts
    return () => {
      gameSound.pause();
    };
  }, [isMuted]); // Only re-run the effect when the mute state changes

  // Handlers for navigation buttons
  const handlesettings = () => {
    navigate("/Setting");
  };

  const handleLeaderBoard = () => {
    navigate("/LeaderBoard");
  };
  const handleGameUi = () => {
    navigate("/GameUi");
  };

  const handleSignInUp = () => {
    navigate("/SignInUp");
  };

  // Handle mute toggle
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="Container1">
      <div className="Container22">
        <div className="playerbadge">
          <span className="playername">Player 1</span>
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

          <button className="play-button" onClick={handleGameUi}></button>
        </div>

        {/* Bottom Icons with Mute Button */}
        <div className="bottom-icons">
          <label htmlFor="mute-toggle" className="mute-buttton">
            <input
              type="checkbox"
              id="mute-toggle"
              className="mute-toggle"
              checked={isMuted}
              onChange={handleMuteToggle} // Toggle sound on change
            />
            <div className="mute-icon"></div>
          </label>
        </div>

        <button className="settings-button" onClick={handlesettings}></button>

        <button className="back-bttn" onClick={handleSignInUp}></button>
        <button
          className="leaderboard-button"
          onClick={handleLeaderBoard}
        ></button>
      </div>
    </div>
  );
};

export default InsPlay;
