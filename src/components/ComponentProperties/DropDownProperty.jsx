import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";

import { MdDelete } from "react-icons/md";
import { LuSaveAll } from "react-icons/lu";

import {toast} from 'react-toastify'

const DropDownProperty = () => {
  
  const setCurrentTab = useStore((store) => store.setCurrentTab);
  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const selectedComponent = useStore((store) => store.selectedComponent);

  const updateComponent = useStore((store) => store.updateComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  const [dropdownData, setDropdownData] = useState({
    dropdownLabel: selectedComponent?.data?.dropdownLabel,
    dropdownOptions: selectedComponent?.data?.dropdownOptions,
  })

  const handleUpdateChange = () => {
    setSelectedComponent(dropdownData);
    updateComponent(selectedComponent?.i, dropdownData);
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
  }
  const handleDeleteChange = () => {
    deleteComponent(selectedComponent?.i);
    setCurrentTab("components");
    toast.error("Dropdown Deleted!", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(()=>{   
    setDropdownData({
      dropdownLabel: selectedComponent?.data?.dropdownLabel,
      dropdownOptions: selectedComponent?.data?.dropdownOptions,
    })
  },[selectedComponent])

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none">
            <div className="text-xs text-gray-400 ">Label</div>
            <input
              type="text"
              value={dropdownData?.dropdownLabel}
              onChange={(e) => setDropdownData({ ...dropdownData, dropdownLabel: e.target.value })}
            />
          </div>
        </div>
        {dropdownData?.dropdownOptions?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between border rounded-xl bg-white items-center py-1 px-3 border-gray-300 focus:outline-none"
            >
              <div className="text-xs text-gray-400 ">Option {index + 1}</div>
              <input
                key={index}
                type="text"
                value={item}
                onChange={(e) => {
                  const newOptions = [...dropdownData?.dropdownOptions];
                  newOptions[index] = e.target.value;
                  setDropdownData({ ...dropdownData, dropdownOptions: newOptions });
                }}
                className="-md p-1 focus:outline-none focus:ring-0 text-center "
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <button
          onClick={handleUpdateChange}
          className="bg-blue-600  text-white rounded-xl px-4 py-2 hover:bg-blue-500 flex items-center justify-center gap-2"
        >
          <LuSaveAll />
          Save
        </button>
        <button onClick={handleDeleteChange} className="bg-white border-blue-600 border text-blue-600 rounded-xl px-4 py-2 hover:bg-blue-100 flex items-center justify-center gap-2">
          <MdDelete />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DropDownProperty;
