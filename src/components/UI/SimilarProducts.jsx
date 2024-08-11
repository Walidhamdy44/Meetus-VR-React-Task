import React, { Suspense, lazy } from "react";
// Get Dummy Data
import { data } from "../../services/api/data";
// Lazy load ProductItemBox
const ProductItemBox = lazy(() => import("./ProductItemBox"));

const SimilarProducts = () => {
  return (
    <div className="products container">
      <div className="head">
        <h2>Similar Products</h2>
        <p>You may like these products also</p>
      </div>
      <div className="products-container">
        <Suspense fallback={<div>Loading...</div>}>
          {
            // Mapping For All Fike Data -->
            data.map((item, index) => {
              return <ProductItemBox item={item} key={index} />;
            })
          }
        </Suspense>
      </div>
    </div>
  );
};

export default SimilarProducts;
