import React from "react";
import ProductImage from "./product/ProductImage";
import ProductInfo from "./product/ProductInfo";

const ProductDetails = () => {
  return (
    <div className="container">
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

export default ProductDetails;
