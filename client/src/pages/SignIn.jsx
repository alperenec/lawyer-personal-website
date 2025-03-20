import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import officeImage from "../assets/002.jpg";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Lütfen tüm alanları doldurun"));
    }

    try {
      dispatch(signInStart());
      console.log("Giriş için gönderilen veriler:", formData);

      // API çağrısını 3000 portuna yapıyoruz (3002 yerine)
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      console.log("API response status:", res.status);
      const data = await res.json();
      console.log("API response data:", data);

      if (!res.ok) {
        return dispatch(signInFailure(data.message || "Giriş başarısız"));
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.error("Giriş hatası:", error);
      dispatch(
        signInFailure(
          "Bir bağlantı hatası oluştu. API sunucusunun çalıştığından emin olun."
        )
      );
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
            Giriş Yap
          </h1>

          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
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
              <span>Hesabınız yok mu? </span>
              <Link to="/sign-up" className="text-[#dcac2f] hover:underline">
                Kayıt Ol
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
