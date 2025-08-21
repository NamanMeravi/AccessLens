import React from "react";

const MyButton = ({
  children,
  bgColor = "#baedf2",
  textColor = "#162844",
  fontSize = "18",
  fontWeight = "500",
  disableTextColor = "#ffffff6e",
  disableBgColor = "#00000062",
  disabled = false,
}) => {
  return (
    <button
      disabled={true}
      style={{
        backgroundColor: disabled ? disableBgColor : bgColor,
        color: disabled ? disableTextColor : textColor,
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
      }}
      className={`p-2 rounded-xl cursor-pointer transition-colors duration-200 ${
        disabled ? "cursor-not-allowed opacity-70" : "hover:opacity-90"
      }`}
    >
      {children}
    </button>
  );
};

export default MyButton;
