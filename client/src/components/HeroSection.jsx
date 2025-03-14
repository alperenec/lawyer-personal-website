import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* İçerik katmanı */}
      <div className="pt-36 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 heading-font">
            Hukuki Çözüm Ortağınız
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-2xl">
            Medeni, ceza ve iş hukuku alanlarında uzmanlaşmış bir hukuk bürosu
            olarak profesyonel çözümler sunuyoruz.
          </p>
          <button className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-8 py-4 text-xl font-medium rounded-md">
            Bize Ulaşın
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
