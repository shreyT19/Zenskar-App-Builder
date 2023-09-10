import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditDelete from "../components/EditorCanvas/EditDelete";
import { describe, expect, vitest } from "vitest";
import { toast } from "react-toastify";
import user from "@testing-library/user-event";
import App from "../App";

describe("EditDelete", () => {
  it("To Check whether the handlers are called", async () => {
    user.setup();
    const editHandler = vitest.fn();
    const deleteHandler = vitest.fn();

    render(
      <EditDelete handleEdit={editHandler} handleDelete={deleteHandler} />
    );
    const deleteButton = screen.getByTestId("deleteBtn");
    const editButton = screen.getByTestId("editBtn");

    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();

    await user.click(deleteButton);
    await user.click(editButton);

    expect(deleteHandler).toHaveBeenCalledTimes(1);
    expect(editHandler).toHaveBeenCalledTimes(1);
  });

  it("should display a notification when a component is deleted successfully", async () => {
    const deleteHandler = vitest.fn();

    const toastSuccessMock = vitest
      .spyOn(toast, "success")
      .mockImplementation(() => {});

    render(<EditDelete handleDelete={deleteHandler} />);

    const deleteButton = screen.getByTestId("deleteBtn");
    expect(deleteButton).toBeInTheDocument();

    await user.click(deleteButton);

    expect(deleteHandler).toHaveBeenCalledTimes(1);

    waitFor(() => {
      expect(toastSuccessMock).toHaveTextContent(
        "Component Deleted Successfully!"
      );
    });

    toastSuccessMock.mockRestore();
  });
});
