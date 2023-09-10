import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";

import { MdDelete } from "react-icons/md";
import { LuSaveAll } from "react-icons/lu";
import {toast} from 'react-toastify'

const TextInputProperty = () => {
  const components = useStore((store) => store.components);
  const setCurrentTab = useStore((store) => store.setCurrentTab);
  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const selectedComponent = useStore((store) => store.selectedComponent);

  const updateComponent = useStore((store) => store.updateComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  const [textInputData, setTextInputData] = useState({
    label: selectedComponent?.data?.label,
    placeholder: selectedComponent?.data?.placeholder,
  });

  const handleUpdateChange = () => {
    setSelectedComponent({ ...selectedComponent, data: textInputData });
    console.log(selectedComponent);
    updateComponent(selectedComponent?.i, textInputData);
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
    toast.error("Text Input Deleted!", {
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

  useEffect(()=>{   
    setTextInputData({
      label: selectedComponent?.data?.label,
      placeholder: selectedComponent?.data?.placeholder,
    })
  },[selectedComponent])

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Label</div>
          <input
            type="text"
            value={textInputData?.label}
            onChange={(e) =>
              setTextInputData({ ...textInputData, label: e.target.value })
            }
            className="-md p-1 focus:outline-none focus:ring-0 text-center "
          />
        </div>
        <div className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
          <div className="text-xs text-gray-400 ">Placeholder</div>
          <input
            type="text"
            value={textInputData?.placeholder}
            onChange={(e) =>
              setTextInputData({
                ...textInputData,
                placeholder: e.target.value,
              })
            }
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

export default TextInputProperty;
