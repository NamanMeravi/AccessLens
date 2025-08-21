import React from "react";

const MyIconButton = ({ handleOnClick, icon, children }) => {
  return (
    <button
      onClick={handleOnClick}
      className="group flex items-center gap-2 py-1 pl-1 pr-5 rounded-2xl bg-[#ffffff1b] cursor-pointer hover:bg-[#ffffff25]"
    >
      <span className="rounded-xl p-2.5 text-xl bg-[#142743] transition-colors group-hover:bg-transparent">
        {icon}
      </span>
      <span className="text-md font-semibold">{children}</span>
    </button>
  );
};

export default MyIconButton;
