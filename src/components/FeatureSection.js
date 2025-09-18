import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature">
      <div className="feature-content">
        <h2>Add a heading</h2>
        <p>
          Highlight a specific feature of your product or service. Convince your
          audience why they need to check out your brand.
        </p>
      </div>
      <div className="feature-image">
        <img src="/rolls.jpg" alt="Wallpaper rolls" />
      </div>
    </section>
  );
};

export default FeatureSection;
