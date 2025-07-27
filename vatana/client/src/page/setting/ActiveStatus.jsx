import React, { useState } from 'react';

const ActiveStatus = ({ onBack }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
<div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
  className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Active Status</h2>
<p className="mb-6 text-gray-700 dark:text-gray-300">
        Control whether others can see when you're online.
      </p>

      <div className="flex items-center space-x-4">
        {/* Toggle switch */}
        <label htmlFor="activeStatusToggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="activeStatusToggle"
            className="sr-only"
            checked={isActive}
            onChange={toggleActive}
          />
          {/* Background of the toggle */}
          <div className={`w-11 h-6 rounded-full transition-colors
            ${isActive ? 'bg-green-600' : 'bg-gray-700'}`}>
          </div>
          {/* The knob */}
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform
            ${isActive ? 'translate-x-5' : 'translate-x-0'}`}
          ></div>
        </label>

        {/* Status text */}
        <span className="select-none">
          {isActive
            ? "Your active status is ON. People can see when you're online."
            : "Your active status is OFF. You're invisible to others."}
        </span>
      </div>
    </div>
  );
};

export default ActiveStatus;

