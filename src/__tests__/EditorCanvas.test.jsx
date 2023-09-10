import React from "react";
import { render, screen } from "@testing-library/react";
import EditorCanvas from "../components/EditorCanvas/EditorCanvas";
import { describe, expect, it } from "vitest";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("EditorCanvas", () => {
  //react-dnd relies on a specific drag-and-drop context that it sets up using the <DndProvider> component.
  // to fix the error I wrapped EditorCanvas with DndProvider

  it("should render without crashing and display initial state", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <EditorCanvas />
      </DndProvider>
    );
    const dropTarget = screen.getByTestId("editor-canvas");

    const dragDropText = screen.queryByText(/Drag & drop components here.../i);

    expect(dropTarget).toBeInTheDocument();

    expect(dragDropText).toBeInTheDocument();
  });
});
