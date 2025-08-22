import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const MyButtonMain = ({ loading, ButtonText }) => {
  return (
    <Button
      disabled={loading}
      type="submit"
      variant="contained"
      disableElevation
      sx={{
        width: "100%",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: "500",
        color: "#ffffff",
        backgroundColor: "#4294FF",
        padding: "5px 10px",
        "&:hover": {
          backgroundColor: "#376CFB",
        },
        "&.Mui-disabled": {
          backgroundColor: "rgba(66, 148, 255, 0.5)", // 50% transparent
          color: "rgba(255, 255, 255, 0.7)", // lighter text
        },
      }}
    >
      {!loading ? (
        ButtonText
      ) : (
        <div className="flex content-center">
          <CircularProgress size="31px" color="inherit" />
        </div>
      )}
    </Button>
  );
};

export default MyButtonMain;
