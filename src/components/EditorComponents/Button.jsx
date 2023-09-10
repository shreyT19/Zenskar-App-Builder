import React from "react";

const ButtonComponent = ({ data }) => {
  const { buttonText, buttonColor, borderRadius, textColor } = data || [];

  return (
    <button
    data-testid="Button" // FOR TESTING
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
