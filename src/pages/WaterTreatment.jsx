import React from "react";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ProductCard from "../components/ProductCard";
import { productData } from "../constants";
import ScrollToTop from "../components/ScrollToTop";

const WaterTreatment = () => {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Custombanner name="Water Treatment" heading={"Products"} />
      <div className="container">
        <h3 className="font-weight-600 my-5 text-center">Water Treatment </h3>
        <div className="row pe-4">
          {productData.map(
            (product) =>
              product?.page.includes("Water Treatment") && (
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

export default WaterTreatment;
