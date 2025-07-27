import React, { useState } from 'react';

const Report = ({ onBack }) => {
  const [issue, setIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (issue.trim() === '') return;

    // Here you can add your API call or handling logic
    console.log('Reported issue:', issue);

    setSubmitted(true);
    setIssue('');
  };

  return (
    <div className="p-6 text-black dark:text-white max-w-md">
      <button
        onClick={onBack}
        className="text-black dark:text-white text-sm mb-6 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Report a Problem</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Submit any issues or bugs you’re experiencing.
      </p>

      {submitted ? (
        <div className="p-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 rounded mb-4">
          Thank you! Your report has been submitted.
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          rows={5}
          placeholder="Describe the problem here..."
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
