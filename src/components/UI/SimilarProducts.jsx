import React from "react";
import ProductItemBox from "./ProductItemBox";

// Get Dummy Data
import { data } from "../../api/data";

const SimilarProducts = () => {
  return (
    <div className="products container">
      <div className="head">
        <h2>Similar Products</h2>
        <p>You may like these products also</p>
      </div>
      <div className="products-container">
        {
          // Mapping For All Fike Data -->
          data.map((item, index) => {
            return <ProductItemBox item={item} key={index} />;
          })
        }
      </div>
    </div>
  );
};

export default SimilarProducts;
