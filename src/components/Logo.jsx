import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoImg from "../images/polaryx.svg";
import LogoFooterImg from "../images/polaryx-footer.svg";

const Logo = ({ className = "", isHeader = false }) => {
  const navigate = useNavigate();
  return (
    <div className={`${className}`}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        className="d-flex align-items-center"
        onClick={() => navigate("/")}
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
