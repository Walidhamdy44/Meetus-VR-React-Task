import React from "react";
import NavBar from "../components/layout/Navbar/NavBar";
import BreadBack from "../components/UI/BreadBack";
import ProductDetails from "../components/UI/ProductDetails";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bread-container">
        <BreadBack />
      </div>
      <div className="prodcut-details ">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductPage;
