import React from "react";

const TextInputComponent = ({ data }) => {
  const { placeholder, label } = data || [];

  
  return (
    <div
     
      className="flex items-center w-full h-full gap-2 p-1"
    >
      <label className="block font-medium text-gray-700 whitespace-nowrap">
        {label || "Text Input Label:"}
      </label>
      <input
        className="appearance-none w-full h-full py-3 px-6  bg-white border border-gray-300 rounded  leading-tight focus:outline-none focus:border-violet-500 placeholder:opacity-75 hover:border-violet-800"
        type="text"
        placeholder={placeholder || "Enter text here"}
      />
    </div>
  );
};

export default TextInputComponent;
