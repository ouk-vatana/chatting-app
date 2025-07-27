import React, { useState, useEffect } from 'react';

const DarkMode = ({ onBack }) => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Dark Mode</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Toggle dark mode on or off for the app’s appearance.
      </p>

      <div className="flex items-center space-x-4">
        <label htmlFor="darkModeToggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className={`w-11 h-6 rounded-full transition-colors ${
            isDarkMode ? 'bg-green-600' : 'bg-gray-700'
          }`}>
          </div>
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
              isDarkMode ? 'translate-x-5' : 'translate-x-0'
            }`}
          ></div>
        </label>

        <span className="select-none">
          {isDarkMode
            ? 'Dark mode is ON. Enjoy the darker theme!'
            : 'Dark mode is OFF. Using light theme.'}
        </span>
      </div>
    </div>
  );
};

export default DarkMode;
