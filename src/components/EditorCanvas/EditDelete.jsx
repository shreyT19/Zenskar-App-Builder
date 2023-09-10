import React, { useEffect, useMemo, useState } from "react";
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";

import { useStore } from "../../store/store";
import {toast} from 'react-toastify'

const EditDelete = ({ data, componentId, handleEdit, handleDelete }) => {
  const setCurrentTab = useStore((store) => store.setCurrentTab);

  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  return (
    <div className=" flex gap-1 top-[6px] -right-[72.5px] absolute items-center justify-center transition-all cursor-pointer ">
      <button
        data-testid="editBtn"
        className="text-gray-800 bg-gray-200   p-2 rounded-xl shadow-lg hover:bg-gray-300"
        onClick={() => {
          setCurrentTab("properties");
          setSelectedComponent(data);
          handleEdit(); // FOR TESTING
          
        }}
      >
        <MdModeEditOutline />
      </button>
      <button
      
        data-testid="deleteBtn"
        className=" p-2 rounded-xl shadow-lg bg-red-200 text-red-700 hover:bg-red-300"
        onClick={() => {
          setCurrentTab("components");
          deleteComponent(componentId);
          handleDelete(); // FOR TESTING
          toast.error('Component Deleted Successfully!', {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }}
      >
        <MdOutlineDelete />
      </button>
    </div>
  );
};

export default EditDelete;
