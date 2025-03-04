import React from "react";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ProductCard from "../components/ProductCard";
import { productData } from "../constants";
import ScrollToTop from "../components/ScrollToTop";

const FoodBeverage = () => {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Progressbar />
      <Custombanner name="Food & Beverages" heading={"Products"} />
      <div className="container">
        <h3 className="font-weight-600 my-5 text-center">Food & Beverages</h3>
        <div className="row pe-4">
          {productData.map(
            (product) =>
              product?.page.includes("Food & Beverages") && (
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

export default FoodBeverage;
