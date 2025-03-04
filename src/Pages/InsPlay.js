import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

const InsPlay = () => {
  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);
  const navigate = useNavigate();
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
            <input type="checkbox" id="mute-toggle" className="mute-toggle" />
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
