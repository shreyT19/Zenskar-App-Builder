import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";

import { useStore } from "../../store/store";

import { componentsDetails } from "../../assets/componentsDetails";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const setFilteredComponents = useStore(
    (store) => store.setFilteredComponents
  );

  useEffect(() => {
    if (!searchQuery) {
      setFilteredComponents(componentsDetails);
      return;
    }

    const filteredComponents = componentsDetails.filter((comp) => {
      return comp?.headDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    setFilteredComponents(filteredComponents);
  }, [searchQuery]);

  return (
    <div>
      <div className="flex items-center relative rounded-xl border-2 border-gray-300">
        <GrSearch className="absolute ml-4 text-lg font-bolder cursor-pointer" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Components"
          className="w-full pr-4 py-2 pl-12 border-none rounded-xl outline-none text-gray-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
