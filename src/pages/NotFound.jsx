import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../images/not-found-banner.svg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <div className="not-found-page d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex">
            <div className="left-content">
              <img
                alt="Module Not Found"
                loading="lazy"
                width="800"
                height="600"
                src={NotFoundImg}
              />
            </div>
            <div className="right-content">
              <h1>404</h1>
              <h2 className="mb-3">Oops! You're lost.</h2>
              <p className="mb-4">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <button
                className="hero-button px-4"
                onClick={() => navigate("/")}
              >
                <span>Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
