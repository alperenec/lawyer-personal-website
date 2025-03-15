import React from "react";
import Navbar from "../components/Navbar";
import officeImage from "../assets/002.jpg";

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* Siyah arka plan katmanı */}
      <div className="fixed inset-0 bg-black z-0"></div>

      {/* Ofis görseli katmanı - düşük opaklık ile */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      <Navbar />

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 heading-font">
            Hakkımızda
          </h1>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            <p className="text-xl text-white mb-4">
              Hakkımızda içeriği burada olacak...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
