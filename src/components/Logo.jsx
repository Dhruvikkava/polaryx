import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoImg from "../images/polaryx.png";

const Logo = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <div className={`${className}`}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        className="d-flex align-items-center cursor-pointer"
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
        <img className="logo-image" src={LogoImg} alt="logo" />
        <p className="fw-bold ms-1 logo-image-text">Polaryx</p>
      </Typography>
    </div>
  );
};

export default Logo;
