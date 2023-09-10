import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "../components/EditorPicker/SearchBar";
import user from "@testing-library/user-event";

import { describe, expect, it } from "vitest";

describe("SearchBar", () => {
  it("should be able to search components e.g button", async () => {
    user.setup();
    render(<SearchBar />);
    const searchBarInput = screen.getByRole("textbox");
    // console.log(searchBarInput);
    expect(searchBarInput).toBeInTheDocument();
    await user.type(searchBarInput, "button");
    expect(searchBarInput).toHaveValue("button");
  });

  it("should be able to search components e.g textInput", async () => {
    user.setup();
    render(<SearchBar />);
    const searchBarInput = screen.getByRole("textbox");
    // console.log(searchBarInput);
    expect(searchBarInput).toBeInTheDocument();
    await user.type(searchBarInput, "textInput");
    expect(searchBarInput).toHaveValue("textInput");
  });

  it("should be able to search components e.g dropdown", async () => {
    user.setup();
    render(<SearchBar />);
    const searchBarInput = screen.getByRole("textbox");
    // console.log(searchBarInput);
    expect(searchBarInput).toBeInTheDocument();
    await user.type(searchBarInput, "dropdown");
    expect(searchBarInput).toHaveValue("dropdown");
  });
});
