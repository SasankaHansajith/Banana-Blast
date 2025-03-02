import React, { useEffect } from "react";
import "./LeaderBoard.css";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const LeaderBoard = () => {
  const players = [
    { rank: 1, name: "Player 1", score: "" },
    { rank: 2, name: "Player 2", score: "" },
    { rank: 3, name: "Player 3", score: "" },
    { rank: 4, name: "Player 4", score: "" },
    { rank: 5, name: "Player 5", score: "" },
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
        <div class="playerbadge">
          <span class="playername">Player 1</span>
        </div>

        {/* Leaderboard Box */}
        <div className="leaderboard-box">
          <h2 className="leaderboard-title">Leaderboard</h2>
          <ul className="leaderboard-list">
            {players.map((player) => (
              <li key={player.rank} className="leaderboard-item">
                <span className="rank-circle">{player.rank}</span>
                <span className="player-name">{player.name}</span>
                <span className="score-box">{player.score}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <button className="back-bttn"></button>
      </div>{" "}
    </div>
  );
};

export default LeaderBoard;
