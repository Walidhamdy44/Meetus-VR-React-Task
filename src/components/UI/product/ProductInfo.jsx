import React from "react";
import QuantitySelector from "./QuantitySelector ";

const ProductInfo = () => {
  return (
    <div className="info">
      <div className="price">
        <img src="/images/Group 346.svg" alt="adidas shirt" />
        <p>
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>
        <h3>Men</h3>
        <div className="rate">
          <div>
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 368.svg" alt="adidas shirt" />
            <img src="/images/Path 369.svg" alt="adidas shirt" />
          </div>
          <span>4.9 of 5</span>
          <span>22 Rates</span>
        </div>
        <div className="price-n">
          <span>
            9.999 <span>LE</span>
          </span>
          <span>11.99 LE</span>
          <span>30 % Off</span>
        </div>
      </div>
      <div className="size">
        <h2>Size</h2>
        <div className="select-size">
          <div>
            <input type="radio" id="size-s" name="size" value="S" />
            <label for="size-s">Small</label>
          </div>
          <div>
            <input type="radio" id="size-m" name="size" value="M" />
            <label for="size-m">Medum</label>
          </div>
          <div>
            <input type="radio" id="size-l" name="size" value="L" />
            <label for="size-l">Larg</label>
          </div>
          <div>
            <input type="radio" id="size-xl" name="size" value="XL" />
            <label for="size-xl">X Larg</label>
          </div>
          <div>
            <input type="radio" id="size-xx" name="size" value="XX" />
            <label for="size-xx">XX Larg</label>
          </div>
        </div>
      </div>
      <div className="color">
        <h2>Color</h2>
        <div className="select-color">
          <div>
            <input type="radio" id="black" name="color" value="black" />
            <label for="black">
              <img src="/images/Group 356.png" alt="coloer" />
            </label>
          </div>
          <div>
            <input type="radio" id="white" name="color" value="white" />
            <label for="white">
              <img src="/images/Group 354.png" alt="coloer" />
            </label>
          </div>
        </div>
      </div>
      <div className="add">
        <h2>Quantity</h2>
        <div>
          <QuantitySelector />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
