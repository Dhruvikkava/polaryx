import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Heading from "../components/Heading";
import ChemicalImg from "../images/chemical1.jpg";
import PharmaImg from "../images/pharma1.jpg";
import MasalaImg from "../images/masala1.jpg";
import ChemicalDrumImg from "../images/chemical-drum.jpg";
import PartnershipImg from "../images/partnership.png";
import LogisticsImg from "../images/logistics.png";
import GlobalImg from "../images/global.png";
import ClientImg from "../images/layer1.png";
import ManufacturarImg from "../images/layer2.png";
import CountriesImg from "../images/layer3.png";
import CustomSlider from "../components/CustomSlider";
import ProductTab from "../components/ProductTab";
import Progressbar from "../components/Progressbar";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content d-flex justify-content-center align-items-center h-100">
          <div className="py-3 px-3">
            <h1 className="color-white mb-4">
              Reliable Global Sourcing & Export Solutions <br /> with Quality
              and Trust
            </h1>
            <p className="color-white hero-content-description fw-light mb-3">
              We offer reliable global sourcing and export solutions, ensuring
              quality <br /> trust, and seamless trade for businesses worldwide
            </p>
            <button
              className="hero-button d-flex justify-content-center align-items-center mx-auto"
              onClick={() => navigate("/about-us")}
            >
              <span>Explore More</span>{" "}
              <ChevronRightIcon
                className="ms-1"
                sx={{ width: 20, height: 20 }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="about-us container mt-3 mt-sm-5 mt-md-6">
        <div className="row about-flex">
          <div className="col-md-6 pe-4 d-flex justify-content-center pb-3 pb-sm-0">
            <div className="row about-us-image overflow-hidden w-100">
              <div className="col-6 p-0 position-relative">
                <div className="hero-overlay overlay-light"></div>
                <img src={ChemicalImg} alt="Chemical" />
              </div>
              <div className="col-6 p-0 right">
                <img src={PharmaImg} alt="Pharma" />
              </div>
              <div className="col-12 p-0 bottom">
                <img src={MasalaImg} alt="Masala" />
              </div>
            </div>
          </div>
          <div className="col-md-6 ps-4 d-flex flex-column justify-content-center pb-3">
            <h4 className="color-primary font-weight-600 mb-3">Who We Are </h4>
            <p className="mb-2 text-justify">
              <strong>Polaryx</strong> is your trusted global sourcing and
              export partner, delivering top-quality products with reliability,
              efficiency, and commitment to excellence.
            </p>
            <p className="mb-2 text-justify">
              With an extensive range of Hydrochloric Acid, Sulphuric Acid,
              Acetic Anhydride, and many more, we cater to diverse industrial
              needs, ensuring seamless trade and exceptional service worldwide.
            </p>
            <p className="mb-2 text-justify">
              Our strong supply chain network, stringent quality control, and
              customer-focused approach make us a preferred choice for
              businesses looking for dependable sourcing solutions.
            </p>
            <p className="mb-2 text-justify">
              Explore our diverse catalog, benefit from our industry expertise,
              and experience excellence in every shipment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-sm-5 mt-md-6 container">
        <div className="row">
          <div className="col-md-6 pe-4 d-flex flex-column justify-content-center pb-3 pb-sm-3 align-items-center align-items-md-start">
            <h4 className="color-primary font-weight-600 mb-3">
              Why Choose Us{" "}
            </h4>
            <h3 className="mb-2">Choose Polaryx for Quality and Reliability</h3>
            <p className="mb-3 text-justify text-center text-sm-center text-md-start">
              Polaryx is built on the pillars of trust and uncompromising
              quality. Our expertise and commitment to seamless global trade
              make us the perfect choice for your business growth.
            </p>
            <div className="why-choose-us-list">
              <div className="mb-1 d-flex align-items-center">
                <img
                  className="me-1"
                  src={PartnershipImg}
                  alt="Partnership"
                ></img>
                <p className="ms-2">Long-Term Partnership Approach</p>
              </div>
              <div className="mb-1 d-flex align-items-center">
                <img className="me-1" src={GlobalImg} alt="Global"></img>
                <p className="ms-2">Global Trade Expertise</p>
              </div>
              <div className="mb-1 d-flex align-items-center">
                <img className="me-1" src={LogisticsImg} alt="Logistics"></img>
                <p className="ms-2">Seamless Logistics & Timely Delivery</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="why-choose-us-image overflow-hidden ms-0 ms-md-3">
              <img className="h-100" src={ChemicalDrumImg} alt="Chemical" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-product">
        <div className="container py-3">
          <ProductTab />
        </div>
      </div>

      <div className="achievements container">
        <Heading content={"Achievements"} />
        <div className="row justify-content-center">
          {[
            {
              img: ClientImg,
              count: "18+",
              label: "Clients",
              textClass: "pe-1",
            },
            {
              img: ManufacturarImg,
              count: "20+",
              label: "Manufacturers",
              imgStyle: { width: "55px", height: "55px" },
            },
            { img: CountriesImg, count: "70+", label: "Countries" },
          ].map((item) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center flex-column">
                <div className="achievement-border-layer mb-3">
                  <div className="achievement-image-wrap h-100 d-flex justify-content-center align-items-center">
                    <img
                      className="achievement-image"
                      src={item.img}
                      alt={item.label}
                      style={item.imgStyle}
                    />
                  </div>
                </div>
                <h3 className="text-center mb-1 font-weight-600 achievement-text">
                  {item.count}
                </h3>
                <h5
                  className={`text-center mb-3 font-weight-600 achievement-text ${item?.textClass}`}
                >
                  {item.label}
                </h5>
              </div>
            );
          })}
        </div>
      </div>

      <div className="people-say mt-md-4 mt-lg-5">
        <div className="d-flex align-items-center">
          <div className="people-say-left"></div>
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
