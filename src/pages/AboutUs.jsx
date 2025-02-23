import React from "react";
import Custombanner from "../components/Custombanner";
import ChemicalImg from "../images/about-chemical.jpg";
import MissionImg from "../images/mission.png";
import VisionImg from "../images/vision.png";
import Heading from "../components/Heading";
import UserImg from "../images/user.png";
import Progressbar from "../components/Progressbar";

const AboutUs = () => {
  return (
    <div className="page-wrapper">
      <Progressbar />
      <Custombanner name="About Us" heading="About Us" />

      <div className="container my-5">
        <div className="row py-3">
          <div className="col-md-6">
            <h4 className="color-primary font-weight-600 mb-3">
              Welcome to Polaryx International{" "}
            </h4>
            <p className="text-justify mb-3">
              At <b>Polaryx International</b>, we are dedicated to redefining
              global trade by offering seamless export solutions with quality,
              reliability, and efficiency. With a strong commitment to
              excellence, we connect businesses worldwide with premium products
              across various industries, ensuring smooth transactions and timely
              deliveries.
            </p>
            <p className="text-justify mb-3">
              As a trusted export partner, we specialize in{" "}
              <b>
                chemicals, pharmaceuticals, cosmetics, and industrial raw
                materials,
              </b>{" "}
              catering to diverse business needs with a customer-centric
              approach. Our expertise in global sourcing, logistics, and
              compliance makes us a one-stop solution for businesses looking to
              expand their reach and streamline their supply chains.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end ps-5">
            <img
              src={ChemicalImg}
              alt="chemical-image"
              className="w-100 border-radius-1"
              style={{ borderRadius: "50px" }}
            />
          </div>
        </div>
      </div>

      <div className="mission-vision">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 pe-4">
              <img
                className="mb-1"
                src={MissionImg}
                alt="mission"
                style={{ width: "48px" }}
              />
              <h4 className="mb-3">Mission</h4>
              <p className="mb-2 text-justify">
                Our mission is to build long-term partnerships by delivering
                trusted, efficient, and customized export solutions that meet
                the evolving needs of our global clients. We are committed to
                ensuring unmatched quality, reliability, and seamless trade
                experiences, enabling businesses to expand their reach with
                confidence.
              </p>
              <p className="mb-2 text-justify">
                Through our{" "}
                <b>
                  {" "}
                  customer-centric approach, innovative logistics, and strict
                  quality control,
                </b>{" "}
                we simplify international trade, making it more transparent,
                efficient, and profitable
              </p>
            </div>
            <div className="col-md-6 ps-4">
              <img
                className="mb-1"
                src={VisionImg}
                alt="mission"
                style={{ width: "48px" }}
              />
              <h4 className="mb-3">Vision</h4>
              <p className="mb-2 text-justify">
                Our vision is to redefine global trade by setting new standards
                in <b>efficiency, transparency, and sustainability</b>. We aim
                to build a future where international sourcing and exports are
                seamless, reliable, and accessible to businesses of all sizes.
              </p>
              <p className="mb-2 text-justify">
                We envision a world where businesses trust in supply chains,
                where quality is never compromised, and where innovation drives
                global commerce forward. By leveraging{" "}
                <b>
                  cutting-edge technology, strategic partnerships, and
                  customer-focused solutions.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Heading content={"Our Team"} />
        <div className="row justify-content-center">
          <div className="col-md-3 mb-3 d-flex flex-column align-items-center">
            <img
              src={UserImg}
              className="mb-2"
              alt="user"
              style={{ width: "160px" }}
            />
            <h5 className="mb-2">Utsav Kava</h5>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-3 mb-3 d-flex flex-column align-items-center">
            <img
              src={UserImg}
              className="mb-2"
              alt="user"
              style={{ width: "160px" }}
            />
            <h5 className="mb-2">Abhishek Kava</h5>
            <p>Chief Operating Officer (COO)</p>
          </div>
          <div className="col-md-3 mb-3 d-flex flex-column align-items-center">
            <img
              src={UserImg}
              className="mb-2"
              alt="user"
              style={{ width: "160px" }}
            />
            <h5 className="mb-2">Dhruvik Kava</h5>
            <p>Chief Marketing Officer (CMO)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
