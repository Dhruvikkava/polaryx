import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LinkedIn from "../images/linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.svg";
import Logo from "./Logo";
import { email } from "../constants";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClickUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <footer
        className={`footer py-4 ${
          location.pathname.includes("products") && "mt-2"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 mb-xs-3 mb-3 mb-md-3">
              <Logo className="mb-xs-2 mb-2 mb-md-2 mb-lg-3" isHeader={false} />
              <p className="mb-xs-2 mb-2 mb-md-2 mb-lg-3">
                ISO 9001:2015 Certified Company
              </p>
              <div className="d-flex">
                <div
                  className="social-icon-wrap cursor-pointer"
                  onClick={() =>
                    handleClickUrl(
                      "https://www.linkedin.com/company/polaryx-international/"
                    )
                  }
                >
                  <img src={LinkedIn} alt="linkedin" className="social-icon" />
                </div>
                <div
                  className="social-icon-wrap cursor-pointer"
                  onClick={() =>
                    handleClickUrl(
                      "https://www.facebook.com/profile.php?id=61573617297045"
                    )
                  }
                >
                  <img src={Facebook} alt="facebook" className="social-icon" />
                </div>
                <div
                  className="social-icon-wrap cursor-pointer"
                  onClick={() =>
                    handleClickUrl("https://www.instagram.com/polaryx_int/")
                  }
                >
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="social-icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-xs-3 mb-3 mb-md-3">
              <h5 className="mb-3 font-weight-600">Get In Touch</h5>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <RoomIcon className="color-mat-black" />
                <p className="ms-2">Surat, Gujarat, India</p>
              </div>
              <div className="d-flex align-items-start mb-1 mb-md-1 mb-lg-3">
                <PhoneIcon className="color-mat-black" />
                <div className="d-flex flex-wrap ms-2">
                  <a href="tel:+918013031369" className="footer-link pe-3">
                    +91 8013031369
                  </a>
                  <a
                    href="tel:+919016106665"
                    className="footer-link pe-3 pe-md-3"
                  >
                    +91 9016106665
                  </a>
                  <a href="tel:+919106295758" className="footer-link">
                    +91 9106295758
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <EmailIcon className="color-mat-black" />
                <a href={`mailto:${email}`} className="footer-link ms-2 mb-1">
                  {email}
                </a>
              </div>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <LanguageIcon className="color-mat-black" />
                <p className="ms-2">www.polaryxinternational.com</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 mb-3 mb-md-0">
              <h5 className="mb-3 font-weight-600">Quick Links</h5>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <DoubleArrowIcon className="color-mat-black" />
                <p
                  className="ms-2 underline-hover cursor-pointer"
                  onClick={() => handleNavigate("/")}
                >
                  Home
                </p>
              </div>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <DoubleArrowIcon className="color-mat-black" />
                <p
                  className="ms-2 underline-hover cursor-pointer"
                  onClick={() => handleNavigate("/about-us")}
                >
                  About Us
                </p>
              </div>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <DoubleArrowIcon className="color-mat-black" />
                <p
                  className="ms-2 underline-hover cursor-pointer"
                  onClick={() => handleNavigate("/about-us")}
                >
                  Products
                </p>
              </div>
              <div className="d-flex align-items-center mb-1 mb-sm-1 mb-md-1 mb-lg-3">
                <DoubleArrowIcon className="color-mat-black" />
                <p
                  className="ms-2 underline-hover cursor-pointer"
                  onClick={() => handleNavigate("/contact-us")}
                >
                  Contact Us
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h5 className="mb-3 font-weight-600">Our Mission</h5>
              <p>
                Building long-term partnerships by providing trusted, efficient,
                and tailored export solutions, ensuring quality, reliability,
                and seamless global trade for our clients.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom bg-primary2 d-flex justify-content-center align-items-center p-4">
        <p className="d-flex flex-wrap justify-content-center">
          <p>
            © {new Date().getFullYear()} Polaryx International. All Rights
            Reserved. |
          </p>
          <p
            className="ms-2 cursor-pointer"
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </p>
        </p>
      </div>
    </>
  );
};

export default Footer;
