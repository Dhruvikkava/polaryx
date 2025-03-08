import React from "react";
import Slider from "react-slick";
import { Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import StarIcon from "@mui/icons-material/Star";
import People1Img from "../images/people1.png";
import People2Img from "../images/people2.png";
import People3Img from "../images/people3.png";

const images = [
  {
    img: People1Img,
    name: "Marvin McKinney",
    description:
      "We have never faced any delays or quality issues with Polaryx. Their dedication to excellence and customer satisfaction is truly commendable.",
  },
  {
    img: People2Img,
    name: "Cameron Williamson",
    description:
      "Polaryx offers a great combination of competitive pricing and premium-quality products. Their expertise in global trade makes them a go-to choice for businesses like ours.",
  },
  {
    img: People3Img,
    name: "Timmy Owens",
    description:
      "With Polaryx, we are confident in every shipment. Their expertise and reliability give us peace of mind, knowing that our sourcing needs are in good hands.",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <TrendingFlatIcon />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <TrendingFlatIcon sx={{ transform: "rotate(180deg)" }} />
  </div>
);

const CustomSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container home-slider position-relative ps-lg-2 ps-xl-5 py-3">
      <h2 className="heading ps-3 py-3">What Our People Say</h2>
      <p className="ps-3 mb-4">
        Hear from our satisfied clients and partners about their experience with
        Polaryx.
      </p>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slide mb-3">
            <Card
              className="mx-3"
              sx={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
            >
              <CardActionArea>
                <CardContent>
                  <div className="d-flex align-items-center slider-head mb-3">
                    <img
                      src={item.img}
                      alt="people"
                      loading="lazy"
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                    <div className="ms-3">
                      <h5 className="mb-2">{item.name}</h5>
                      <Rating
                        name="hover-feedback"
                        value={index === 2 ? 4 : 5}
                        precision={1}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                        readOnly
                        size="small"
                      />
                    </div>
                  </div>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
