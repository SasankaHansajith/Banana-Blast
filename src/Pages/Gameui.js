import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gameui.css";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const Gameui = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [isPaused, setIsPaused] = useState(false); // Track pause state
  const [gameOver, setGameOver] = useState(false); // Track game over state
  const [score] = useState(3000);

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true); // Set game over when time reaches 0
    }
  }, [timeLeft, isPaused]);

  // Toggle pause and resume
  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  // Restart the game (reset time and start countdown)
  const handleRestart = () => {
    setTimeLeft(120); // Reset time to 2 minutes
    setIsPaused(false); // Ensure the timer runs
    setGameOver(false); // Remove Game Over message
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Apply brightness effect when the component mounts
  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

  const navigate = useNavigate();
  const handleInsPlay = () => {
    navigate("/InsPlay");
  };

  return (
    <div className="Container1">
      <div className="game-container2">
        <div className="playerbadge">
          <span className="playername">Player 1</span>
        </div>

        <div className="score-timer-container">
          <div
            className={`timer ${timeLeft <= 30 ? "warning" : ""} ${
              timeLeft <= 10 ? "blink" : ""
            }`}
          >
            Time Left: <span>{formatTime(timeLeft)}</span>
          </div>
          <div className="score">{score}</div>
        </div>

        {/* Show Game Over Screen */}
        {gameOver ? (
          <div className="game-over">
            <h1>Game Over</h1>
            <button className="restart-btn" onClick={handleRestart}></button>
          </div>
        ) : (
          <>
            <div className="header">
              {/* Game Area */}
              <div className="game-area">
                <p>Game Content Here</p>

                {/* Number Buttons */}
                <div className="number-buttons">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <button key={num} className="num-btn">
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar">
              {/* Pause/Resume Button */}
              <button
                className={isPaused ? "resume-btn" : "pause-btn"}
                onClick={handlePauseResume}
              ></button>

              {/* Home Button */}
              <button className="home-btn" onClick={handleInsPlay}></button>

              {/* Restart Button */}
              <button className="restart-btn" onClick={handleRestart}></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gameui;
