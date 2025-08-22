import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const MyTextFieldPassword = ({
  setValue,
  value,
  placeholder,
  name,
  label,
  borderRadius = 8,
  labelBgColor = "#2A2F38",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

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
      fontSize: "20px",
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
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: "#ffffff" }} />
              ) : (
                <Visibility sx={{ color: "#ffffff" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      required
      id="standard-basic"
      variant="outlined"
      autoComplete="off"
      sx={MUITextFieldSx}
    />
  );
};

export default MyTextFieldPassword;
