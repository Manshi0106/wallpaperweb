import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Lucknow Wallpaper Wala</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1 className="big-text">LUCKNOW<br />Wallpaper Wala</h1>
          <div className="certificate-box">
            <h2>Dress your walls</h2>
            <p>Impress them all</p>
            <p>Because walls should do more than just stand there…</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
