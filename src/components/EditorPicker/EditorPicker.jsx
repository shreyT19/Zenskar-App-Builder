import React from 'react';
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";

import { useStore } from "../../store/store";
import ButtonProperty from "../ComponentProperties/ButtonProperty";
import DropDownProperty from "../ComponentProperties/DropDownProperty";
import TextInputProperty from "../ComponentProperties/TextInputProperty";
import TableProperty from "../ComponentProperties/TableProperty";


const EditorPicker = () => {
  const currentTab = useStore((store) => store.currentTab);
  const setCurrentTab = useStore((store) => store.setCurrentTab);

  return (
    <div className="editor-picker overflow-auto">
      <SearchBar />
      <div>
        <div className="flex gap-4 py-4">
          <ComponentTab currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <PropertiesTab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        <div>{currentTab === "components" && <ComponentCardsData />}</div>
        <div>{currentTab === "properties" && <PropertiesCardData />}</div>
      </div>
    </div>
  );
};

export default EditorPicker;

const ComponentCardsData = () => {
  const filteredComponents = useStore((store) => store.filteredComponents);
  return (
    <>
      {filteredComponents?.map((component, index) => {
        return (
          <CardComponent
            key={index}
            index={index}
            iconContent={component.iconContent}
            styles={component.styles}
            headDescription={component.headDescription}
            description={component.description}
            iconSvg={component.iconSvg}
          />
        );
      })}
    </>
  );
};

const PropertiesCardData = () => {
  const selectedComponent = useStore((store) => store.selectedComponent);
  const components = useStore((store) => store.components);
  // const setCurrentTab = useStore((store) => store.setCurrentTab);

  return (
    <div>
      {(!selectedComponent || components?.length === 0) && (
        <div className="h-40 px-4 flex justify-center items-center gap-4 border border-[#A0B8C789] py-4   rounded-xl mb-4 ">
          <p>Choose an element to edit.</p>
        </div>
      )}
      {components?.length > 0 && (
        <div>
          {selectedComponent?.component === "button" && <ButtonProperty />}
          {selectedComponent?.component === "textInput" && (
            <TextInputProperty />
          )}
          {selectedComponent?.component === "dropdown" && <DropDownProperty />}
          {selectedComponent?.component === "table" && <TableProperty />}
        </div>
      )}
    </div>
  );
};

const ComponentTab = ({ currentTab, setCurrentTab }) => {
  return (
    <p>
      <span
        className={
          currentTab === "components"
            ? "text-blue-500 font-semibold cursor-pointer"
            : "text-gray-500 font-semibold cursor-pointer"
        }
        onClick={() => setCurrentTab("components")}
      >
        Components
      </span>
    </p>
  );
};

const PropertiesTab = ({ currentTab, setCurrentTab }) => {
  return (
    <p>
      <span
        className={
          currentTab === "properties"
            ? "text-blue-500 font-semibold cursor-pointer"
            : "text-gray-500 font-semibold cursor-pointer"
        }
        onClick={() => setCurrentTab("properties")}
      >
        Properties
      </span>
    </p>
  );
};
