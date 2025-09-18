import React from "react";
import "./StatsAndInfo.css";

const StatsAndInfo = () => {
  return (
    <div className="stats-info">
      {/* Stats Section */}
      <div className="stats">
        <div className="stat-card">
          <h2>(NUMBERS)</h2>
          <p>ORDERS</p>
        </div>
        <div className="stat-card">
          <h2>(NUMBERS)</h2>
          <p>EMPLOYEES</p>
        </div>
        <div className="stat-card">
          <h2>(NUMBERS)</h2>
          <p>BRANCHES</p>
        </div>
        <div className="stat-card">
          <h2>(NUMBERS)</h2>
          <p>DELIVERY PAN INDIA</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-image"></div>
        <div className="info-text">
          <h2>Add a subheading</h2>
          <p>
            Add a little bit of body text. Highlight a specific feature of your product 
            or service. Convince your audience why they need to check out your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsAndInfo;
