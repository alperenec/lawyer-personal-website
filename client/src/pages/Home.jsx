import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Ekran boyutunu izleme
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // İlk yüklemede çağır
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cihaz tipini belirleme
  const isTablet = screenSize.width >= 640 && screenSize.width < 1024;
  const isMobile = screenSize.width < 640;

  return (
    <div className="min-h-screen relative">
      {/* Siyah arka plan katmanı */}
      <div className="fixed inset-0 bg-black z-0"></div>

      {/* Ofis görseli katmanı */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        className={`relative z-20 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Hero Section - Yeni Düzen */}
        <div className="container max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sol taraf - Yazılar ve buton */}
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base md:text-lg font-medium text-gray-300 mb-2">
                AVUKAT | ULUSLARARASI HUKUK BÜROSU
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hukukun <span className="text-[#dcac2f]">Çözüm</span> Ortağı
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Avukat, medeni, ceza ve iş hukuku alanlarında uzmanlaşmış bir
                hukuk firmasıdır. Müvekkillerimize çeşitli hukuki ihtiyaçlarında
                danışmanlık, dava takibi ve uyuşmazlık çözümü gibi hizmetler
                sunarız. Profesyonel, güvenilir ve etkili çözümlerimizle
                müvekkillerimizin yanındayız.
              </p>

              {/* Bize Ulaşın butonu */}
              <Link to="/contact">
                <button className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 text-lg font-medium rounded-md transition-all duration-300 flex items-center">
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

            {/* Sağ taraf - Avukat fotoğrafı (veya özel içerik) */}
            <div className="hidden md:block">
              <img
                src="/src/assets/004.jpg"
                alt="Avukat"
                className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Center Logo Section ve diğer içerikler - SEÇİME BAĞLI */}
        {/* Not: İsterseniz bu bölümü tekrar ekleyebilirsiniz */}
      </div>

      {/* Floating Contact Buttons - Dokunmuyoruz */}
      <FloatingContactButtons />
    </div>
  );
};

export default Home;
