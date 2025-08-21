import TextField from "@mui/material/TextField";
import React from "react";

const MyTextField = ({
  setValue,
  value,
  placeholder,
  name,
  label,
  labelBgColor = "#2A2F38",
  borderRadius = 8,
  required = true,
}) => {
  const MUITextFieldSx = {
    "& .MuiOutlinedInput-root": {
      fontSize: "18px",
      borderRadius: `${borderRadius}px`,
      color: "#ffffff",
      "& fieldset": {
        borderColor: "#ffffff",
      },
      "&:hover fieldset": {
        borderColor: "#4294FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4294FF",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "18px",
      color: "#4294FF",
      top: "50%",
      transform: "translate(14px, -50%)",
      transition: "all 0.2s ease",
      backgroundColor: labelBgColor,
      padding: "0 4px",
    },
    "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled":
      {
        transform: "translate(14px, -9px) scale(0.75)",
        padding: "0 4px",
      },
    "& .MuiOutlinedInput-input": {
      padding: "12px 18px",
    },
    "& .MuiInputLabel-shrink": {
      top: "0",
      transform: "translate(14px, -9px) scale(0.75)",
    },
  };
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required={required}
      id="standard-basic"
      variant="outlined"
      autoComplete="off"
      sx={MUITextFieldSx}
    />
  );
};

export default MyTextField;
