import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f4f4f4", padding: "40px 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <div>
          <h4><strong>My Account</strong></h4>
          <p>My Account</p>
          <p>Address</p>
          <p>Wishlist</p>
        </div>

        <div>
          <h4><strong>Categories</strong></h4>
          <p>House Plants</p>
          <p>Potter Plants</p>
          <p>Seeds</p>
          <p>Small Plants</p>
          <p>Accessories</p>
        </div>

        <div>
          <h4><strong>Social Media</strong></h4>
          <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" width={24} />
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" width={24} />
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" width={24} />
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" width={24} />
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube" width={24} />
          </div>

          <h4><strong>We accept</strong></h4>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" width={36} />
            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" width={36} />
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width={36} />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" width={36} />
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "14px" }}>
        © 2023 GreenShop. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
