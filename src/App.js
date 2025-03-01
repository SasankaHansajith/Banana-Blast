import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import InsPlay from "./Pages/InsPlay";
import LeaderBoard from "./Pages/LeaderBoard";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import SignInUp from "./Pages/SignInUp" ;
import Gameui from "./Pages/Gameui" ;




function App() {
  return (
    <Router>
      <Routes>
        {/* Define each page with a specific route */}
      
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/insplay" element={<InsPlay />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/Gameui" element={<Gameui/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/SignInUp" element={<SignInUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
