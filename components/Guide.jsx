import React from "react";

const Guide = () => {
  return (
    <div className="guide bg-slate-800">
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Status
      </h2>
      
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      <div className="options">
        <li>Pending</li>
        <li>Interview</li>
        <li>Waiting</li>
        </div>
      </ul>
    </div>
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Work Type
      </h2>
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      <div className="options">
        <li>Full Time</li>
        <li>Internship</li>
        <li>Part-time</li>
        </div>
      </ul>
      </div>
    </div>
  );
};

export default Guide;
