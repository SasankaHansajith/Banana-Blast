import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Gameui.css";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const Gameui = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(3000);
  const [questionImage, setQuestionImage] = useState(null);
  const [solution, setSolution] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestion(); // Fetch question when component mounts
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, isPaused]);

  // Fetch question from API
  const fetchQuestion = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://marcconrad.com/uob/banana/api.php");
      setQuestionImage(response.data.question); // Store image URL
      setSolution(response.data.solution); // Store correct answer
      setLoading(false);
    } catch (error) {
      console.error("Error fetching question:", error);
      setLoading(false);
    }
  };

  // Handle user answer selection
  const handleAnswerClick = (num) => {
    setUserAnswer(num);
    if (num === solution) {
      setScore((prevScore) => prevScore + 100); // Increase score on correct answer
      setFeedback("Correct! 🎉");
      setTimeout(() => {
        fetchQuestion(); // Fetch a new question
        setFeedback("");
      }, 1000);
    } else {
      setFeedback("Wrong! ❌ Try again.");
    }
  };

  // Toggle pause and resume
  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  // Restart the game
  const handleRestart = () => {
    setTimeLeft(120);
    setIsPaused(false);
    setGameOver(false);
    setScore(3000);
    fetchQuestion();
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

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
          <div className="score">Score: {score}</div>
        </div>

        {gameOver ? (
          <div className="game-over">
            <h1>Game Over</h1>
            <button className="restart-btn" onClick={handleRestart}>
              
            </button>
          </div>
        ) : (
          <>
            <div className="header">
              <div className="game-area">
                {loading ? (
                  <p>Loading Question...</p>
                ) : (
                  <>
                    <img
                      src={questionImage}
                      alt="Game Question"
                      className="question-image"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "contain",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        marginBottom: "10px"
                      }}
                    />
                    <p className="feedback">{feedback}</p>
                  </>
                )}

                {/* Number Buttons */}
                <div className="number-buttons">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <button key={num} className="num-btn" onClick={() => handleAnswerClick(num)}>
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar">
              <button className={isPaused ? "resume-btn" : "pause-btn"} onClick={handlePauseResume}>
                {isPaused ? "Resume" : "Pause"}
              </button>

              <button className="home-btn" onClick={() => navigate("/InsPlay")}>
         
              </button>

              <button className="restart-btn" onClick={handleRestart}>
              
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gameui;
