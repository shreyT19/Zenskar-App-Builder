import React from "react";

const DropdownComponent = ({ data }) => {
  const { dropdownLabel, dropdownOptions } = data || [];

  return (
    <div className="p-2 h-full w-full">
      <select className=" appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-violet-500 h-full w-full">
        <option value="" className="text-center ">
          -- {dropdownLabel || "Select"} --
        </option>
        {dropdownOptions?.map((option, index) => {
          return (
            <option
              key={index}
              className="list-none bg-gray-100 text-center"
              value={option || "option"}
            >
              {option || "option"}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownComponent;
