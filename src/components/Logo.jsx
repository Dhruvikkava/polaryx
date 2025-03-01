import React from "react";
import { Typography } from "@mui/material";
import LogoImg from "../images/polaryx.svg";
import LogoFooterImg from "../images/polaryx-footer.svg";

const Logo = ({ className = "", isHeader = false }) => {
  return (
    <div className={`${className}`}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        className="d-flex align-items-center"
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
        <img
          className="logo-image"
          src={isHeader ? LogoImg : LogoFooterImg}
          alt="logo"
        />
        <p className="fw-bold ms-2 logo-image-text">Polaryx</p>
      </Typography>
    </div>
  );
};

export default Logo;
