import React, { useState } from 'react';

const Notifications = ({ onBack }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Notifications & Sound</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Manage how and when you receive notifications.
      </p>

      <div className="flex items-center space-x-4">
        {/* Toggle switch */}
        <label htmlFor="notificationToggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="notificationToggle"
            className="sr-only"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          <div className={`w-11 h-6 rounded-full transition-colors ${
            notificationsEnabled ? 'bg-green-600' : 'bg-gray-700'
          }`}>
          </div>
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
              notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          ></div>
        </label>

        <span className="select-none">
          {notificationsEnabled
            ? 'Notifications are ON.'
            : 'Notifications are OFF.'}
        </span>
      </div>
    </div>
  );
};

export default Notifications;
