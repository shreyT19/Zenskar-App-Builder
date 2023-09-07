import React from "react";
import "./Editor.css";

import EditorCanvas from "../components/EditorCanvas/EditorCanvas";
import EditorPicker from "../components/EditorPicker/EditorPicker";

const Editor = () => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
