import React, { useState, useEffect } from "react";
import Loading from "./Pages/Loading";
import LogInOut from "./Pages/LogInOut";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Show loading screen for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading /> : <LogInOut />} {/* Show Loading first, then LogInOut */}
    </div>
  );
}

export default App;