import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase/firebaseConfig"; // Import auth and db from firebaseConfig
import { SoundContext } from "./SoundContext"; // Import SoundContext
import "./Style.css";
import "../Components/Buttons.css";
import "../Components/Container.css";
import "../Components/Badge.css";

//  ****************************************
//  *         Code By @Sasaa_💀              *
//  ****************************************

const InsPlay = () => {
  const [username, setUsername] = useState("Player 1"); // State for username
  const navigate = useNavigate();
  const location = useLocation();
  const { isMuted, toggleMute, playSound, volume, changeVolume } = useContext(SoundContext); // Use SoundContext

  // Fetch the username from Firestore or use guest username
  useEffect(() => {
    const guestUsername = location.state?.username;
    if (guestUsername) {
      setUsername(guestUsername);
    } else {
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
    }
  }, [location.state]);

  // Play sound when the component mounts
  useEffect(() => {
    playSound();
  }, [playSound]);

  // Handlers for navigation buttons
  const handlesettings = () => {
    navigate("/Setting", { state: { username } });
  };

  const handleLeaderBoard = () => {
    navigate("/LeaderBoard", { state: { username } });
  };
  const handleGameUi = () => {
    navigate("/GameUi", { state: { username } }); // Pass the username to GameUi
  };

  const handleSignInUp = () => {
    navigate("/SignInUp");
  };

  return (
    <div className="Container1">
      <div className="Container22">
        <div className="playerbadge">
          <span className="playername">{username}</span>
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

          {/* Play Button to trigger audio */}
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
              onChange={toggleMute} // Toggle sound on change
            />
            <div className="mute-icon"></div>
          </label>
          {/* Volume Control Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => changeVolume(e.target.value)}
            className="volume-slider"
          />
        </div>

        <button className="settings-button" onClick={handlesettings}></button>

        <button className="back-btttn" onClick={handleSignInUp}></button>
        <button
          className="leaderboard-button"
          onClick={handleLeaderBoard}
        ></button>
      </div>
    </div>
  );
};

export default InsPlay;