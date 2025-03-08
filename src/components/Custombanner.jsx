import React from "react";
import Breadcrumb from "./Breadcrumb";
import CurveLineImg from "../images/curve-line.png";
import PlantImg from "../images/plant.png";
import Cloud1Img from "../images/cloud1.png";
import Cloud2Img from "../images/cloud2.png";

const Custombanner = ({ name, heading }) => {
  return (
    <div className="custom-banner d-flex justify-content-center flex-column position-relative overflow-hidden">
      <div className="container position-relative z-2">
        <h1 className="mb-2">{heading}</h1>
        <Breadcrumb name={name} />
      </div>
      <img
        src={CurveLineImg}
        alt="curve-line"
        className="curve-line position-absolute"
      />
      <img
        src={PlantImg}
        alt="product-image"
        className="position-absolute cloud plant-img"
      />
      <img
        src={Cloud1Img}
        alt="product-image"
        className="position-absolute cloud cloud1-img"
      />
      <img
        src={Cloud2Img}
        alt="product-image"
        className="position-absolute cloud cloud2-img"
      />
    </div>
  );
};

export default Custombanner;
