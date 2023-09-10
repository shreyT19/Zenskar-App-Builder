import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonComponent from "../components/EditorComponents/Button";
import { describe, expect } from "vitest";

describe("ButtonComponent", () => {
  //happy case

  it("renders button with a valid data passed", () => {
    const data = {
      buttonText: "Click Me",
      buttonColor: "#000",
      borderRadius: "5px",
      textColor: "#fff",
    };

    render(<ButtonComponent data={data} />);

    const buttonElement = screen.getByRole("button", { name: data.buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle(`background-color:  ${data.buttonColor}`);
    expect(buttonElement).toHaveStyle(`border-radius: ${data.borderRadius}`);
    expect(buttonElement).toHaveStyle(`color: ${data.textColor}`);
  });

  //null case

  it("renders button with default values when no data is provided", () => {
    render(<ButtonComponent />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toHaveStyle('background-color: ""');
    expect(buttonElement).not.toHaveStyle('border-radius: ""');
    expect(buttonElement).not.toHaveStyle('color: ""');
  });
});
