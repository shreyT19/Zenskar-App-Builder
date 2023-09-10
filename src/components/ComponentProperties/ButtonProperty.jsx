import React, { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { LuSaveAll } from "react-icons/lu";

import { useStore } from "../../store/store";
import {toast} from 'react-toastify'

const ButtonProperty = () => {
  const components = useStore((store) => store.components);
  const setCurrentTab = useStore((store) => store.setCurrentTab);
  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const selectedComponent = useStore((store) => store.selectedComponent);

  const updateComponent = useStore((store) => store.updateComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  const [buttonData, setButtonData] = useState({
    buttonText: selectedComponent?.data?.buttonText,
    buttonColor: selectedComponent?.data?.buttonColor,
    borderRadius: selectedComponent?.data?.borderRadius,
    textColor: selectedComponent?.data?.textColor,
  });

  const handleUpdateChange = () => {
    setSelectedComponent({ ...selectedComponent, data: buttonData });
    updateComponent(selectedComponent?.i, buttonData);
    setCurrentTab("components");
    toast.success("Details Updated Successfully!", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleDeleteChange = () => {
    deleteComponent(selectedComponent?.i);
    setCurrentTab("components");
    toast.error("Button Deleted!", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // console.log(selectedComponent);

  useEffect(() => {
    setButtonData({
      buttonText: selectedComponent?.data?.buttonText,
      buttonColor: selectedComponent?.data?.buttonColor,
      borderRadius: selectedComponent?.data?.borderRadius,
      textColor: selectedComponent?.data?.textColor,
    });
  }, [selectedComponent]);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Button Text</div>
          <input
            value={buttonData?.buttonText}
            onChange={(e) =>
              setButtonData({ ...buttonData, buttonText: e.target.value })
            }
            type="text"
            className="-md p-1 focus:outline-none focus:ring-0 text-center "
          />
        </div>
        <div className="flex relative justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Text Color</div>
          <input
            type="text"
            className="-md p-1 focus:outline-none focus:ring-0 text-center "
            value={buttonData?.textColor}
            onChange={(e) =>
              setButtonData({ ...buttonData, textColor: e.target.value })
            }
          />
          <input
            value={buttonData?.textColor}
            onChange={(e) =>
              setButtonData({ ...buttonData, textColor: e.target.value })
            }
            className="absolute right-4 w-8"
            type="color"
            name=""
            id=""
          />
        </div>
        <div className="flex relative justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Background Color</div>
          <input
            type="text"
            value={buttonData?.buttonColor}
            onChange={(e) =>
              setButtonData({ ...buttonData, buttonColor: e.target.value })
            }
            className="-md p-1 focus:outline-none focus:ring-0 text-center "
          />
          <input
            value={buttonData?.buttonColor}
            onChange={(e) =>
              setButtonData({ ...buttonData, buttonColor: e.target.value })
            }
            className="absolute right-4 w-8"
            type="color"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Border Radius</div>
          <input
            value={buttonData?.borderRadius}
            onChange={(e) =>
              setButtonData({ ...buttonData, borderRadius: e.target.value })
            }
            type="text"
            className="-md p-1 focus:outline-none focus:ring-0 text-center "
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <button
          onClick={handleUpdateChange}
          className="bg-blue-600  text-white rounded-xl px-4 py-2 hover:bg-blue-500 flex items-center justify-center gap-2"
        >
          <LuSaveAll />
          Save
        </button>
        <button
          onClick={handleDeleteChange}
          className="bg-white border-blue-600 border text-blue-600 rounded-xl px-4 py-2 hover:bg-blue-100 flex items-center justify-center gap-2"
        >
          <MdDelete />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ButtonProperty;
