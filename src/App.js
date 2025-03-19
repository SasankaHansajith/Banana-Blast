import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// Import all your page components
import InsPlay from "./Pages/InsPlay";
import LeaderBoard from "./Pages/LeaderBoard";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SignInUp from "./Pages/SignInUp";
import Gameui from "./Pages/Gameui";
import Loading from "./Pages/Loading";

// Import SoundProvider
import { SoundProvider } from "./Pages/SoundContext";

function App() {
  return (
    <SoundProvider>
      <Router>
        <Routes>
          {/* Default route to Loading page */}
          <Route path="/" element={<Loading />} />
          {/* Explicit route for /login */}
          <Route path="/login" element={<Login />} />
          {/* Other routes */}
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/insplay" element={<InsPlay />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Gameui" element={<Gameui />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignInUp" element={<SignInUp />} />
          <Route path="/Loading" element={<Loading />} />
        </Routes>
      </Router>
    </SoundProvider>
  );
}

export default App;