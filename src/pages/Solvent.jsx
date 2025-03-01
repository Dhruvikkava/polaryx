import React from "react";
import Progressbar from "../components/Progressbar";
import Custombanner from "../components/Custombanner";
import ProductCard from "../components/ProductCard";
import { productData } from "../constants";

const Solvent = () => {
  return (
    <div className="page-wrapper">
      <Progressbar />
      <Custombanner name="Solvents" heading={"Products"} />
      <div className="container">
        <h3 className="font-weight-600 my-5 text-center">Solvents</h3>
        <div className="row pe-4">
          {productData.map(
            (product) =>
              product?.page.includes("Solvents") && (
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

export default Solvent;
