import React from "react";
import { Link } from "react-router-dom";

const ProductItemBox = ({ item }) => {
  return (
    <div className="product-box">
      <div className="img">
        <div className="img-abs">
          <img src="/images/Group 338.svg" alt={item.description} />
        </div>
        <Link to={`/products/${item.id}`}>
          <img src={item.img} alt={item.description} />
        </Link>
      </div>
      <div className="text-1">
        <p>{item.title}</p>
        <div className="price-brand">
          <div className="price">
            <span>{item.price}</span>
            <div>
              <span>{item.oldPrice}</span>
              <span>50%</span>
            </div>
          </div>
          <div className="brand">
            <img src="/images/Group 346.svg" alt="adidas shirt" />
          </div>
        </div>
      </div>
      <div className="text-2">
        <div className="rate">
          <div>
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 369.svg" alt="adidas shirt" />
            <span>{item.rating} of 5</span>
          </div>

          <p>
            Pickup From:<span style={{ fontWeight: "bold" }}>Genena Mall</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemBox;
