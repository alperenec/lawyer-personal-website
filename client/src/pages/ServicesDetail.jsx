import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";

const ServicesDetail = () => {
  const { serviceSlug } = useParams();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service descriptions and their details
  const serviceDetails = {
    "geri-gonderme-merkezi": {
      title: "GERİ GÖNDERME MERKEZİ",
      description:
        "Geri Gönderme Merkezleri ile ilgili hukuki süreçlerde uzman danışmanlık ve dava takibi hizmetleri sunuyoruz.",
      content: `
        <h3>Geri Gönderme Merkezi Hukuki Danışmanlık</h3>
        <p>Geri Gönderme Merkezleri, yabancı uyruklu kişilerin sınır dışı edilme sürecinde geçici olarak barındırıldıkları tesislerdir. Bu merkezlerde kalan kişilerin hukuki haklarının korunması ve adil bir süreç işletilmesi hayati önem taşımaktadır.</p>
        
        <h3>Hukuk Büromuzun Sunduğu Hizmetler</h3>
        <ul>
          <li>Sınır dışı edilme kararlarına karşı idari itiraz başvurularının hazırlanması</li>
          <li>İdare mahkemelerinde dava açılması ve takibi</li>
          <li>Uluslararası koruma başvuruları konusunda danışmanlık</li>
          <li>İkamet izni başvuruları için hukuki destek</li>
          <li>Vatandaşlık hukuku ve vize işlemleri konusunda danışmanlık</li>
          <li>Geri Gönderme Merkezi'nde kalan yabancıların hakları konusunda bilgilendirme</li>
        </ul>
        
        <h3>Neden Bizi Tercih Etmelisiniz?</h3>
        <p>Hukuk büromuz, göç ve iltica hukuku alanında uzmanlaşmış avukatlardan oluşmaktadır. Yabancılar hukuku ve uluslararası insan hakları standartları konusunda derin bilgi birikimimiz ile müvekkillerimize en etkili hukuki desteği sunmaktayız.</p>
        
        <p>Her vakanın kendine özgü koşullarını dikkate alarak, kişiye özel çözümler geliştiriyoruz. Müvekkillerimizin haklarının korunması ve adil bir süreç işletilmesi için tüm hukuki araçları etkin bir şekilde kullanıyoruz.</p>
      `,
    },
    "kurumsal-hukuk-musavirligi": {
      title: "KURUMSAL HUKUK MÜŞAVİRLİĞİ",
      description:
        "Şirketler için kapsamlı hukuki danışmanlık hizmetleri sunarak iş süreçlerinizi güvence altına alıyoruz.",
      content: `
        <h3>Kurumsal Hukuk Müşavirliği Hizmetlerimiz</h3>
        <p>İşletmenizin hukuki güvenliğini sağlamak ve olası riskleri önceden belirleyerek önlem almak günümüz iş dünyasında büyük önem taşımaktadır. Hukuk büromuz, şirketinizin tüm hukuki ihtiyaçlarına yönelik kapsamlı danışmanlık hizmetleri sunmaktadır.</p>
        
        <h3>Sunduğumuz Kurumsal Hukuk Hizmetleri</h3>
        <ul>
          <li>Şirket kuruluşu, birleşme, devralma ve tasfiye süreçlerinde hukuki danışmanlık</li>
          <li>Ticari sözleşmelerin hazırlanması, incelenmesi ve müzakeresi</li>
          <li>İş hukuku ve sosyal güvenlik hukuku alanında danışmanlık</li>
          <li>Şirket içi yönetmelik ve prosedürlerin hazırlanması</li>
          <li>Yönetim kurulu ve genel kurul toplantılarının hukuka uygun yürütülmesi</li>
          <li>Fikri mülkiyet haklarının korunması ve lisans sözleşmelerinin hazırlanması</li>
          <li>Rekabet hukuku uyum programlarının hazırlanması</li>
          <li>Kişisel verilerin korunması ve KVKK uyum süreçleri</li>
          <li>Ticari uyuşmazlıkların çözümü ve dava takibi</li>
        </ul>
        
        <h3>Hizmet Modelimiz</h3>
        <p>Kurumsal müşterilerimize, düzenli hukuki danışmanlık hizmeti sunarak, şirketinizin günlük işleyişindeki hukuki süreçleri yönetiyoruz. Aylık periyodik görüşmeler ve gerektiğinde acil durum desteği ile iş süreçlerinizin kesintisiz ve hukuka uygun şekilde yürütülmesini sağlıyoruz.</p>
        
        <p>Her şirketin kendine özgü ihtiyaçlarını dikkate alarak, esnek ve çözüm odaklı bir yaklaşımla hizmet veriyoruz. Proaktif danışmanlığımız ile olası sorunları önceden tespit ederek, hukuki riskleri minimuma indiriyoruz.</p>
      `,
    },
    "miras-hukuku": {
      title: "MİRAS HUKUKU",
      description:
        "Miras hukuku alanında, miras paylaşımı, vasiyetname hazırlama ve dava süreçlerinde profesyonel destek sağlıyoruz.",
      content: `
        <h3>Miras Hukuku Danışmanlık ve Dava Takip Hizmetlerimiz</h3>
        <p>Miras hukuku, kişinin sağlığında ve vefatından sonra malvarlığının kaderiyle ilgilenen, duygusal yönü ağır basan hassas bir hukuk dalıdır. Hukuk büromuz, miras hukukunun tüm alanlarında uzman kadrosuyla yanınızdadır.</p>
        
        <h3>Sunduğumuz Miras Hukuku Hizmetleri</h3>
        <ul>
          <li>Vasiyetname ve miras sözleşmelerinin hazırlanması</li>
          <li>Mirasın reddi işlemleri</li>
          <li>Miras paylaşımı ve tapu işlemleri</li>
          <li>Tenkis (miras hakkının ihlali) davaları</li>
          <li>Miras hakkının ihlali durumunda dava açılması</li>
          <li>Mirastan mahrumiyet davalarının takibi</li>
          <li>Ölüme bağlı tasarrufların iptali davaları</li>
          <li>Tereke tespit ve yönetimi işlemleri</li>
          <li>Yabancı unsurlu miras davalarında hukuki danışmanlık</li>
        </ul>
        
        <h3>Neden Miras Hukuku Konusunda Destek Almalısınız?</h3>
        <p>Miras hukuku, karmaşık yasal düzenlemeler içeren ve özel uzmanlık gerektiren bir alandır. Doğru ve zamanında yapılacak hukuki işlemler, ileride ortaya çıkabilecek aile içi anlaşmazlıkları önleyebilir ve sevdiklerinizin geleceğini güvence altına alabilir.</p>
        
        <p>Hukuk büromuz, hassasiyetle yaklaştığımız bu alanda, müvekkillerimizin hem duygusal hem de hukuki ihtiyaçlarını gözeterek, kişiye özel çözümler sunmaktadır. Miras hukukuna ilişkin her türlü işleminizde yanınızda olarak, hukuki süreçleri sizin adınıza yönetiyoruz.</p>
      `,
    },
    "is-hukuku": {
      title: "İŞ HUKUKU",
      description:
        "İş hukuku kapsamında işçi ve işveren arasındaki uyuşmazlıkların çözümünde uzman danışmanlık sunuyoruz.",
      content: `
        <h3>İş Hukuku Danışmanlık ve Dava Takip Hizmetlerimiz</h3>
        <p>İş ilişkilerinin hukuki çerçevesini düzenleyen iş hukuku, hem işçi hem de işveren için karmaşık ve önemli düzenlemeler içermektedir. Hukuk büromuz, iş hukukunun tüm alanlarında uzmanlaşmış kadrosuyla yanınızdadır.</p>
        
        <h3>İşçiler İçin Sunduğumuz Hizmetler</h3>
        <ul>
          <li>İş sözleşmelerinin incelenmesi ve danışmanlık</li>
          <li>Haksız fesih durumlarında işe iade davaları</li>
          <li>Kıdem ve ihbar tazminatı hesaplamaları</li>
          <li>Fazla mesai, yıllık izin ve diğer işçilik alacaklarının hesaplanması</li>
          <li>İş kazaları ve meslek hastalıklarında tazminat davaları</li>
          <li>Mobbing (psikolojik taciz) vakalarında hukuki destek</li>
          <li>Toplu iş hukuku ve sendika üyeliği konularında danışmanlık</li>
        </ul>
        
        <h3>İşverenler İçin Sunduğumuz Hizmetler</h3>
        <ul>
          <li>İş sözleşmeleri ve iç yönetmeliklerin hazırlanması</li>
          <li>İşçi çıkarma süreçlerinde hukuki danışmanlık</li>
          <li>İş sağlığı ve güvenliği konularında uyum danışmanlığı</li>
          <li>İşçi-işveren uyuşmazlıklarında arabuluculuk süreçleri</li>
          <li>Toplu iş sözleşmesi görüşmelerinde hukuki danışmanlık</li>
          <li>İş hukuku uyum programlarının hazırlanması</li>
          <li>Yabancı işçi çalıştırma izinleri konusunda danışmanlık</li>
        </ul>
        
        <h3>Neden Bizi Tercih Etmelisiniz?</h3>
        <p>İş hukuku alanında deneyimli avukatlarımız, güncel mevzuat ve içtihatları yakından takip ederek, müvekkillerimize en etkin hukuki desteği sunmaktadır. Her vakayı kendi özgün koşulları içinde değerlendirerek, kişiye veya şirkete özel çözümler geliştiriyoruz.</p>
      `,
    },
    "sirketler-hukuku": {
      title: "ŞİRKETLER HUKUKU",
      description:
        "Şirketler hukuku alanında, şirket kuruluşu, birleşme ve devralmalar gibi konularda hukuki destek veriyoruz.",
      content: `
        <h3>Şirketler Hukuku Alanında Uzman Danışmanlık</h3>
        <p>Şirketler hukuku, işletmelerin kuruluşundan tasfiyesine kadar tüm hukuki süreçlerini kapsayan geniş bir alandır. Hukuk büromuz, şirketinizin her aşamasında ihtiyaç duyacağı profesyonel hukuki desteği sunmaktadır.</p>
        
        <h3>Sunduğumuz Şirketler Hukuku Hizmetleri</h3>
        <ul>
          <li>Şirket kuruluş işlemleri ve ana sözleşme hazırlanması</li>
          <li>Limited ve anonim şirket yapılarının oluşturulması</li>
          <li>Sermaye artırımı ve azaltımı işlemleri</li>
          <li>Şirket birleşme, bölünme ve devralma süreçleri</li>
          <li>Hisse devir sözleşmelerinin hazırlanması</li>
          <li>Şirket yönetim yapılarının oluşturulması</li>
          <li>Yönetim kurulu ve genel kurul toplantılarının organizasyonu</li>
          <li>Şirket tasfiye işlemleri</li>
          <li>Ortaklıktan çıkma ve çıkarılma davaları</li>
          <li>Şirket alacaklarının tahsili için hukuki takip</li>
        </ul>
        
        <h3>Neden Şirketler Hukuku Uzmanına İhtiyaç Duyarsınız?</h3>
        <p>İş dünyasının karmaşık yasal düzenlemeleri içinde, şirketinizin hukuki güvenliğini sağlamak ve olası riskleri önceden belirleyerek önlem almak büyük önem taşır. Deneyimli şirketler hukuku avukatlarımız, şirketinizin tüm hukuki süreçlerinde yanınızda yer alarak, işletmenizin sağlıklı büyümesine katkıda bulunur.</p>
        
        <p>Her şirketin kendine özgü ihtiyaçlarını ve sektörel dinamiklerini dikkate alarak, esnek ve çözüm odaklı bir yaklaşımla hizmet veriyoruz. Proaktif danışmanlığımız ile olası sorunları önceden tespit ederek, hukuki riskleri minimuma indiriyoruz.</p>
      `,
    },
    "sozlesme-ve-protokoller": {
      title: "SÖZLEŞME VE PROTOKOLLER",
      description:
        "Sözleşme ve protokol hazırlanması, incelenmesi ve uyuşmazlık çözümü konularında hizmet sunuyoruz.",
      content: `
        <h3>Sözleşme ve Protokol Hizmetlerimiz</h3>
        <p>Ticari ve özel hayatta, taraflar arasındaki ilişkileri düzenleyen sözleşmeler, hukuki güvenliğin temelidir. Hukuk büromuz, her türlü sözleşme ve protokolün hazırlanması, incelenmesi ve uyuşmazlık durumunda çözüm süreçlerinde uzman kadrosuyla yanınızdadır.</p>
        
        <h3>Sunduğumuz Sözleşme Hizmetleri</h3>
        <ul>
          <li>Ticari sözleşmelerin hazırlanması ve incelenmesi</li>
          <li>Kira sözleşmelerinin hazırlanması ve danışmanlık</li>
          <li>İş sözleşmeleri ve iş hukuku danışmanlığı</li>
          <li>Gayrimenkul alım-satım sözleşmeleri</li>
          <li>Franchising ve lisans sözleşmeleri</li>
          <li>Distribütörlük ve acentelik sözleşmeleri</li>
          <li>Ortaklık ve hisse devir sözleşmeleri</li>
          <li>Gizlilik ve rekabet yasağı sözleşmeleri</li>
          <li>Evlilik ve mal rejimi sözleşmeleri</li>
          <li>Sözleşme uyuşmazlıklarında arabuluculuk ve dava hizmetleri</li>
        </ul>
        
        <h3>Sözleşme Hazırlama ve İnceleme Yaklaşımımız</h3>
        <p>Sözleşmeler, tarafların hak ve yükümlülüklerini açıkça belirleyen, olası uyuşmazlıklarda başvurulan temel belgelerdir. Bu nedenle, her sözleşmenin özenle hazırlanması ve incelenmesi büyük önem taşır.</p>
        
        <p>Hukuk büromuz, sözleşme hazırlarken tarafların ihtiyaç ve beklentilerini detaylı şekilde analiz eder, olası riskleri önceden belirler ve bunlara karşı koruyucu hükümler geliştirir. Mevcut sözleşmeleri incelerken ise, müvekkilimizin hukuki güvenliğini tehdit edebilecek maddeleri tespit eder ve gerekli değişiklik önerilerini sunar.</p>
        
        <h3>Sözleşme Uyuşmazlıklarında Çözüm Süreçleri</h3>
        <p>Sözleşmeye dayalı uyuşmazlıklarda, öncelikle alternatif çözüm yöntemlerini değerlendiriyor, müzakere ve arabuluculuk gibi süreçlerle uyuşmazlığın hızlı ve etkili şekilde çözümünü hedefliyoruz. Gerektiğinde ise dava süreçlerini profesyonelce yöneterek, müvekkilimizin haklarını koruyoruz.</p>
      `,
    },
    "vatandaslik-hukuku": {
      title: "VATANDAŞLIK HUKUKU",
      description:
        "Vatandaşlık hukuku ile ilgili başvuru süreçleri ve dava takibi hizmetleri sunuyoruz.",
      content: `
        <h3>Vatandaşlık Hukuku Danışmanlık Hizmetlerimiz</h3>
        <p>Vatandaşlık, kişi ile devlet arasındaki hukuki bağı ifade eder ve temel hakların kullanımında belirleyici rol oynar. Hukuk büromuz, Türk vatandaşlığının kazanılması, kaybı ve çifte vatandaşlık konularında uzman kadrosuyla hizmet vermektedir.</p>
        
        <h3>Sunduğumuz Vatandaşlık Hukuku Hizmetleri</h3>
        <ul>
          <li>Türk vatandaşlığına başvuru süreçlerinin yönetimi</li>
          <li>Yatırım yoluyla vatandaşlık başvuruları</li>
          <li>Evlilik yoluyla vatandaşlık edinme işlemleri</li>
          <li>İstisnai vatandaşlık başvuruları</li>
          <li>Türk vatandaşlığından çıkma işlemleri</li>
          <li>Vatandaşlık hakkının kaybı durumunda yeniden kazanma başvuruları</li>
          <li>Çifte vatandaşlık konularında danışmanlık</li>
          <li>Vatandaşlık davaları ve idari itiraz süreçleri</li>
          <li>Vatansızlık durumlarında hukuki destek</li>
        </ul>
        
        <h3>Türk Vatandaşlığını Kazanma Yolları</h3>
        <p>Türk vatandaşlığı, doğum yoluyla (soy bağı veya doğum yeri esası), evlenme yoluyla, yatırım yoluyla veya istisnai yollarla kazanılabilir. Her bir yöntemin kendine özgü şartları ve başvuru süreçleri bulunmaktadır.</p>
        
        <p>Hukuk büromuz, sizin durumunuza en uygun vatandaşlık kazanma yolunu belirleyerek, başvuru sürecini profesyonelce yönetir. Gerekli evrakların hazırlanması, yetkili kurumlara başvuruların yapılması ve sürecin takibi konularında kapsamlı destek sağlarız.</p>
        
        <h3>Neden Vatandaşlık Hukuku Konusunda Profesyonel Destek Almalısınız?</h3>
        <p>Vatandaşlık başvuruları, karmaşık bürokratik süreçler içerir ve sık değişen mevzuata tabidir. Doğru bilgi ve profesyonel destek olmadan yapılan başvurular, zaman kaybına ve hatta başvurunun reddine yol açabilir.</p>
        
        <p>Deneyimli vatandaşlık hukuku avukatlarımız, güncel mevzuata hakimiyetleri ve kurumsal ilişkileriyle, vatandaşlık süreçlerinizi hızlı ve sorunsuz şekilde yönetmenize yardımcı olur. Her müvekkilimizin özgün durumunu dikkate alarak, kişiye özel çözümler geliştiririz.</p>
      `,
    },
    "fikri-mulkiyet-hukuku": {
      title: "FİKRİ MÜLKİYET HUKUKU",
      description:
        "Fikri ürün olan, markalaşmış değerli bulan fikri ürünleri olan her şeyin kapsandığı bu hukuk alanında özellikle marka hukuku ve markaların hakları önem arz etmektedir. Şahte ürünlerin üretimi ve satılması ve pek çok şey bu hukuk alanının ilgilendirmektedir. Fikri ürünlerin anlaşılması ya da kullanılması, telif haklarının ihlali edilmesi ya da başka bir alanda kapsanımındır.",
      content: `
        <h3>Fikri Mülkiyet Hukuku Hizmetlerimiz</h3>
        <p>Fikri mülkiyet hakları, yaratıcı emeğin korunmasını ve değerlendirilmesini sağlayan temel hukuki araçlardır. Hukuk büromuz, fikri ve sınai hakların tescili, korunması ve ihlal durumlarında hukuki süreçlerin yönetimi konularında uzmanlaşmıştır.</p>
        
        <h3>Sunduğumuz Fikri Mülkiyet Hukuku Hizmetleri</h3>
        <ul>
          <li>Marka tescil başvuruları ve takibi</li>
          <li>Patent ve faydalı model başvuruları</li>
          <li>Telif hakları danışmanlığı</li>
          <li>Endüstriyel tasarım tescili</li>
          <li>Coğrafi işaret ve geleneksel ürün adı tescili</li>
          <li>Lisans ve franchise sözleşmelerinin hazırlanması</li>
          <li>Fikri mülkiyet haklarının devri ve kullanım izni sözleşmeleri</li>
          <li>Marka ve patent ihlallerine karşı hukuki koruma</li>
          <li>Sahte ürünlere karşı mücadele ve taklit davalarının takibi</li>
          <li>İnternet ortamında fikri mülkiyet haklarının korunması</li>
        </ul>
        
        <h3>Marka Hukuku</h3>
        <p>Markalar, işletmelerin en değerli varlıkları arasında yer alır. Bir markanın tescili, korunması ve stratejik yönetimi, işletmenin pazar değerini ve rekabet gücünü doğrudan etkiler.</p>
        
        <p>Hukuk büromuz, markanızın tescil sürecinden, markaya yönelik ihlallere karşı korunmasına kadar tüm aşamalarda yanınızdadır. Ulusal ve uluslararası marka tescil başvurularını yönetir, marka stratejinizi hukuki açıdan destekler ve olası ihlallere karşı etkin koruma sağlarız.</p>
        
        <h3>Patent ve Tasarım Hukuku</h3>
        <p>Buluşların ve özgün tasarımların korunması, inovasyon ekosisteminin sağlıklı işleyişi için hayati önem taşır. Patent ve tasarım tescilleri, Ar-Ge çalışmalarının ticari değere dönüşmesini sağlayan temel araçlardır.</p>
        
        <p>Hukuk büromuz, buluşlarınızın ve tasarımlarınızın ulusal ve uluslararası düzeyde korunması için gerekli tüm hukuki süreçleri yönetir. Patent ve tasarım başvurularının hazırlanması, takibi ve ihlal durumlarında hukuki korumanın sağlanması konularında uzman kadromuzla yanınızdayız.</p>
        
        <h3>Telif Hakları</h3>
        <p>Edebi, sanatsal ve bilimsel eserlerin korunmasını sağlayan telif hakları, yaratıcı endüstrilerin temelini oluşturur. Dijital dönüşümle birlikte telif hakları alanında yeni zorluklar ve fırsatlar ortaya çıkmaktadır.</p>
        
        <p>Hukuk büromuz, eser sahiplerinin ve kullanıcıların hak ve yükümlülüklerini dengeli şekilde gözeterek, telif hakları alanında kapsamlı hukuki destek sunar. Eser sahipliği, lisanslama, hak devri ve ihlallere karşı koruma konularında uzman kadromuzla yanınızdayız.</p>
      `,
    },
  };
  // Find the current service based on the URL parameter
  const currentService = serviceDetails[serviceSlug] || null;

  // If service is not found, show a message
  if (!currentService) {
    return (
      <div className="min-h-screen relative">
        {/* Background layers */}
        <div className="fixed inset-0 bg-black z-0"></div>
        <div
          className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
          style={{ backgroundImage: `url(${officeImage})` }}
        ></div>

        <Navbar />

        <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hizmet Bulunamadı
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Aradığınız hizmet sayfası mevcut değil. Lütfen tüm hizmetlerimizi
              görmek için aşağıdaki bağlantıya tıklayınız.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-[#dcac2f] text-black font-medium rounded-md transition-all duration-300 hover:bg-[#b5872c]"
            >
              Tüm Hizmetlerimiz
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </div>
        </div>

        <FloatingContactButtons />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background layers */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      <Navbar />

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#dcac2f]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#dcac2f]">
              Hizmetlerimiz
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#dcac2f]">{currentService.title}</span>
          </div>

          {/* Service title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 heading-font">
            {currentService.title}
          </h1>

          {/* Service content */}
          <div className="bg-gray-900 bg-opacity-80 p-6 md:p-8 rounded-lg mb-8">
            <div
              className="text-white prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: currentService.content }}
            ></div>
          </div>

          {/* Call to action */}
          <div className="bg-[#dcac2f] bg-opacity-20 border border-[#dcac2f] rounded-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hukuki Danışmanlık Almak İster misiniz?
            </h3>
            <p className="text-gray-300 mb-6">
              Bu konuda uzman avukatlarımız, sizin için en iyi çözümü sunmak
              üzere hazır. Hemen bizimle iletişime geçin ve ilk danışmanlık
              görüşmenizi planlayın.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#dcac2f] text-black font-medium rounded-md transition-all duration-300 hover:bg-[#b5872c]"
            >
              İletişime Geçin
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
            </Link>
          </div>

          {/* Back to all services */}
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-[#dcac2f] font-medium hover:text-[#b5872c] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Tüm Hizmetlerimizi Görüntüle
            </Link>
          </div>
        </div>
      </div>

      <FloatingContactButtons />
    </div>
  );
};

export default ServicesDetail;
