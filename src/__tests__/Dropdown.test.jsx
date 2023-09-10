import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import DropdownComponent from "../components/EditorComponents/Dropdown";

describe("DropdownComponent", () => {
  //happy case

  it("renders dropdown with a valid data passed", () => {
    const data = {
      dropdownLabel: "Friends",
      dropdownOptions: ["Shrey", "Aryan", "Geet", "Preet", "Saurav"],
    };

    render(<DropdownComponent data={data} />);
    const dropdownElement = screen.getByRole("combobox");

    // console.log(dropdownElement.children[0].textContent);

    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toHaveTextContent(data.dropdownLabel);
    for (let i = 0; i < data.dropdownOptions.length; i++) {
      expect(dropdownElement).toHaveTextContent(data.dropdownOptions[i]);
    }
  });

  //null case

  it("renders dropdown with default values when no data is provided", () => {
    render(<DropdownComponent />);
    const dropdownElement = screen.getByRole("combobox");

    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toHaveTextContent("Select");
  });
});
