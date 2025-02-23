import React from "react";
import { Typography } from "@mui/material";

const Logo = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#303741",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </div>
  );
};

export default Logo;
