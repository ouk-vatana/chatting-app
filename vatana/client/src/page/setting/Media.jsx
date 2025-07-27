import React, { useState } from 'react';

const Media = ({ onBack }) => {
  const [autoDownload, setAutoDownload] = useState(true);
  const [saveToGallery, setSaveToGallery] = useState(false);

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Photo & Media</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Manage how media is handled in your chats.
      </p>

      <div className="space-y-6">
        {/* Auto-download media */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Auto-download Media</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automatically download media received in chats.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoDownload}
              onChange={() => setAutoDownload(!autoDownload)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                autoDownload ? 'bg-green-600' : 'bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                autoDownload ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </label>
        </div>

        {/* Save to gallery */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Save to Gallery</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automatically save received photos to your gallery.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={saveToGallery}
              onChange={() => setSaveToGallery(!saveToGallery)}
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                saveToGallery ? 'bg-green-600' : 'bg-gray-600'
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                saveToGallery ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Media;
