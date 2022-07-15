import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center w-full h-screen px-7">
        <div className="p-12 transition-all duration-300 bg-gray-800 drop-shadow-2xl rounded-3xl">
          <div className="flex flex-col items-center text-gray-700">
            <span className="block w-28 h-28 border-4 rounded-full shadow border-t-gray-800 animate-spin"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
