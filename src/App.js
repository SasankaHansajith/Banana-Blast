import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import InsPlay from "./Pages/InsPlay";
import LeaderBoard from "./Pages/LeaderBoard";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SignInOut from "./Pages/SignInOut";  // Correct import without extra space
import Loading from "./Pages/Loading";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define each page with a specific route */}
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/insplay" element={<InsPlay />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignInOut" element={<SignInOut />} />
        <Route path="/log-in-out" element={<SignInOut />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
