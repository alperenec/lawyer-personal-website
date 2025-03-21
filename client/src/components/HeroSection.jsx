import React from "react";
import { Link } from "react-router-dom";
import lawyerImage from "../assets/004.jpg";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Content container with better spacing */}
      <div className="mx-auto">
        {/* Two-column grid with improved gap and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Text and button with improved spacing */}
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-base md:text-lg font-medium text-gray-300">
              AVUKAT | ULUSLARARASI HUKUK BÜROSU
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hukukun <span className="text-[#dcac2f]">Çözüm</span> Ortağı
            </h1>
            <p className="text-base md:text-lg text-gray-300 mt-2 mb-6">
              Avukat, medeni, ceza ve iş hukuku alanlarında uzmanlaşmış bir
              hukuk firmasıdır. Müvekkillerimize çeşitli hukuki ihtiyaçlarında
              danışmanlık, dava takibi ve uyuşmazlık çözümü gibi hizmetler
              sunarız. Profesyonel, güvenilir ve etkili çözümlerimizle
              müvekkillerimizin yanındayız.
            </p>

            {/* Contact button with improved styling */}
            <Link to="/contact">
              <button className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 text-lg font-medium rounded-md transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Bize Ulaşın
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
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

          {/* Right side - Lawyer photo - CHANGED: removed 'hidden md:block' to show on mobile */}
          <div className="flex justify-center">
            {" "}
            {/* Added flex container for centering on mobile */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 max-w-xs md:max-w-full">
              {" "}
              {/* Added max-width for mobile */}
              <img
                src={lawyerImage}
                alt="Avukat Zafer Tağa"
                className="w-full h-auto object-cover rounded-lg"
                onError={(e) => {
                  console.error("Image failed to load");
                  e.target.src =
                    "https://via.placeholder.com/600x800?text=Avukat+Zafer+TAĞA";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
