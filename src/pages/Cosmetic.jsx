import React from "react";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ProductCard from "../components/ProductCard";
import { productData } from "../constants";

const Cosmetic = () => {
  return (
    <div className="page-wrapper">
      <Progressbar />
      <Custombanner name="Cosmetics and Personal Care" heading={"Products"} />
      <div className="container">
        <h3 className="font-weight-600 my-5 text-center">
          Cosmetics and Personal Care
        </h3>
        <div className="row pe-4">
          {productData.map(
            (product) =>
              product?.page.includes("Cosmetic") && (
                <ProductCard
                  key={product.heading}
                  heading={product.heading}
                  descriptions={[product.description]}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
