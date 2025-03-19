import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import officeImage from "../assets/002.jpg";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Lütfen tüm alanları doldurun.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      // API çağrısını 3002 portuna yapıyoruz
      console.log("Kayıt için gönderilen veriler:", formData);
      const res = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      console.log("API response status:", res.status);
      const data = await res.json();
      console.log("API response data:", data);

      if (!res.ok) {
        setLoading(false);
        return setErrorMessage(data.message || "Kayıt başarısız");
      }

      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      console.error("Kayıt hatası:", error);
      setErrorMessage(
        "Bir bağlantı hatası oluştu. API sunucusunun çalıştığından emin olun."
      );
      setLoading(false);
    }
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

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Kayıt Ol
          </h1>

          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-white mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="kullaniciadi"
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ornek@mail.com"
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded font-medium ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
              </button>

              {/* Google ile giriş butonu (OAuth) */}
              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-gray-600 absolute w-full"></div>
                <div className="bg-black bg-opacity-70 text-gray-400 text-sm px-3 relative">
                  veya
                </div>
              </div>

              <OAuth />
            </form>

            <div className="mt-4 text-center text-gray-300">
              <span>Zaten bir hesabınız var mı? </span>
              <Link to="/sign-in" className="text-[#dcac2f] hover:underline">
                Giriş Yap
              </Link>
            </div>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-900 bg-opacity-70 text-white rounded">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
