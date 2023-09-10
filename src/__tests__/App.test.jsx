import React from "react";
import { render, screen } from "@testing-library/react";
import App, { UtilityButton } from "../App";
import { describe, expect, vitest } from "vitest";
import user from "@testing-library/user-event";

describe("UtilityButton", () => {
  it("to check whether the utility button is working as expected or not", async () => {
    user.setup();
    const resetTestFunction = vitest.fn();

    render(<UtilityButton text="testButton" onClick={resetTestFunction} />);
    const button = screen.getByRole("button", { name: "testButton" });

    // console.log(button);
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(resetTestFunction).toHaveBeenCalledTimes(1);
  });
  it("To check toast notification is displayed when reset button is clicked", async () => {
    render(<App />);

    const resetBoardButton = screen.getByText("Reset Board");

    await user.click(resetBoardButton);

    await screen.findByText("Board Cleared!");
  });
});
