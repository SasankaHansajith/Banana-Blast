import React, { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase/firebaseConfig"; // Import auth and db from firebaseConfig
import { saveScore } from "../services/scoreService"; // Import the saveScore function
import { SoundContext } from "./SoundContext"; // Import SoundContext
import "./Gameui.css";
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const Gameui = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0); // Start score from 0
  const [questionImage, setQuestionImage] = useState(null);
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [username, setUsername] = useState("Player 1"); // State for username
  const [incorrectAnswers, setIncorrectAnswers] = useState(0); // Track incorrect answers

  const navigate = useNavigate();
  const { playCorrectSound, playIncorrectSound } = useContext(SoundContext); // Use SoundContext

  useEffect(() => {
    fetchQuestion(); // Fetch question when component mounts
  }, []);

  const handleGameOver = useCallback(async () => {
    const user = auth.currentUser;
    if (user) {
      // Save score when the game ends
      await saveScore(user.uid, username, score); // Save the score for the user
    }
    setGameOver(true); // Set game over state
  }, [score, username]);

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleGameOver(); // Handle game over logic
    }
  }, [timeLeft, isPaused, handleGameOver]);

  // Fetch question from API
  const fetchQuestion = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.allorigins.win/get?url=" + encodeURIComponent("http://marcconrad.com/uob/banana/api.php"));
      const data = JSON.parse(response.data.contents);
      console.log("API response:", data); // Log the API response for debugging
      setQuestionImage(data.question); // Store image URL
      setSolution(data.solution); // Store correct answer
      setLoading(false);
    } catch (error) {
      console.error("Error fetching question:", error);
      setLoading(false);
    }
  };

  // Fetch the username from Firestore
  useEffect(() => {
    const fetchUsername = async (user) => {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUsername(userData.username.substring(0, 9)); // Limit username to 9 characters
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUsername(user);
      } else {
        setUsername("Player 1");
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle user answer selection
  const handleAnswerClick = (num) => {
    if (isPaused) return; // Do nothing if the game is paused

    if (num === solution) {
      playCorrectSound(); // Play correct answer sound
      setScore((prevScore) => prevScore + 50); // Increase score by 50 points on correct answer
      setTimeLeft((prevTime) => prevTime + 20); // Add 20 seconds to the timer
      setFeedback("Correct! 🎉");
      setTimeout(() => {
        setFeedback("");
        fetchQuestion(); // Fetch a new question after clearing feedback
      }, 500); // Adjust the delay as needed
    } else {
      playIncorrectSound(); // Play incorrect answer sound
      setFeedback("Wrong! ❌ Try again.");
      setIncorrectAnswers((prev) => {
        const newCount = prev + 1;
        if (newCount >= 5) {
          handleGameOver(); // End game after 5 incorrect answers
        }
        return newCount;
      });
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
    setScore(0); // Reset score to 0
    setIncorrectAnswers(0); // Reset incorrect answers
    fetchQuestion(); // Fetch a new question
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Generate heart emojis based on the number of incorrect answers
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 5 - incorrectAnswers; i++) {
      hearts.push("❤️");
    }
    return hearts.join(" ");
  };

  return (
    <div className="Container1">
      <div className="game-container2">
        <div className="playerbadge">
          <span className="playername">{username}</span>
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
            <button className="home-btn" onClick={() => navigate("/InsPlay")}>
             
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
                        width: "70%",
                        height: "auto",
                        maxWidth: "700px",
                        maxHeight: "700px",
                        objectFit: "contain",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        marginBottom: "10px"
                      }}
                    />
                  </>
                )}

                {/* Number Buttons */}
                <div className="number-buttons">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <button key={num} className="num-btn" onClick={() => handleAnswerClick(num)} disabled={isPaused}>
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar">
              <button className={isPaused ? "resume-btn" : "pause-btn"} onClick={handlePauseResume}>
                
              </button>

              <button className="home-btn" onClick={() => navigate("/InsPlay")}>
             
              </button>

              <button className="restart-btn" onClick={handleRestart}>
             
              </button>
            </div>

            {/* Feedback Message */}
            {feedback && <div className="feedback">{feedback}</div>}

            {/* Hearts Indicator */}
            <div className="hearts">{renderHearts()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gameui;