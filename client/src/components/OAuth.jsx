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
      console.log("Firebase authentication successful:", result.user);

      // Define API URL
      const API_URL =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      console.log("API URL:", API_URL);

      // Backend'e kullanıcı verileri gönder
      console.log("Sending data to backend:", {
        name: result.user.displayName,
        email: result.user.email,
        googlePhotoUrl: result.user.photoURL,
      });

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

      console.log("Backend response status:", res.status);

      // Be careful with parsing empty responses
      let data;
      const text = await res.text();
      console.log("Raw response:", text);

      if (text) {
        data = JSON.parse(text);
      } else {
        throw new Error("Empty response from server");
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        console.error(
          "Backend authentication failed:",
          data?.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Google sign in failed:", error);
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
