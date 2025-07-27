import React from 'react';

const Family = ({ onBack }) => {
  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Family Center</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        The Family Center helps you manage shared access, parental controls, and monitor child activity in one place.
      </p>

      <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Add or remove family members from your group</li>
        <li>Set permissions for child accounts</li>
        <li>Monitor usage and communication history</li>
        <li>Set screen time limits for younger users</li>
      </ul>

      <button
        onClick={() => alert('Family management feature coming soon!')}
        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition"
      >
        Manage Family Settings
      </button>
    </div>
  );
};

export default Family;
