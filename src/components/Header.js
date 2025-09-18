import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">LUCKNOW<br/>WALLPAPER WALA</div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>SUPPORT</li>
          <li>LOCATION</li>
          <li>ABOUT US</li>
          <li>WISHLIST</li>
          <li>LOGIN/SIGN UP</li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
