import React from "react";
import { render, screen } from "@testing-library/react";
import TextInputComponent from "../components/EditorComponents/TextInput";
import { describe, expect } from "vitest";

import user from "@testing-library/user-event";

describe("TextInputComponent", () => {
  //happy case
  it("renders text input with a valid data passed", () => {
    const data = {
      placeholder: "Enter text",
      label: "Text Input Label:",
    };

    render(<TextInputComponent data={data} />);

    const labelElement = screen.getByText(data?.label);
    const textInputElement = screen.getByPlaceholderText(data?.placeholder);

    expect(labelElement).toBeInTheDocument();
    expect(textInputElement).toBeInTheDocument();

    expect(textInputElement).toHaveAttribute("placeholder", data?.placeholder);
    expect(labelElement).toHaveTextContent(data?.label);
  });

  //null case
  it("renders text input with default values when no data is provided", () => {
    render(<TextInputComponent />);

    const labelElement = screen.getByText("Text Input Label:");
    const textInputElement = screen.getByPlaceholderText("Enter text here");

    expect(labelElement).toBeInTheDocument();
    expect(textInputElement).toBeInTheDocument();

    expect(textInputElement).toHaveAttribute("placeholder", "Enter text here");
    expect(labelElement).toHaveTextContent("Text Input Label:");
  });

  it("render text in the input box", async () => {
    user.setup();
    render(<TextInputComponent />);
    const inputBox = screen.getByRole("textbox");

    expect(inputBox).toBeInTheDocument();
    await user.type(inputBox, "Hello World");
    expect(inputBox).toHaveValue("Hello World");
  });

  it("render only text type in the input box", async () => {
    render(<TextInputComponent />);
    const inputBox = screen.getByRole("textbox");

    expect(inputBox).toBeInTheDocument();
    expect(inputBox).toHaveAttribute("type", "text");
  });
});
