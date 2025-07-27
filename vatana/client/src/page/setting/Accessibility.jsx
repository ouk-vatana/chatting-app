import React, { useState, useEffect } from 'react';

const Accessibility = ({ onBack }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState('normal');

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value);
  };

  // 🪄 Apply font-size class to body
  useEffect(() => {
    const body = document.body;
    body.classList.remove('text-small', 'text-normal', 'text-large');
    body.classList.add(`text-${textSize}`);
  }, [textSize]);

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Manage settings to improve accessibility for all users.
      </p>

      {/* High Contrast Toggle */}
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <label htmlFor="highContrastToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="highContrastToggle"
              className="sr-only"
              checked={highContrast}
              onChange={toggleHighContrast}
            />
            <div className={`w-11 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-green-600' : 'bg-gray-700'}`}>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                  highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </label>
          <span className="select-none">High Contrast Mode</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Improves visibility for users with visual impairments.
        </p>
      </div>

      {/* Text Size Option */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Text Size
        </label>
        <select
          value={textSize}
          onChange={handleTextSizeChange}
          className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
        >
          <option value="small">Small</option>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
        </select>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Adjust text size to improve readability.
        </p>
      </div>
    </div>
  );
};

export default Accessibility;
