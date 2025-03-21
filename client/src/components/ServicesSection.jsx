import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = ({ hideTitle = false, noMargin = false }) => {
  const [selectedService, setSelectedService] = useState(
    "FIKRI MULKIYET HUKUKU"
  );

  // Service descriptions and their corresponding links
  const services = {
    "GERI GONDERME MERKEZI": {
      description:
        "Geri Gönderme Merkezleri ile ilgili hukuki süreçlerde uzman danışmanlık ve dava takibi hizmetleri sunuyoruz.",
      link: "/services/geri-gonderme-merkezi",
    },
    "KURUMSAL HUKUK MUSAVIRLIGI": {
      description:
        "Şirketler için kapsamlı hukuki danışmanlık hizmetleri sunarak iş süreçlerinizi güvence altına alıyoruz.",
      link: "/services/kurumsal-hukuk-musavirligi",
    },
    "MIRAS HUKUKU": {
      description:
        "Miras hukuku alanında, miras paylaşımı, vasiyetname hazırlama ve dava süreçlerinde profesyonel destek sağlıyoruz.",
      link: "/services/miras-hukuku",
    },
    "IS HUKUKU": {
      description:
        "İş hukuku kapsamında işçi ve işveren arasındaki uyuşmazlıkların çözümünde uzman danışmanlık sunuyoruz.",
      link: "/services/is-hukuku",
    },
    "SIRKETLER HUKUKU": {
      description:
        "Şirketler hukuku alanında, şirket kuruluşu, birleşme ve devralmalar gibi konularda hukuki destek veriyoruz.",
      link: "/services/sirketler-hukuku",
    },
    "SOZLESME VE PROTOKOLLER": {
      description:
        "Sözleşme ve protokol hazırlanması, incelenmesi ve uyuşmazlık çözümü konularında hizmet sunuyoruz.",
      link: "/services/sozlesme-ve-protokoller",
    },
    "VATANDASLIK HUKUKU": {
      description:
        "Vatandaşlık hukuku ile ilgili başvuru süreçleri ve dava takibi hizmetleri sunuyoruz.",
      link: "/services/vatandaslik-hukuku",
    },
    "FIKRI MULKIYET HUKUKU": {
      description:
        "Fikri ürün olan, markalaşmış değerli bulan fikri ürünleri olan her şeyin kapsandığı bu hukuk alanında özellikle marka hukuku ve markaların hakları önem arz etmektedir. Şahte ürünlerin üretimi ve satılması ve pek çok şey bu hukuk alanının ilgilendirmektedir. Fikri ürünlerin anlaşılması ya da kullanılması, telif haklarının ihlali edilmesi ya da başka bir alanda kapsanımındır.",
      link: "/services/fikri-mulkiyet-hukuku",
    },
    "BILISIM HUKUKU": {
      description:
        "Bilişim hukuku alanında, dijital platformlardaki uyuşmazlıklar ve siber suçlarla ilgili hukuki destek sunuyoruz.",
      link: "/services/bilisim-hukuku",
    },
    "DERNEKLER VE VAKIFLAR HUKUKU": {
      description:
        "Dernekler ve vakıflar hukuku kapsamında, kuruluş, yönetim ve uyuşmazlık çözümü konularında hizmet veriyoruz.",
      link: "/services/dernekler-ve-vakiflar-hukuku",
    },
    "BASIN HUKUKU": {
      description:
        "Basın hukuku alanında, basın özgürlüğü, hakaret davaları ve medya ile ilgili hukuki süreçlerde destek sağlıyoruz.",
      link: "/services/basin-hukuku",
    },
  };

  // Completely removed all margin and padding top classes
  // from the section className to eliminate the unwanted space
  return (
    <section
      className="py-8 relative z-20"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {!hideTitle && (
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">
            HİZMETLERİMİZ
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-8">
          {Object.keys(services).map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`py-2 px-2 md:py-3 md:px-4 text-xs md:text-sm font-medium rounded-md transition-all duration-300 ${
                selectedService === service
                  ? "bg-[#dcac2f] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
        <div className="bg-gray-900 bg-opacity-80 p-4 md:p-6 rounded-lg">
          <p className="text-gray-300 text-sm md:text-lg mb-4">
            {services[selectedService].description}
          </p>
          <Link to={services[selectedService].link}>
            <button className="text-[#dcac2f] hover:text-[#b5872c] font-medium flex items-center transition-all duration-300">
              Devamı...
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
      </div>
    </section>
  );
};

export default ServicesSection;
