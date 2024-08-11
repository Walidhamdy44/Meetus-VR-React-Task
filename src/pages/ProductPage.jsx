import React from "react";
import NavBar from "../components/layout/Navbar/NavBar";
import BreadBack from "../components/UI/BreadBack";
import ProductDetails from "../components/UI/ProductDetails";
import SimilarProducts from "../components/UI/SimilarProducts";
import Footer from "../components/layout/Footer/Footer";

const ProductPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div className="bread-container">
        <BreadBack />
      </div>
      <div className="prodcut-details ">
        <ProductDetails />
      </div>
      <SimilarProducts />
      <Footer />
    </div>
  );
};

export default ProductPage;
