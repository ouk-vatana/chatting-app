import React from 'react';

const Help = ({ onBack }) => {
  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Help & Support</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Need assistance? Browse frequently asked questions or contact our support team directly.
      </p>

      <div className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-semibold">🙋 How do I reset my password?</h3>
          <p className="text-sm">Go to Settings → Account → Change Password.</p>
        </div>

        <div>
          <h3 className="font-semibold">💬 How do I report a bug?</h3>
          <p className="text-sm">Use the "Report an issue" option in the app settings.</p>
        </div>

        <div>
          <h3 className="font-semibold">📱 Is there a mobile app available?</h3>
          <p className="text-sm">Yes, we're available on both Android and iOS stores.</p>
        </div>
      </div>

      <button
        onClick={() => alert('Redirecting to contact support...')}
        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition"
      >
        Contact Support
      </button>
    </div>
  );
};

export default Help;
