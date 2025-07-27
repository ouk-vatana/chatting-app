import React, { useState } from 'react';

const Privacy = ({ onBack }) => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Privacy and Security</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Update your privacy preferences and secure your account.
      </p>

      <div className="space-y-6">
        {/* Profile Visibility */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Profile Visibility</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Allow others to see your profile and status.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profileVisibility}
              onChange={() => setProfileVisibility(!profileVisibility)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                profileVisibility ? 'bg-green-600' : 'bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                profileVisibility ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </label>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Add an extra layer of security to your account.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                twoFactorAuth ? 'bg-green-600' : 'bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                twoFactorAuth ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </label>
        </div>

        {/* Data Sharing */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Data Sharing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Allow us to share anonymized data to improve services.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={dataSharing}
              onChange={() => setDataSharing(!dataSharing)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                dataSharing ? 'bg-green-600' : 'bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                dataSharing ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
