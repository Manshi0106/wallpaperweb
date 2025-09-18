import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsAndInfo from "./components/StatsAndInfo";
import FeatureSection from "./components/FeatureSection";
import GallerySection from "./components/GallerySection";
import FooterSection from "./components/FooterSection";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsAndInfo />
      <FeatureSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

export default App;
