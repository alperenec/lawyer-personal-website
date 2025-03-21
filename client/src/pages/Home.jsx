import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import ServicesSection from "../components/ServicesSection";
import Comments from "../components/Comments";
import HeroSection from "../components/HeroSection";
import officeImage from "../assets/002.jpg";
import styles from "./Home.module.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Activate animations when page loads
    setIsLoaded(true);

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background layers - Extended to full viewport */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      {/* Navbar - will now use the background image */}
      <Navbar />

      {/* Main Content */}
      <main
        className={`relative z-20 flex-grow transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Container for all sections with consistent margins and top padding for navbar */}
        <div className={`${styles.customContainer} pt-24`}>
          {/* Hero Section with fade-in animation */}
          <section
            className={`${styles.sectionSpacing} ${
              isLoaded ? styles.fadeIn : ""
            }`}
          >
            <HeroSection />
          </section>

          {/* Services Section with slide-in animation */}
          <section
            className={`${styles.sectionSpacing} ${
              isLoaded ? styles.slideIn : ""
            }`}
          >
            {/* Added centered Hizmetlerimiz title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Hizmetlerimiz
            </h2>

            {/* Using hideTitle to hide the title inside ServicesSection */}
            <ServicesSection hideTitle={true} />
          </section>

          {/* Testimonials/Comments Section */}
          <section className={styles.sectionSpacing}>
            <Comments />
          </section>
        </div>
      </main>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  );
};

export default Home;
