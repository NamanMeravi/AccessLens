import Badge from "@mui/material/Badge";
import React from "react";

const MyBadge = ({
  children,
  badgeValue = 0,
  max = 9,
  bgColor = "#C0DADC",
  color = "162844",
}) => {
  return (
    <Badge
      badgeContent={badgeValue}
      max={max}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: bgColor,
          color: color,
          fontSize: "12px",
          fontWeight: "bold",
        },
      }}
    >
      {children}
    </Badge>
  );
};

export default MyBadge;
