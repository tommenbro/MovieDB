import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-4 text-lg bottom-0 items-end justify-end">
      <a
        className="text-gray-300 text-md font-medium hover:text-white transition-all duration-300 ease-in-out"
        href="https://nakkerud.studio"
        target="_blank"
        rel="noreferrer"
      >
        Made by Nakkerud Studio, &copy; 2022
      </a>
    </div>
  );
};

export default Footer;
