const MinNavBar = () => {
  return (
    <div className="container">
      <div className="main-nav">
        <div className="inp">
          <input type="text" placeholder=" Search " />
        </div>
        <div className="logo">
          <img src="/images/Group 745.svg" alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="cart">
              <span className="cart-number">0</span>
              <img src="/images/Path 772.svg" alt="Contact Nasnav logo" />
              <span>Cart</span>
            </li>
            <li>
              <img src="/images/Path 771.svg" alt="Order Nasnav logo" />

              <span>Wishlist</span>
            </li>
            <li>
              <img src="/images/Path 773.svg" alt="Store Nasnav logo" />

              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MinNavBar;
