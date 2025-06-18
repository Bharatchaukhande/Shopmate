import React from "react";
import "./Footer.css"; // Create this CSS file as shown below

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>T-Shirts</li>
            <li>Jackets</li>
            <li>Jeans</li>
            <li>Top Collection</li>
            <li>Shop All</li>
          </ul>
          <div className="currency-selector">
            <select>
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
            </select>
          </div>
        </div>

        <div className="footer-column">
          <h4>POLICIES</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Return & Refund Policy</li>
            <li>Terms of Service</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
          <li>Shopmate Pvt Ltd</li>
          <li>9185XXXXX (9:00 A.M. - 6:00 P.M.)</li>
          <li>Shopmate.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Shopmate Certified 2025</p>
        
      </div>
    </footer>
  );
};

export default Footer;
