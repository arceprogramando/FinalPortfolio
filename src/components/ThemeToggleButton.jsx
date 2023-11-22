import { useState } from "react";
import { isDarkTheme, toggleDarkTheme } from "../utils/themeToggle";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(isDarkTheme());

  const handleThemeToggle = () => {
    toggleDarkTheme();
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <div className={` w-2 h-2  rounded-full shadow-2xl ${isDark ? 'bg-black' : 'bg-white text-white '}`}>

      <button
        onClick={handleThemeToggle}
        className="w-2 h-2"
      >
        {isDark ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default ThemeToggleButton;