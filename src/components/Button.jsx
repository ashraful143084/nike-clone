import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-5 px-7 py-4 border  text-lg bg-coral-red rounded-full border-coral-red text-white">
      {label}
      <img
        src={iconURL}
        alt="arrow-right"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
