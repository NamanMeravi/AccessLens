import TextField from "@mui/material/TextField";
import React from "react";
import { MUITextFieldSx } from "../../styles/MUITextFieldSx";

const MyTextField = ({ setValue, value, placeholder, name, label }) => {
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      id="standard-basic"
      variant="outlined"
      autoComplete="off"
      sx={MUITextFieldSx}
    />
  );
};

export default MyTextField;
