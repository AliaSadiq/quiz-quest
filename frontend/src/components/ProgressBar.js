import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full bg-gray-300 h-4 rounded-lg overflow-hidden">
      <div
        className="bg-red-500 h-full rounded-lg transition-width duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
