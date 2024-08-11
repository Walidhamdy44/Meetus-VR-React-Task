import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../services/providers/ContextProvider";

const ProductInfo = () => {
  const { items, updateItems } = useContext(Context);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    const handleSizeChange = (event) => {
      setSize(event.target.value);
    };

    const handleColorChange = (event) => {
      setColor(event.target.value);
    };

    const addToCart = () => {
      const newItem = {
        id: Date.now(), // Unique ID for the item
        quantity,
        size,
        color,
      };
      updateItems([...items, newItem]);
      alert("Added to cart");
    };

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
              <input
                type="radio"
                id="size-s"
                name="size"
                value="S"
                onChange={handleSizeChange}
              />
              <label htmlFor="size-s">Small</label>
            </div>
            <div>
              <input
                type="radio"
                id="size-m"
                name="size"
                value="M"
                onChange={handleSizeChange}
              />
              <label htmlFor="size-m">Medium</label>
            </div>
            <div>
              <input
                type="radio"
                id="size-l"
                name="size"
                value="L"
                onChange={handleSizeChange}
              />
              <label htmlFor="size-l">Large</label>
            </div>
            <div>
              <input
                type="radio"
                id="size-xl"
                name="size"
                value="XL"
                onChange={handleSizeChange}
              />
              <label htmlFor="size-xl">X Large</label>
            </div>
            <div>
              <input
                type="radio"
                id="size-xx"
                name="size"
                value="XX"
                onChange={handleSizeChange}
              />
              <label htmlFor="size-xx">XX Large</label>
            </div>
          </div>
        </div>
        <div className="color">
          <h2>Color</h2>
          <div className="select-color">
            <div>
              <input
                type="radio"
                id="black"
                name="color"
                value="black"
                onChange={handleColorChange}
              />
              <label htmlFor="black">
                <img src="/images/Group 356.png" alt="color" />
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="white"
                name="color"
                value="white"
                onChange={handleColorChange}
              />
              <label htmlFor="white">
                <img src="/images/Group 354.png" alt="color" />
              </label>
            </div>
          </div>
        </div>
        <div className="add">
          <h2>Quantity</h2>
          <div>
            <div className="quantity-selector">
              <div className="counter">
                <button className="decrement" onClick={decrement}>
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button className="increment" onClick={increment}>
                  +
                </button>
              </div>
              <div className="actions">
                <button className="add-to-cart" onClick={addToCart}>
                  Add To Cart
                </button>
                <button className="pickup-from-store">Pickup From Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
export default ProductInfo;
