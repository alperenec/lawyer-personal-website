import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google logosunu içeren ikon

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      // Backend'e kullanıcı verileri gönder
      const res = await fetch(`${API_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          googlePhotoUrl: result.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        console.error("Backend authentication failed:", data.message);
      }
    } catch (error) {
      console.log("Google sign in failed:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-white text-gray-700 hover:bg-gray-100 p-3 rounded-md w-full flex items-center justify-center gap-2 border border-gray-300"
    >
      <FcGoogle className="h-6 w-6" /> {/* React Icons'tan Google logosu */}
      Google ile devam et
    </button>
  );
}
