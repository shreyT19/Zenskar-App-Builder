import React from "react";
import "./App.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";

import Editor from "./pages/Editor";

import { useStore } from "./store/store";

const App = () => {
  const removeAllComponents = useStore((store) => store.removeAllComponents);
  const setCurrentTab = useStore((store) => store.setCurrentTab);

  return (
    <div className="App">
      <header className="h-[100px] flex items-center justify-between">
        <div className="flex items-center justify-center mx-8 gap-6">
          <GiHamburgerMenu className="text-2xl" />
          <div className="flex items-center justify-center">
            <p className="text-2xl tracking-wide text-gray-900">Design Board</p>
            <span className="text-gray-400 text-xl">(Draft)</span>
          </div>
        </div>
        <div className="flex mx-8 gap-4">
          <div className="flex items-center px-4 py-2">
            <span>81.2%</span>
            <span>
              <BiChevronDown />
            </span>
          </div>

          {/* <UtilityButton
            icon={<BsPlayFill />}
            text="Show Grids"
            textColor="rgb(22 101 52)"
            bgColor="rgb(134 239 172)"
          /> */}

          <UtilityButton
            icon={<BsPlayFill />}
            text="Preview"
            textColor="rgb(30 64 175 )"
            bgColor="rgb(191 219 254 )"
          />
          <UtilityButton
            icon={<BiReset />}
            text="Reset Board"
            onClick={() => {
              removeAllComponents();
              setCurrentTab("components");
            }}
            textColor="rgb(153 27 27)"
            bgColor="rgb(254 202 202)"
          />
        </div>
      </header>
      <DndProvider backend={HTML5Backend}>
        <Editor />
      </DndProvider>
    </div>
  );
};

export default App;

export const UtilityButton = ({ icon, text, onClick, textColor, bgColor,flex }) => {
  return (
    <button
      onClick={onClick}
      className="flex px-4 py-2 border hover:scale-[1.1] items-center rounded-xl
 transition-all"
      style={{ color: textColor, 
        backgroundColor: bgColor,
        flex:flex ? flex : "none" }}
    >
      <span className="mr-1">{icon}</span>
      <span>{text}</span>
    </button>
  );
};
