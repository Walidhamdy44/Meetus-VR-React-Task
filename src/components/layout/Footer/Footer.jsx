import React from "react";
import Rights from "./Rights";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-1">
          <img src="/images/Group 1436.svg" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laot
          </p>
          <p>
            vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed dia m nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut
          </p>

          <p>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio
          </p>
        </div>
        <div className="footer-2">
          <p>Subscribe to our newsletter</p>
          <div className="inp">
            <input type="text" placeholder="Enter Your Email" />
            <div className="send-btn">
              Subscribe
              <img src="/images/Group 1431.svg" alt="subscribe" />
            </div>
          </div>
          <div className="links">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Press Releases</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li>
                <img src="/images/Group 1432.svg" alt="facebock" />
                <span>/YESHTRY</span>
              </li>
              <li>
                <img src="/images/Group 1433.svg" alt="facebock" />
                <span>/YESHTRY</span>
              </li>
              <li>
                <img src="/images/Group 1434.svg" alt="facebock" />
                <span>/YESHTRY</span>
              </li>
              <li>
                <img src="/images/Group 1432.svg" alt="facebock" />
                <span>/YESHTRY</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Rights />
    </div>
  );
};

export default Footer;
