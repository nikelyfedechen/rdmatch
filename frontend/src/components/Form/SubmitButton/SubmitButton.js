import React from 'react';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      className={`font-bold py-2 px-4 rounded ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed opacity-50'
          : 'bg-blue-500 hover:bg-blue-700 text-white'
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
