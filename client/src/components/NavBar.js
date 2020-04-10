import React from 'react';
import { useDarkMode } from './useDarkMode';

// implementing my dark mode hook
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  // setting up my navbar and button for dark mode
  return (
    <nav className="navbar">
      <h1 className="title">Sprint</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
