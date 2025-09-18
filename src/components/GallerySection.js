import React from "react";
import "./GallerySection.css";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        <div className="item item1"><img src="/img1.jpg" alt="img1" /></div>
        <div className="item item2"><img src="/img2.jpg" alt="img2" /></div>
        <div className="item item3"><img src="/img3.jpg" alt="img3" /></div>

        <div className="item item5"><img src="/img5.jpg" alt="img5" /></div>
        <div className="item itemLogo"><img src="/logo.jpg" alt="logo" /></div>
        <div className="item item4"><img src="/img4.jpg" alt="img4" /></div>
      </div>
    </section>
  );
};

export default GallerySection;
