import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { MUITextFieldSx } from "../../styles/MUITextFieldSx";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const MyTextFieldPassword = ({ setValue, value, placeholder, name, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
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
