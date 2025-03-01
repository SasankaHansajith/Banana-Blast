import React, { useState, useEffect } from "react";
import "./Gameui.css";
import "../Components/Buttons.css";




const Gameui = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [score] = useState(3000);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
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

      {/* <div className="header"> */}
      <div className="player-badge">
        <div className="player-icon">
          <img src="" alt="" />
        </div>
        <span className="player-name">Player 1</span>
      </div>
      
 
      <div className="game-container2">
  <div className="player-badge">
    <div className="player-icon">
      <img src="" alt="" />
    </div>
    <span className="player-name">Player 1</span>
  </div>

  <div className="score-timer-container">
    <div className="timer">Time Left: <span>{formatTime(timeLeft)}</span></div>
    <div className="score">{score}</div>
  </div>
</div>

      <div className="header">

      

      {/* Game Area */}
      <div className="game-area">
        <p>Game Content Here</p>
      

      {/* Number Buttons */}
      <div className="number-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} className="num-btn">{num}</button>
        ))}
      </div></div></div>

      {/* Sidebar Buttons */}
      {/* <div className="sidebar">
        <button className="home-btn"><FaHome /></button>
        <button className="reset-btn"><FaRedo /></button>
      </div> */}
    </div>  </div>
  );
};

export default Gameui;
