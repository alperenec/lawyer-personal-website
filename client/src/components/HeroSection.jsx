import React from "react";
import lawyerImage from "../assets/004.jpg"; // Avukat fotoğrafınızın path'ini düzeltmeniz gerekebilir

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Ana içerik konteyneri - çok büyük olmaması için max-w-6xl kullanıldı */}
      <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* İki sütunlu grid yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Sol taraf - Yazılar ve buton */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-base md:text-lg font-medium text-gray-600 mb-2">
              ÇANKIRI AVUKAT | ULUSLARARASI HUKUK BÜROSU
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hukukun <span className="text-[#dcac2f]">Çözüm</span> Ortağı
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Çankırı Avukat, medeni, ceza ve iş hukuku alanlarında uzmanlaşmış
              bir hukuk firmasıdır. Müvekkillerimize çeşitli hukuki
              ihtiyaçlarında danışmanlık, dava takibi ve uyuşmazlık çözümü gibi
              hizmetler sunarız. Profesyonel, güvenilir ve etkili çözümlerimizle
              müvekkillerimizin yanındayız.
            </p>

            {/* Bize Ulaşın butonu */}
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
          </div>

          {/* Sağ taraf - Avukat fotoğrafı */}
          <div className="hidden md:block">
            {/* Adalet heykeli fotoğrafı veya avukat fotoğrafı */}
            <img
              src={lawyerImage}
              alt="Avukat"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
