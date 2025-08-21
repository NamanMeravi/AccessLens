import React from "react";
import { useState } from "react";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";

const Button2Icons = ({ handleOnClick, defaultIcon, hoverIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={handleOnClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-[26px] cursor-pointer hover:text-[#baedf2] text-[#C0DADC]"
    >
      {isHovered ? hoverIcon || defaultIcon : defaultIcon}
    </button>
  );
};

export default Button2Icons;
