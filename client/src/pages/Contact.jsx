import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  // Form gönderilirken hata oluşursa hata mesajını göster
  useEffect(() => {
    // Sayfa yüklendiğinde herhangi bir form hatası varsa temizle
    return () => {
      setFormStatus({
        submitting: false,
        success: false,
        error: false,
        message: "",
      });
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    // EmailJS için güncellenmiş ID değerleri
    emailjs
      .sendForm(
        "service_j50ru0j",
        "template_vzz8reh",
        form.current,
        "KL-W2NAWKSttGZqSm"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setFormStatus({
            submitting: false,
            success: true,
            error: false,
            message:
              "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormStatus({
            submitting: false,
            success: false,
            error: true,
            message:
              "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          });
        }
      );
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

      <div className="relative z-20 pt-32 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 heading-font">
            İletişim
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* İletişim Bilgileri */}
            <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#dcac2f] mb-6">
                Bize Ulaşın
              </h2>

              <div className="space-y-6">
                {/* Adres Bilgisi */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#dcac2f] p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Adres
                    </h3>
                    <p className="text-gray-300">
                      Güzelhisar Mah. Adnan Menderes Blv.
                      <br />
                      Ocak Pasajı Aso Apt. No:21 / 12
                      <br />
                      09010 Efeler/AYDIN
                    </p>
                    <a
                      href="https://g.co/kgs/HJeP2Am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#dcac2f] hover:underline"
                    >
                      Haritada Göster
                    </a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#dcac2f] p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Telefon
                    </h3>
                    <p className="text-gray-300">
                      <a
                        href="tel:+905330319009"
                        className="hover:text-[#dcac2f]"
                      >
                        +90 533 031 9009
                      </a>
                    </p>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#dcac2f] p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      E-posta
                    </h3>
                    <p className="text-gray-300">
                      <a
                        href="mailto:av.zafertaga@gmail.com"
                        className="hover:text-[#dcac2f]"
                      >
                        av.zafertaga@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Baro Bilgisi */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#dcac2f] p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Baro
                    </h3>
                    <p className="text-gray-300">Aydın Barosu / 2672</p>
                  </div>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#dcac2f] mb-6">
                Mesaj Gönderin
              </h2>

              {formStatus.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-white mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="from_name"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                  />
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-white mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Konu *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="kvkk"
                    name="kvkk"
                    required
                    className="mr-2"
                  />
                  <label htmlFor="kvkk" className="text-gray-300 text-sm">
                    KVKK kapsamında verilerimin işlenmesine izin veriyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded font-medium ${
                    formStatus.submitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus.submitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </div>
  );
};

export default Contact;
