import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import officeImage from "../assets/002.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-80 z-0" // opacity-70 yerine opacity-80
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      <Navbar />

      <div className="relative z-10">
        <div className="relative z-20">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
