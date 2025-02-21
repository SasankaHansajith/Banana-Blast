import React from "react";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const players = [
    { rank: 1, name: "Player 1", score: "" },
    { rank: 2, name: "Player 2", score: "" },
    { rank: 3, name: "Player 3", score: "" },
    { rank: 4, name: "Player 4", score: "" },
    { rank: 5, name: "Player 5", score: "" },
  ];

  return (
    <div className="leaderboard-container">
      {/* Player Badge */}
      <div className="player-badge">
        <div className="player-icon">
          <img src="monkee.png" alt="" />
        </div>
        <span className="player-name">Player 1</span>
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
      <button className="back-btn">←</button>
    </div>
  );
};

export default LeaderBoard;
