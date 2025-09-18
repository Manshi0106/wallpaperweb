import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - image */}
        <div className="footer-image">
          <img src="/roll.jpg" alt="Wallpaper rolls" />
        </div>

        {/* Right side - info */}
        <div className="footer-info">
          <div className="footer-block">
            <h3>Office</h3>
            <p>123 Anywhere St. Any City ST 12345</p>
            <p>Tel: +123-456-7890</p>
            <p>hello@reallygreatsite.com</p>
          </div>

          <hr />

          <div className="footer-block">
            <h3>Business hours</h3>
            <p>Monday - Friday: 9am – 6pm</p>
            <p>Saturday: 9am – 12pm</p>
          </div>

          <hr />

          <div className="footer-social">
            <h3>Get social</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
