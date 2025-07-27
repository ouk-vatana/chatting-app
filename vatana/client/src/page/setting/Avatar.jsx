import React, { useState } from 'react';

const Avatar = ({ onBack }) => {
  const [avatar, setAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert('Avatar saved!');
  };

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Avatar</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Change your profile photo/avatar.
      </p>

      {/* Avatar preview */}
      <div className="flex flex-col items-center space-y-4 mb-4">
        <img
          src={previewUrl || '/default-avatar.png'}
          alt="Avatar Preview"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm"
        />
      </div>

      {/* Save button */}
      <button
        onClick={handleSave}
        disabled={!avatar}
        className={`w-full py-2 px-4 rounded font-medium transition ${
          avatar
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Save Avatar
      </button>
    </div>
  );
};

export default Avatar;
