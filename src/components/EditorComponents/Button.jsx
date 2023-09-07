import React from "react";

const ButtonComponent = ({ data, onMouseEnter, onMouseLeave }) => {
  const { buttonText, buttonColor, borderRadius, textColor } = data || [];

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="transition-all  rounded text-center  h-full w-full"
      style={{
        backgroundColor: buttonColor || "",
        borderRadius: borderRadius || "",
        color: textColor || "",
      }}
    >
      {buttonText || "Button"}
    </button>
  );
};

export default ButtonComponent;
