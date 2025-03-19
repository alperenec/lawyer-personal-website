import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import ServicesSection from "../components/ServicesSection";
import officeImage from "../assets/002.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState(
    "FIKRI MULKIYET HUKUKU"
  );

  // Expanded service details
  const serviceDetails = {
    "FIKRI MULKIYET HUKUKU": {
      title: "Fikri Mülkiyet Hukuku",
      content: [
        "Fikri ürün olan, markalaşmış değerli bulan fikri ürünleri olan her şeyin kapsandığı bu hukuk alanında özellikle marka hukuku ve markaların hakları önem arz etmektedir.",
        "Büromuz, aşağıdaki konularda fikri mülkiyet hukuku alanında hizmet vermektedir:",
        "• Marka tescili ve korunması",
        "• Telif hakları ve lisans anlaşmaları",
        "• Patent başvuruları ve ihlal davaları",
        "• Endüstriyel tasarım hakları",
        "• Haksız rekabet davaları",
        "• Ticari sırların korunması",
        "• Sahte ürün ve markalarla mücadele",
      ],
    },
    "IS HUKUKU": {
      title: "İş Hukuku",
      content: [
        "İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen hukuk dalıdır. Büromuz, iş hukuku alanında hem işçi hem de işveren tarafı için kapsamlı hizmetler sunmaktadır.",
        "Sunduğumuz iş hukuku hizmetleri şunlardır:",
        "• İş sözleşmelerinin hazırlanması ve incelenmesi",
        "• İşçi-işveren uyuşmazlıklarının çözümü",
        "• İşe iade davaları",
        "• Kıdem ve ihbar tazminatı davaları",
        "• Mobbing (işyerinde psikolojik taciz) davaları",
        "• İş kazası ve meslek hastalığı davaları",
        "• Toplu iş hukuku danışmanlığı",
      ],
    },
    "SIRKETLER HUKUKU": {
      title: "Şirketler Hukuku",
      content: [
        "Şirketler hukuku, ticari işletmelerin kuruluşu, işleyişi, birleşmesi, bölünmesi ve tasfiyesi gibi konuları düzenleyen hukuk dalıdır.",
        "Şirketler hukuku alanında sunduğumuz hizmetler:",
        "• Şirket kuruluş işlemleri",
        "• Ticaret sicili işlemleri",
        "• Genel kurul ve yönetim kurulu toplantılarının hazırlığı",
        "• Şirket birleşme, bölünme ve devralma süreçleri",
        "• Hisse devir sözleşmeleri",
        "• Ortaklıktan çıkarma ve çıkma davaları",
        "• Şirketlerin tasfiye süreçleri",
        "• Şirketler için kurumsal yönetim danışmanlığı",
      ],
    },
    "MIRAS HUKUKU": {
      title: "Miras Hukuku",
      content: [
        "Miras hukuku, kişinin ölümü halinde malvarlığının paylaşımını düzenleyen hukuk dalıdır. Büromuz, miras hukuku alanında kapsamlı danışmanlık ve dava takibi hizmetleri sunmaktadır.",
        "Miras hukuku kapsamında sunduğumuz hizmetler:",
        "• Vasiyetname hazırlanması ve düzenlenmesi",
        "• Miras paylaşımı ve taksim işlemleri",
        "• Mirasçılık belgesi alınması",
        "• Miras reddi işlemleri",
        "• Tenkis (saklı pay) davaları",
        "• Miras ihtilaflarının çözümü",
        "• Mal paylaşımı anlaşmazlıklarının çözümü",
        "• Miras sebebiyle istihkak davaları",
      ],
    },
    "VATANDASLIK HUKUKU": {
      title: "Vatandaşlık Hukuku",
      content: [
        "Vatandaşlık hukuku, kişilerin bir devlete olan aidiyetini düzenleyen hukuk dalıdır. Türk vatandaşlığının kazanılması ve kaybedilmesine ilişkin konularda danışmanlık hizmeti vermekteyiz.",
        "Vatandaşlık hukuku kapsamında sunduğumuz hizmetler:",
        "• Türk vatandaşlığının kazanılması başvuruları",
        "• Yatırım yoluyla vatandaşlık edinimi",
        "• Türk vatandaşlığının yeniden kazanılması",
        "• Vatandaşlıktan çıkma ve çıkarılma işlemleri",
        "• Çifte vatandaşlık durumları",
        "• Yabancıların Türkiye'de ikamet ve çalışma izinleri",
        "• Mavi kart işlemleri",
      ],
    },
    "KURUMSAL HUKUK MUSAVIRLIGI": {
      title: "Kurumsal Hukuk Müşavirliği",
      content: [
        "Kurumsal hukuk müşavirliği, şirketlerin günlük işleyişlerinde karşılaştıkları hukuki sorunlara çözüm üreten ve hukuki riskleri minimize etmeyi amaçlayan bir hizmettir.",
        "Kurumsal hukuk müşavirliği kapsamında sunduğumuz hizmetler:",
        "• Düzenli hukuki danışmanlık",
        "• Şirket içi hukuki belge ve sözleşmelerin hazırlanması",
        "• Şirket içi eğitimler ve hukuki bilgilendirmeler",
        "• Risk analizi ve hukuki due diligence çalışmaları",
        "• İş ve sosyal güvenlik hukuku danışmanlığı",
        "• Şirket lehine ve aleyhine açılan davaların takibi",
        "• Resmi kurum ve kuruluşlar nezdindeki işlemlerin takibi",
      ],
    },
    "SOZLESME VE PROTOKOLLER": {
      title: "Sözleşme ve Protokoller",
      content: [
        "Hukuki ilişkilerin düzenlenmesinde sözleşmeler büyük önem taşımaktadır. Büromuz, çeşitli alanlarda sözleşme hazırlama, inceleme ve değerlendirme hizmetleri sunmaktadır.",
        "Sözleşmeler konusunda sunduğumuz hizmetler:",
        "• Her türlü ticari sözleşmenin hazırlanması ve incelenmesi",
        "• Gayrimenkul alım-satım ve kira sözleşmeleri",
        "• Leasing ve faktoring sözleşmeleri",
        "• Franchising sözleşmeleri",
        "• Distribütörlük ve acentelik sözleşmeleri",
        "• Lisans ve know-how sözleşmeleri",
        "• İş sözleşmeleri ve iş ilişkisine dair protokoller",
        "• Hissedarlar sözleşmeleri ve ortaklık protokolleri",
      ],
    },
    "GERI GONDERME MERKEZI": {
      title: "Geri Gönderme Merkezi",
      content: [
        "Geri gönderme merkezleri ile ilgili hukuki süreçlerde uzman ekibimizle danışmanlık ve dava takibi hizmetleri sunmaktayız.",
        "Bu kapsamda sunduğumuz hizmetler:",
        "• İdari gözetim kararlarına itiraz",
        "• Sınır dışı kararlarına karşı yargı yoluna başvuru",
        "• Uluslararası koruma başvuruları",
        "• İkamet izni başvuruları",
        "• İnsan hakları ihlallerine karşı hukuki yardım",
        "• Avukatlık hizmeti ve tercüman desteği",
      ],
    },
    "BILISIM HUKUKU": {
      title: "Bilişim Hukuku",
      content: [
        "Teknolojinin hızla gelişmesiyle birlikte bilişim hukuku da önemli bir alan haline gelmiştir. Büromuz, bilişim ve teknoloji alanındaki hukuki konularda danışmanlık hizmeti vermektedir.",
        "Bilişim hukuku kapsamında sunduğumuz hizmetler:",
        "• İnternet hukuku ve alan adı uyuşmazlıkları",
        "• Dijital içerik ve hizmetlere ilişkin sözleşmeler",
        "• E-ticaret hukuku danışmanlığı",
        "• Sosyal medya hukuku ve içerik yönetimi",
        "• Kişisel verilerin korunması ve KVKK uyum süreçleri",
        "• Siber suçlarla mücadele",
        "• Bilişim suçları ve ceza hukuku danışmanlığı",
      ],
    },
    "DERNEKLER VE VAKIFLAR HUKUKU": {
      title: "Dernekler ve Vakıflar Hukuku",
      content: [
        "Dernekler ve vakıflar, sivil toplumun önemli yapı taşlarıdır. Büromuz, kar amacı gütmeyen kuruluşlara hukuki danışmanlık hizmeti vermektedir.",
        "Dernekler ve vakıflar hukuku kapsamında sunduğumuz hizmetler:",
        "• Dernek ve vakıf kuruluş işlemleri",
        "• Tüzük ve vakıf senedi hazırlanması",
        "• Genel kurul ve yönetim kurulu toplantılarının organizasyonu",
        "• Kamuya yararlı dernek ve vergi muafiyeti statüsü başvuruları",
        "• Dernekler ve vakıflar için proje danışmanlığı",
        "• Fesih ve tasfiye işlemleri",
        "• Dernek ve vakıfların denetimi konusunda danışmanlık",
      ],
    },
    "BASIN HUKUKU": {
      title: "Basın Hukuku",
      content: [
        "Basın hukuku, ifade özgürlüğü ile kişilik haklarının korunması arasındaki hassas dengeyi düzenleyen hukuk dalıdır. Büromuz, basın ve medya alanında hukuki danışmanlık hizmeti vermektedir.",
        "Basın hukuku kapsamında sunduğumuz hizmetler:",
        "• Basın yoluyla kişilik haklarına saldırı davaları",
        "• Tekzip (düzeltme ve cevap) hakkı talepleri",
        "• Tazminat davaları",
        "• Medya kuruluşları için hukuki danışmanlık",
        "• İnternet medyası ve sosyal medya için hukuki destek",
        "• Fikri mülkiyet haklarının medyada korunması",
        "• Yayın yasakları ve erişim engelleme kararlarına karşı hukuki yardım",
      ],
    },
  };

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

          {/* Servis Butonları */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {Object.keys(serviceDetails).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedService(key)}
                className={`py-2 px-3 text-xs md:text-sm font-medium rounded-md transition-all duration-300 ${
                  selectedService === key
                    ? "bg-[#dcac2f] text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {serviceDetails[key].title}
              </button>
            ))}
          </div>

          {/* Seçilen Servis Detayı */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#dcac2f] mb-6">
              {serviceDetails[selectedService].title}
            </h2>
            <div className="space-y-4">
              {serviceDetails[selectedService].content.map(
                (paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Services Section Komponenti */}
          <ServicesSection />
        </div>
      </div>

      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Services;
