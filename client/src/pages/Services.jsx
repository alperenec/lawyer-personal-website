import React from "react";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import ServicesSection from "../components/ServicesSection";
import officeImage from "../assets/002.jpg";

const Services = () => {
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

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 heading-font">
            Hizmetlerimiz
          </h1>

          {/* Custom inline style to force override */}
          <div
            className="services-override"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <style jsx>{`
              /* Force hide the title */
              .services-override h2 {
                display: none !important;
              }

              /* Force remove margin/padding */
              .services-override section {
                margin-top: 0 !important;
                padding-top: 0 !important;
              }

              .services-override .container {
                padding-top: 0 !important;
                margin-top: 0 !important;
              }
            `}</style>
            <ServicesSection />
          </div>
        </div>
      </div>

      <FloatingContactButtons />
    </div>
  );
};

export default Services;
