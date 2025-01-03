import { useState } from "react";
import "../Styles/DashBoard.css";
const DashBoard = () => {
  const [theme, setTheme] = useState("dark");
  const userName = "John Doe";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="main">
          {/* User Info Section */}
          <div className="user-info">{`${userName}'s workspace`}</div>
          {/* Light/Dark Toggle Section */}
          <div className="toggle-container">
            <label>{theme === "light" ? "Light" : "Dark"}</label>
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
          </div>
          {/* Share Button */}
          <button className="share-button">Share</button>
        </div>
      </header>
    </div>
  );
};

export default DashBoard;
