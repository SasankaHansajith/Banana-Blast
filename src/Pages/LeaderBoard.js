import React, { useEffect } from "react";

import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const LeaderBoard = () => {
  const players = [
    { rank: 1, name: "Player 1", score: "100" },
    { rank: 2, name: "Player 2", score: "95" },
    { rank: 3, name: "Player 3", score: "90" },
    { rank: 4, name: "Player 4", score: "85" },
    { rank: 5, name: "Player 5", score: "80" },
  ];

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  return (
    <div className="Container1">
      <div className="leaderboard-container2">
        <div className="playerbadge">
          <span className="playername">Player 1</span>
        </div>

        {/* Leaderboard Box */}
        <div className="leaderboard-box">
          <h2 className="leaderboard-title">Leaderboard</h2>
          
          {/* Leaderboard Rows */}
          <div className="leaderboard-rows">
            {players.map((player) => (
              <div key={player.rank} className="leaderboard-row">
                <div className="rank-column">{player.rank}</div>
                <div className="name-column">{player.name}</div>
                <div className="score-column">{player.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <button className="back-bttn"></button>
      </div>{" "}
    </div>
  );
};

export default LeaderBoard;
