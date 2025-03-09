import React from "react";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ProductCard from "../components/ProductCard";
import { productData } from "../constants";
import ScrollToTop from "../components/ScrollToTop";

const Cosmetic = () => {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Custombanner name="Cosmetics and Personal Care" heading={"Products"} />
      <div className="container">
        <h2 className="font-weight-600 mt-4 mb-3 mt-md-4 mb-md-3 my-lg-4 mt-xl-5 text-center">
          Cosmetics and Personal Care
        </h2>
        <div className="row justify-content-center pe-4">
          {productData.map(
            (product) =>
              product?.page.includes("Cosmetic") && (
                <ProductCard
                  key={product.heading}
                  heading={product.heading}
                  descriptions={[product.description]}
                  id={product.id}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
