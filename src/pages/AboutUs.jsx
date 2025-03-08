import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Custombanner from "../components/Custombanner";
import ChemicalImg from "../images/about-chemical.jpg";
import MissionImg from "../images/mission.png";
import VisionImg from "../images/vision.png";
import Progressbar from "../components/Progressbar";
import ScrollToTop from "../components/ScrollToTop";
import Heading from "../components/Heading";

const AboutUs = () => {
  const strongPoints = [
    "High-Quality Products – We ensure top-tier quality in all our exports, meeting international standards.",
    "Wide Product Range – From chemicals and pharmaceuticals to spices, we offer a diverse range of products.",
    "Global Export Network – Trusted by clients worldwide, we have a strong international presence.",
    "Regulatory Compliance – All our products adhere to global safety and compliance regulations.",
    "Efficient Logistics – We ensure timely and hassle-free delivery with reliable shipping solutions.",
    "Competitive Pricing – Offering the best value without compromising on quality.",
    "Customer-Centric Approach – Our focus is on long-term partnerships with exceptional customer service.",
  ];
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Custombanner name="About Us" heading="About Us" />

      <div className="container mt-3 mt-md-4 mt-lg-5">
        <div className="row py-2 pb-md-2 py-lg-3 text-sm-center text-md-start text-lg-start">
          <div className="col-md-6">
            <h4 className="color-primary font-weight-600 mb-3">
              Welcome to Polaryx International{" "}
            </h4>
            <p className="text-justify mb-3 text-sm-center text-md-start">
              At <b>Polaryx International</b>, we are dedicated to redefining
              global trade by offering seamless export solutions with quality,
              reliability, and efficiency. With a strong commitment to
              excellence, we connect businesses worldwide with premium products
              across various industries, ensuring smooth transactions and timely
              deliveries.
            </p>
            <p className="text-justify mb-3 text-sm-center text-md-start">
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
          <div className="col-md-6 d-flex justify-content-end align-items-center px-0 ps-md-5">
            <img
              src={ChemicalImg}
              alt="chemical-image"
              className="w-100 border-radius-1 h-100 about-us-welcome-image mx-auto"
              style={{ borderRadius: "50px" }}
            />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <Heading content={"Global Presence"} />
        <Typography
          variant="body1"
          className="mx-auto text-center mb-4"
          sx={{ maxWidth: "800px" }}
        >
          At <b>Polaryx International</b>, we take pride in our strong global
          footprint. With a well-established network of clients and partners
          across multiple countries, we ensure seamless trade and supply of
          high-quality chemicals, pharmaceuticals, and spices worldwide.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 3,
                color: "white",
                p: 2,
                background: "#a1bcfb",
              }}
              className="h-100"
            >
              <CardContent className="py-0 global-card">
                <PublicIcon sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" className="mb-md-2 mb-lg-1">
                  Trusted Across Continents
                </Typography>
                <Typography variant="body2" className="color-white">
                  Serving industries in Asia, Europe, the Americas, and Africa
                  with reliability and precision.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 3,
                color: "white",
                p: 2,
                background: "#a1bcfb",
              }}
              className="h-100"
            >
              <CardContent className="py-0 global-card">
                <PublicIcon sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" className="mb-md-2 mb-lg-1">
                  Global Compliance
                </Typography>
                <Typography variant="body2" className="color-white">
                  We ensure all products adhere to international regulations for
                  quality and safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 3,
                color: "white",
                p: 2,
                background: "#a1bcfb",
              }}
              className="h-100"
            >
              <CardContent className="py-0 global-card">
                <PublicIcon sx={{ fontSize: 50, mb: 1 }} />
                <Typography variant="h6" className="mb-md-2 mb-lg-1">
                  Expanding Reach
                </Typography>
                <Typography variant="body2" className="color-white">
                  Strengthening relationships with global partners and adapting
                  to evolving market demands.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="mission-vision">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 pe-4 mb-3 mb-md-3 mb-lg-0 mission-card">
              <img
                className="mb-1"
                src={MissionImg}
                alt="mission"
                style={{ width: "48px" }}
              />
              <h4 className="mb-3">Mission</h4>
              <p className="mb-2 text-justify mission-card">
                Our mission is to build long-term partnerships by delivering
                trusted, efficient, and customized export solutions that meet
                the evolving needs of our global clients. We are committed to
                ensuring unmatched quality, reliability, and seamless trade
                experiences, enabling businesses to expand their reach with
                confidence.
              </p>
              <p className="mb-2 text-justify mission-card">
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
            <div className="col-md-6 ps-4 mission-card">
              <img
                className="mb-1"
                src={VisionImg}
                alt="mission"
                style={{ width: "48px" }}
              />
              <h4 className="mb-3">Vision</h4>
              <p className="mb-2 text-justify mission-card">
                Our vision is to redefine global trade by setting new standards
                in <b>efficiency, transparency, and sustainability</b>. We aim
                to build a future where international sourcing and exports are
                seamless, reliable, and accessible to businesses of all sizes.
              </p>
              <p className="mb-2 text-justify mission-card">
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
        <Heading content={"Our Strong Points"} />
        <Grid container spacing={3} justifyContent="center">
          {strongPoints.map((point, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="d-flex align-items-center h-100"
                sx={{
                  boxShadow: 3,
                  borderRadius: 3,
                  p: 2,
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CheckCircleIcon color="success" sx={{ fontSize: 32, mr: 2 }} />
                <CardContent className="p-0">
                  <Typography variant="body1">{point}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AboutUs;
