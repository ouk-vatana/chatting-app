import React, { useState } from 'react';

const Username = ({ onBack }) => {
  // Dummy initial values — replace with props or context if needed
  const [username, setUsername] = useState('current_username');
  const [email, setEmail] = useState('user@example.com');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your update logic here (API call, validation, etc.)
    console.log('Updated:', { username, email });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Username & Email</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        View or update your username and email address.
      </p>

      {saved && (
        <div className="mb-4 p-3 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded">
          Changes saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Username;
