import React from "react";

import { MdDelete } from "react-icons/md";
import { LuSaveAll } from "react-icons/lu";


import { useStore } from "../../store/store";
import {toast} from 'react-toastify'
const TableProperty = () => {

  const setCurrentTab = useStore((store) => store.setCurrentTab);
  const setSelectedComponent = useStore((store) => store.setSelectedComponent);
  const selectedComponent = useStore((store) => store.selectedComponent);

  const updateComponent = useStore((store) => store.updateComponent);
  const deleteComponent = useStore((store) => store.deleteComponent);

  console.log(selectedComponent?.data?.data);

  const handleUpdateChange = () => {

  }
  const handleDeleteChange = () => {
    deleteComponent(selectedComponent?.i);
    setCurrentTab("components");
    toast.error("Table Deleted!", {
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

  // useEffect(()=>{   
  //   setTableData({
  //     tableData: selectedComponent?.data?.tableData,
  //   })
  // },[selectedComponent])

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
       Table
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

export default TableProperty;
