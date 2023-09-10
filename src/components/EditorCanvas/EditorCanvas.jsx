import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { v4 as uuid } from "uuid";

import ButtonComponent from "../EditorComponents/Button";
import DropdownComponent from "../EditorComponents/Dropdown";
import TextInputComponent from "../EditorComponents/TextInput";
import { useStore } from "../../store/store";
import EditDelete from "./EditDelete";
import TableComponent from "../EditorComponents/Table";
import { tableData } from "../../assets/tableData";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const EditorCanvas = () => {
  const components = useStore((store) => store.components);

  const setComponents = useStore((store) => store.setComponents);

  const setSelectedComponent = useStore((store) => store.setSelectedComponent);

  const setShowProperties = useStore((store) => store.setShowProperties);

  const updateResizeDraggedComponent = useStore(
    (store) => store.updateResizeDraggedComponent
  );

  const [showGrids, setShowGrids] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => {
      addComponent(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addComponent = (component) => {
    switch (component) {
      case 0:
        setComponents(generateLayoutItem("textInput", 8.5, 1.75));
        // setComponents(generateLayoutItem("textInput", 9,2));
        break;
      case 1:
        setComponents(generateLayoutItem("button", 2, 1.5));
        // setComponents(generateLayoutItem("button", 2, 2));
        break;
      case 2:
        setComponents(generateLayoutItem("dropdown", 4, 2));
        break;
      case 3:
        setComponents(generateLayoutItem("table", 10, 10));
        break;
      default:
        break;
    }
  };

  const generateLayoutItem = (type, w, h) => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    const newItem = {
      i: `${type}-${small_id}`,
      x: 0,
      y: 0,
      w,
      h,
      // minW: 1,
      // minH: 1.25,
      component: type,
      showProperties: false,
    };

    switch (type) {
      case "button":
        return {
          ...newItem,
          data: {
            buttonText: "Button",
            buttonColor: "#2563EB",
            borderRadius: "8",
            textColor: "#ffffff",
          },
        };
      case "textInput":
        return {
          ...newItem,
          data: {
            placeholder: "Enter text here",
            label: "Text Input Label:",
          },
        };
      case "dropdown":
        return {
          ...newItem,
          data: {
            dropdownLabel: "Select",
            dropdownOptions: ["Option 1", "Option 2", "Option 3", "Option 4"],
          },
        };
      case "table":
        return {
          ...newItem,
          data: {
            data: tableData,
          },
        };
      default:
        return newItem;
    }
  };

  const handleResizeStop = (layout, oldItem, newItem) => {
    updateResizeDraggedComponent(
      newItem.i,
      newItem.w,
      newItem.h,
      newItem.x,
      newItem.y
    );
    setShowGrids(false);
  };

  return (
    <div
      ref={drop}
      data-testid="editor-canvas" // FOR TESTING
      className={
        components?.length > 0
          ? `editor-canvas bg-gray-200 p-4 mb-6`
          : `editor-canvas bg-gray-200 text-center flex flex-1 justify-center items-center mb-6`
      }
    >
      <div className="overflow-y-scroll scroll-smooth flex flex-wrap ">
        {components?.length === 0 ? (
          <p className="text-gray-400 text-2xl tracking-wider">
            Drag & drop components here...
          </p>
        ) : (
          <div
            className="
          flex flex-wrap
          min-w-full min-h-[100vh]
          border-2 border-dashed border-gray-300
          relative items-center justify-center
          "
          >
            <div className="container mx-auto">
              <ResponsiveReactGridLayout
                layouts={{
                  lg: components,
                }}
                style={{
                  backgroundColor: "rgb(229 231 235 )",
                  overflow: "scroll",
                  height: "110vh",
                  width: "100%",
                }}
                rowHeight={20}
                preventCollision={false}
                verticalCompact={false}
                isResizable={true}
                isDraggable={true}
                compactType="none"
                containerPadding={[0, 0]}
                autoSize={true}
                cols={{ lg: 25, md: 25, sm: 25, xs: 25, xxs: 25 }}
                onDragStart={() => setShowGrids(true)}
                onResizeStart={() => setShowGrids(true)}
                resizeHandles={["se", "s", "e"]}
                onResizeStop={handleResizeStop}
                onDragStop={handleResizeStop}
              >
                {components?.map((comp) => {
                  return (
                    <div
                      key={comp.i}
                      onClick={() => {
                        setSelectedComponent(comp);
                        setShowGrids(false);
                      }}
                      className="ml-[1px] mt-[1px]"
                      style={{
                        width: `${comp.w * 20}px`,
                        height: `${comp.h * 20}px`,
                      }}
                      onMouseEnter={() => setShowProperties(comp?.i, true)}
                      onMouseLeave={() =>
                        setTimeout(() => {
                          setShowProperties(comp?.i, false);
                        }, 2000)
                      }
                    >
                      {comp.component === "button" ? (
                        <ButtonComponent data={comp?.data} />
                      ) : null}
                      {comp.component === "textInput" ? (
                        <TextInputComponent data={comp?.data} />
                      ) : null}
                      {comp.component === "dropdown" ? (
                        <DropdownComponent data={comp?.data} />
                      ) : null}
                      {comp.component === "table" ? (
                        <TableComponent data={comp?.data.data} />
                      ) : null}
                      {comp.showProperties && (
                        <EditDelete
                          handleEdit={() => console.log("edit")} // for testing
                          handleDelete={() => console.log("delete")} // FOR TESTING
                          componentId={comp?.i}
                          data={comp}
                        />
                      )}
                    </div>
                  );
                })}
              </ResponsiveReactGridLayout>

              {showGrids && (
                <div className="grid-overlay" data-testid="grid-overlay"></div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorCanvas;
