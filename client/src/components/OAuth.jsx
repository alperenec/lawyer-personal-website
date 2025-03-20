import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      setLoading(true);
      setError(null);
      const provider = new GoogleAuthProvider();
      // Bu satırı kaldırdık çünkü CORS hatalarına sebep olabilir
      // provider.setCustomParameters({ prompt: "select_account" });

      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log("Google auth result:", {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        photo: resultsFromGoogle.user.photoURL,
      });

      // API çağrısını 3000 portuna yapıyoruz (3002 yerine)
      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      console.log("API response status:", res.status);
      const data = await res.json();
      console.log("API response data:", data);

      if (!res.ok) {
        setLoading(false);
        return setError(data.message || "Google ile giriş başarısız");
      }

      dispatch(signInSuccess(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
      setError("Google ile giriş yapılırken bir hata oluştu");
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleGoogleClick}
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-white text-gray-800 px-6 py-3 rounded font-medium hover:bg-gray-200 transition-all w-full"
      >
        <AiFillGoogleCircle className="w-6 h-6 text-red-500" />
        {loading ? "İşleniyor..." : "Google ile devam et"}
      </button>

      {error && (
        <div className="mt-2 text-red-500 text-sm text-center">{error}</div>
      )}
    </>
  );
}
