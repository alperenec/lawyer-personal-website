import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Hukuki danışmanlık için nasıl randevu alabilirim?",
      answer:
        "Hukuki danışmanlık için bizimle telefon, e-posta veya web sitemizdeki iletişim formu aracılığıyla iletişime geçebilirsiniz. +90 533 031 9009 numaralı telefondan veya av.zafertaga@gmail.com e-posta adresinden bize ulaşabilirsiniz. İletişim bilgilerinizi ve kısaca danışmak istediğiniz konuyu belirtmeniz durumunda en kısa sürede sizinle iletişime geçeceğiz.",
    },
    {
      question: "İlk görüşme ücretli midir?",
      answer:
        "İlk tanışma görüşmesi genellikle ücretsizdir. Bu görüşmede hukuki sorununuzu dinleyip size nasıl yardımcı olabileceğimizi değerlendiririz. Ancak detaylı hukuki danışmanlık ve sonraki görüşmeler için ücret talep edilmektedir. Ücretlendirme politikamız hakkında detaylı bilgiyi ilk görüşmede sizinle paylaşacağız.",
    },
    {
      question: "Avukatlık ücretleri nasıl belirlenir?",
      answer:
        "Avukatlık ücretleri, davanın türü, karmaşıklığı, tahmini süresi ve gerektirdiği iş yüküne göre değişiklik gösterir. Bazı davalar için Avukatlık Asgari Ücret Tarifesi'ne göre belirlenen ücretler uygulanırken, bazı hukuki işlemler için sabit ücret veya saat başı ücretlendirme yapılabilir. Her müvekkilimiz ile ücretlendirme konusunu önceden şeffaf bir şekilde görüşür ve yazılı bir anlaşma yaparız.",
    },
    {
      question: "Dava açmadan önce bilmem gerekenler nelerdir?",
      answer:
        "Dava açmadan önce bilmeniz gereken hususlar şunlardır: Davanın kazanılma ihtimali, tahmini süresi, maliyeti, ihtiyaç duyulacak deliller ve zamanaşımı süreleri. Ayrıca, dava dışı çözüm yollarının (arabuluculuk, uzlaşma vb.) değerlendirilmesi de önemlidir. Büromuz, dava açmadan önce tüm bu hususları sizinle detaylı şekilde değerlendirir ve en doğru stratejiyi belirlemenize yardımcı olur.",
    },
    {
      question: "Davamın ne kadar süreceğini önceden bilebilir miyim?",
      answer:
        "Davaların süresi, türüne, karmaşıklığına, mahkemelerin iş yüküne ve tarafların tutumuna göre değişiklik gösterir. Kesin bir süre vermek mümkün olmasa da, benzer davalardan edindiğimiz tecrübe ile tahmini bir süre belirtebiliriz. Bazı basit davalar birkaç ay içinde sonuçlanabilirken, karmaşık davalar yıllarca sürebilir. Davayı açmadan önce size davanın tahmini süresi hakkında bilgi vereceğiz.",
    },
    {
      question: "Hangi tür davalarda uzmanlaşmış durumdasınız?",
      answer:
        "Hukuk büromuz; medeni hukuk, iş hukuku, şirketler hukuku, miras hukuku, fikri mülkiyet hukuku, vatandaşlık hukuku ve bilişim hukuku alanlarında uzmanlaşmıştır. Bu alanlarda kapsamlı bilgi ve deneyime sahibiz. Uzmanlaştığımız alanlara ilişkin detaylı bilgiyi web sitemizin Hizmetlerimiz bölümünde bulabilirsiniz.",
    },
    {
      question: "Avukatımla hangi sıklıkta görüşebilirim?",
      answer:
        "Müvekkillerimizle düzenli iletişim bizim için çok önemlidir. Davanın durumuna göre gerekli zamanlarda sizinle iletişime geçeriz. Bunun dışında, herhangi bir sorunuz olduğunda mesai saatleri içerisinde telefon veya e-posta ile bizimle iletişime geçebilirsiniz. Acil durumlar için 7/24 ulaşabileceğiniz bir iletişim numarası da sağlıyoruz.",
    },
    {
      question: "Başka bir şehirde yaşıyorum, hizmet alabilir miyim?",
      answer:
        "Evet, Türkiye'nin her yerinden müvekkillerimize hizmet vermekteyiz. Görüşmelerimizi online olarak gerçekleştirebilir, belge alışverişini elektronik ortamda yapabiliriz. Dava işlemleri için gerektiğinde ilgili şehirlere seyahat edebilir veya o bölgede çalışan meslektaşlarımız ile iş birliği yapabiliriz.",
    },
    {
      question: "Davanın sonucu hakkında garanti verebilir misiniz?",
      answer:
        "Hiçbir hukuk bürosu veya avukat, bir davanın sonucu hakkında kesin garanti veremez. Her dava kendine özgüdür ve sonucu mahkeme kararı ile belirlenir. Biz sizin hukuki durumunuzu en iyi şekilde değerlendirir, kazanma ihtimalinizi artırmak için tüm hukuki stratejileri kullanırız. Ancak, davanın olası sonuçları hakkında dürüst ve gerçekçi bir değerlendirme yaparak sizi bilgilendiririz.",
    },
    {
      question:
        "Arabuluculuk ve alternatif çözüm yolları hakkında bilgi alabilir miyim?",
      answer:
        "Evet, dava dışı çözüm yolları olan arabuluculuk, uzlaşma ve tahkim gibi alternatif uyuşmazlık çözüm yöntemleri hakkında detaylı bilgi ve hizmet sunmaktayız. Bu yöntemler genellikle dava yoluna göre daha hızlı, daha az maliyetli ve taraflar arasındaki ilişkileri daha az zedeleyici çözümler sunabilir. Uyuşmazlığınızın niteliğine göre size en uygun yöntemi önerir ve bu süreçte size destek oluruz.",
    },
    {
      question:
        "Hukuki belge ve sözleşmelerimi incelettirmek istiyorum, nasıl bir süreç izlenecek?",
      answer:
        "Hukuki belge ve sözleşmelerinizi incelettirmek için bizimle iletişime geçmeniz yeterlidir. İlgili dokümanları bize iletmenizin ardından, uzman kadromuz tarafından detaylı bir inceleme yapılır. İnceleme sonuçları, tespit edilen riskler ve önerilerimizi içeren bir rapor hazırlanarak size sunulur. Ayrıca, gerekli görülmesi halinde belge ve sözleşmelerde yapılması gereken değişiklikler konusunda da danışmanlık hizmeti veririz.",
    },
    {
      question: "Kurumsal müşteriler için özel hizmetleriniz var mı?",
      answer:
        "Evet, kurumsal müşterilerimiz için özel hukuki danışmanlık hizmetleri sunmaktayız. Şirketinizin ihtiyaçlarına göre düzenli hukuki destek, sözleşme yönetimi, risk analizi, uyum danışmanlığı, iş hukuku danışmanlığı ve dava takibi gibi hizmetler sunuyoruz. Kurumsal müşterilerimiz için özel ücretlendirme modelleri ve hizmet paketleri hazırlıyoruz.",
    },
  ];

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 heading-font">
            Sıkça Sorulan Sorular
          </h1>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-70 rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-xl font-semibold text-[#dcac2f]">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#dcac2f] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bölümü */}
          <div className="mt-12 bg-[#dcac2f] bg-opacity-20 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-[#dcac2f] mb-4">
              Başka Sorularınız mı Var?
            </h2>
            <p className="text-gray-300 mb-6">
              Burada bulamadığınız bir sorunuz varsa, lütfen bizimle iletişime
              geçmekten çekinmeyin. Hukuki danışmanlık için her zaman
              yanınızdayız.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </div>

      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default FAQ;
