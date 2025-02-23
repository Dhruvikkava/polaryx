import React from "react";

const ProductCard = ({ heading, descriptions = [] }) => {
  return (
    <div className="col-md-4 mb-5 product-card-container position-relative d-flex">
      <div className="product-card d-flex justify-content-between flex-column">
        <div>
          <h4 className="mb-2">{heading}</h4>
          {descriptions?.map((item, index) => {
            return (
              <p className="product-card-desc text-justify mb-2" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <button className="hero-button ms-auto d-table">
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
