import React from "react";
import { FiSearch } from "react-icons/fi";

const MySearch = () => {
  return (
    <div className="relative w-2/5">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
      <input
        autoFocus
        type="text"
        placeholder="Search projects ..."
        className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-500 focus:border-[#2f4b77] focus:ring-1 focus:ring-[#2f4b77] outline-none text-gray-100 placeholder-gray-400 transition"
      />
    </div>
  );
};

export default MySearch;
