import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import ServicesSection from "../components/ServicesSection";
import Comments from "../components/Comments";
import officeImage from "../assets/002.jpg";
import lawyerImage from "../assets/004.jpg";
import styles from "./Home.module.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text and button */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-medium text-gray-300 mb-2">
                AVUKAT | ULUSLARARASI HUKUK BÜROSU
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Hukukun <span className="text-[#dcac2f]">Çözüm</span> Ortağı
              </h1>
              <p className="text-sm md:text-lg text-gray-300 mb-6">
                Avukat, medeni, ceza ve iş hukuku alanlarında uzmanlaşmış bir
                hukuk firmasıdır. Müvekkillerimize çeşitli hukuki ihtiyaçlarında
                danışmanlık, dava takibi ve uyuşmazlık çözümü gibi hizmetler
                sunarız. Profesyonel, güvenilir ve etkili çözümlerimizle
                müvekkillerimizin yanındayız.
              </p>

              {/* Contact button */}
              <Link to="/contact">
                <button className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-medium rounded-md transition-all duration-300 flex items-center mx-auto md:mx-0 mb-4 md:mb-0">
                  Bize Ulaşın
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Right side - Lawyer photo */}
            <div className={styles.imageWrapper}>
              {lawyerImage ? (
                <img
                  src={lawyerImage}
                  alt="Avukat"
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.target.src =
                      "https://via.placeholder.com/600x800?text=Avukat+Zafer+TAĞA";
                  }}
                />
              ) : (
                <div className="w-full h-[300px] md:h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Resim Yüklenemiyor</p>
                </div>
              )}
            </div>
          </div>

          {/* Services Section */}
          <ServicesSection />

          {/* Comments Section */}
          <Comments />
        </div>
      </main>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  );
};

export default Home;
