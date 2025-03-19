import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";
import lawyerImage from "../assets/004.jpg";

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

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 heading-font">
            Hakkımızda
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sol taraf - Resim ve iletişim bilgileri */}
            <div className="lg:col-span-2">
              <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-8">
                <img
                  src={lawyerImage}
                  alt="Av. Zafer Tağa"
                  className="w-full h-auto rounded-lg shadow-md mb-6"
                />

                <h2 className="text-2xl font-bold text-[#dcac2f] mb-4">
                  Av. Zafer Tağa
                </h2>

                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#dcac2f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    av.zafertaga@gmail.com
                  </p>

                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#dcac2f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +90 533 031 9009
                  </p>

                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-[#dcac2f]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    Aydın Barosu / 2672
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ taraf - Hakkımızda içeriği */}
            <div className="lg:col-span-3">
              <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#dcac2f] mb-6">
                  Hukuk Büromuz
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Av. Zafer Tağa Hukuk Bürosu, müvekkillerine en üst düzeyde
                    hukuki hizmet vermek amacıyla kurulmuştur. Aydın'ın
                    merkezinde bulunan ofisimizde, geniş yelpazede hukuki
                    danışmanlık ve dava takip hizmetleri sunmaktayız.
                  </p>

                  <p>
                    Hukuk büromuz, her davanın ve her müvekkilin kendine özgü
                    ihtiyaçları olduğu bilinciyle hareket etmekte ve çözüm
                    odaklı bir yaklaşım sergilemektedir. Dürüst, şeffaf ve
                    güvenilir bir hizmet anlayışı ile müvekkillerimizin
                    haklarını korumak ve hukuki sorunlarına en uygun çözümleri
                    sunmak temel ilkemizdir.
                  </p>

                  <p>
                    Büromuz, medeni hukuk, ceza hukuku, iş hukuku, şirketler
                    hukuku, fikri mülkiyet hukuku, vatandaşlık hukuku ve bilişim
                    hukuku gibi birçok alanda uzmanlaşmış kadrosuyla hizmet
                    vermektedir. Sürekli gelişen ve değişen hukuk sistemimize
                    uyum sağlamak adına mesleki gelişimimizi sürdürmek ve güncel
                    yasal değişiklikleri takip etmek önceliklerimiz arasındadır.
                  </p>

                  <p>
                    Müvekkillerimiz ile kurduğumuz güven ilişkisi bizim için en
                    değerli varlığımızdır. Her bir müvekkilimize özel ilgi
                    göstererek, davanın her aşamasında bilgilendirme yapmayı ve
                    hukuki süreçleri anlaşılır bir dille aktarmayı önemsiyoruz.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[#dcac2f] mt-8 mb-6">
                  Vizyonumuz
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Hukukun üstünlüğüne inanan, etik değerlere bağlı, yenilikçi
                    bir anlayışla hizmet sunan, ulusal ve uluslararası alanda
                    güvenilir bir hukuk bürosu olmak ve bu doğrultuda
                    müvekkillerimizin hukuki sorunlarına en hızlı ve etkili
                    çözümleri üretmektir.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[#dcac2f] mt-8 mb-6">
                  Misyonumuz
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Müvekkillerimize kaliteli, güvenilir ve kapsamlı hukuki
                    hizmet sunmak, dinamik kadromuz ve güncel hukuki bilgimizle
                    hukuki sorunlara pratik çözümler üretmek, müvekkillerimizin
                    haklarını korumak ve hukuki risklerini en aza indirgemektir.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[#dcac2f] mt-8 mb-6">
                  Değerlerimiz
                </h2>

                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Dürüstlük ve Şeffaflık</li>
                  <li>Güvenilirlik ve Sorumluluk</li>
                  <li>Müvekkil Memnuniyeti</li>
                  <li>Profesyonellik ve Uzmanlık</li>
                  <li>Gizlilik ve Mahremiyet</li>
                  <li>Hızlı ve Etkili İletişim</li>
                  <li>Sürekli Mesleki Gelişim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default About;
