import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import ServicesSection from "../components/ServicesSection";
import Comments from "../components/Comments";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import officeImage from "../assets/002.jpg";
import styles from "./Home.module.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde animasyonları etkinleştir
    setIsLoaded(true);

    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background layers */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className={`relative z-20 flex-grow pt-16 md:pt-28 pb-0 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <div className="container max-w-6xl mx-auto px-4">
          <ServicesSection />

          {/* Testimonials/Comments Section */}
          <Comments />
        </div>
      </main>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
