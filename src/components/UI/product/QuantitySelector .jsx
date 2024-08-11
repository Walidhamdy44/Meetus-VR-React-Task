import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
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
        <button className="add-to-cart">Add To Cart</button>
        <button className="pickup-from-store">Pickup From Store</button>
      </div>
    </div>
  );
};

export default QuantitySelector;
