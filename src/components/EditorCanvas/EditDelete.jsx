import React, { useEffect, useMemo, useState } from "react";
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";

import { useStore } from "../../store/store";

const EditDelete = ({ data, componentId }) => {
  const setCurrentTab = useStore((store) => store.setCurrentTab);

  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  return (
    <div className=" flex gap-1 top-[6px] -right-[72.5px] absolute items-center justify-center transition-all cursor-pointer ">
      <div
        className="text-gray-800 bg-gray-200   p-2 rounded-xl shadow-lg hover:bg-gray-300"
        onClick={() => {
          setCurrentTab("properties");
          setSelectedComponent(data);
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        className=" p-2 rounded-xl shadow-lg bg-red-200 text-red-700 hover:bg-red-300"
        onClick={() => {
          setCurrentTab("components");
          deleteComponent(componentId);
        }}
      >
        <MdOutlineDelete />
      </div>
    </div>
  );
};

export default EditDelete;
