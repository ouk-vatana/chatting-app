import React from 'react';

const Legal = ({ onBack }) => {
  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Legal & Policies</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Learn more about our legal terms and how we protect your rights and data.
      </p>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-semibold">📜 Terms of Service</h3>
          <p className="text-sm">
            By using our app, you agree to abide by our terms. Read the full document to understand your rights and responsibilities.
          </p>
          <a href="/legal/terms" className="text-green-600 hover:underline text-sm">
            View Terms of Service
          </a>
        </div>

        <div>
          <h3 className="font-semibold">🔐 Privacy Policy</h3>
          <p className="text-sm">
            Learn how we collect, use, and safeguard your personal information.
          </p>
          <a href="/legal/privacy" className="text-green-600 hover:underline text-sm">
            View Privacy Policy
          </a>
        </div>

        <div>
          <h3 className="font-semibold">⚖️ Community Guidelines</h3>
          <p className="text-sm">
            Help us maintain a respectful and safe environment for everyone.
          </p>
          <a href="/legal/guidelines" className="text-green-600 hover:underline text-sm">
            View Guidelines
          </a>
        </div>
      </div>
    </div>
  );
};

export default Legal;
