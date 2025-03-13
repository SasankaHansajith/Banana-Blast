import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase/firebaseConfig"; // Import auth and db from firebaseConfig
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Badge.css";

const LeaderBoard = () => {
  const [username, setUsername] = useState("Player 1"); // State for username
  const [players, setPlayers] = useState([]); // State for leaderboard players
  const [difficulty, setDifficulty] = useState("easy"); // State for selected difficulty
  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    // Apply brightness effect when the component mounts
    const savedBrightness = localStorage.getItem("brightness");
    if (savedBrightness) {
      document.body.style.filter = `brightness(${savedBrightness}%)`;
    }
  }, []);

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

  // Fetch the top 5 players from Firestore based on difficulty
  const fetchTopPlayers = async (difficulty) => {
    const playersRef = collection(db, `scores_${difficulty}`);
    const q = query(playersRef, orderBy("score", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    const topPlayers = querySnapshot.docs.map((doc, index) => ({
      rank: index + 1,
      name: doc.data().username,
      score: doc.data().score,
    }));
    setPlayers(topPlayers);
  };

  useEffect(() => {
    fetchTopPlayers(difficulty); // Fetch top players when the component mounts or difficulty changes
  }, [difficulty]);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="Container1">
      <div className="leaderboard-container2">
        <div className="playerbadge">
          <span className="playername">{username}</span>
        </div>

        {/* Leaderboard Box */}
        <div className="leaderboard-box">
          <h2 className="leaderboard-title">Leaderboard</h2>

          {/* Difficulty Dropdown */}
          <div className="difficulty-dropdown">
            <label htmlFor="difficulty-select">Difficulty: </label>
            <select
              id="difficulty-select"
              value={difficulty}
              onChange={handleDifficultyChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

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
        <button className="back-bttn" onClick={() => navigate("/InsPlay")}></button>
      </div>
    </div>
  );
};

export default LeaderBoard;