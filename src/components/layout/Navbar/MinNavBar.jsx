import React, { useState, useContext } from "react";
import { Context } from "../../../services/providers/ContextProvider";

const MinNavBar = () => {
  const { items, updateItems } = useContext(Context);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    updateItems(updatedItems);
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="main-nav">
        <div className="inp">
          <input type="text" placeholder=" Search " />
        </div>
        <div className="logo">
          <img src="/images/Group 745.svg" alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="cart" onClick={toggleCart}>
              <span className="cart-number">{items.length}</span>
              <img src="/images/Path 772.svg" alt="Cart icon" />
              <span>Cart</span>
            </li>
            <li>
              <img src="/images/Path 771.svg" alt="Wishlist icon" />
              <span>Wishlist</span>
            </li>
            <li>
              <img src="/images/Path 773.svg" alt="Login icon" />
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-head">
          <h2>Your Cart</h2>
          <div className="close-btn" onClick={toggleCart}>
            X
          </div>
        </div>
        <div>
          <h4>Cart Summary</h4>
        </div>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="img">
              <img src="/images/img1.webp" alt="item" />
            </div>
            <div className="price">
              <p>
                Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                adipiscing
              </p>
              <div className="price-1">
                <div className="price-2">
                  <span>
                    Quantity: <span>{item.quantity}</span>
                  </span>
                  <span>9.999 LE</span>
                </div>
                <div className="remove">
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          Total: <span>22.99 LE</span>
        </div>
      </div>
    </div>
  );
};

export default MinNavBar;
