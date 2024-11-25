import React from "react";

const GreetingCard = ({ title, message }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mt-6 border border-gray-300 max-w-sm mx-auto">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  );
};

export default GreetingCard;
