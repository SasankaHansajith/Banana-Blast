import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Loading.css";
import "../Components/Container.css";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/SignInUp"); // Corrected route
          }, 500); // Add a small delay for better UX
          return 100;
        }
        return oldProgress + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="Container11">
      <div className="loading-content">
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">LOADING...</p>
      </div>
    </div>
  );
}
