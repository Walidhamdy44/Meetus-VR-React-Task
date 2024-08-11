import React from "react";
import { Link } from "react-router-dom";

const PreNav = () => {
  return (
    <div className="prenav">
      <div className="container">
        <div className="prenav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src="/images/Group 769.svg" alt="logo Nasnav logo" />
        </div>
        <div className="prenav-text">
          <span>&lt;</span>
          <p>Valentine’s Day Offers! Buy Two Get One Free Shop Now</p>
          <Link to="#">Shop Now</Link>
          <span>&gt;</span>
        </div>

        <div className="prenav-links">
          <ul>
            <li>
              <img src="/images/Group 756.svg" alt="Contact Nasnav logo" />
              <span>Contact Us</span>
            </li>
            <li>
              <img src="/images/Group 758.svg" alt="Order Nasnav logo" />

              <span>Track Order</span>
            </li>
            <li>
              <img src="/images/Group 753.svg" alt="Store Nasnav logo" />

              <span>Find A Store</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreNav;
