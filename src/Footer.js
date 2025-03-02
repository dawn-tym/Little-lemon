import React from "react";
import green from "./images/green-logo.jpg";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-logo">
      <img src={green} width={100} height={150} alt="footer-logo"></img>
      </div>
      <div className="copyright">
      <p>© 2025 Little Lemon. All rights reserved.</p>
      </div>
      <div className="footer-content">
      <p><b>Doormat Navigation</b><br/>About<br/>Menu<br/>Reservations<br/>Online order<br/>Login</p>
      <p><b>Contact Address</b><br/>Phone number<br/>E-mail</p>
      <p><b>Social Media Links</b><br/>Instagram<br/>Facebook<br/>X<br/>Tiktok</p>
      </div>
    </div>
    </>
  );
}

export default Footer;
