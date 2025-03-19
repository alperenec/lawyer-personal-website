import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);

      const formData = new FormData();
      formData.append("file", file);

      setImageUploadProgress(1);

      // API URL'sini ortam değişkeninden al
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) {
        let errorText;
        try {
          errorText = await res.json(); // JSON formatında hata mesajı almayı dene
          setImageUploadError(
            errorText.message ||
              `Image upload failed: ${res.status} ${res.statusText}`
          );
        } catch (jsonError) {
          errorText = await res.text(); // JSON değilse, metin olarak al
          setImageUploadError(
            `Image upload failed: ${res.status} ${res.statusText} - ${
              errorText || "Could not connect to the server"
            }`
          );
        }
        setImageUploadProgress(null);
        return;
      }

      const data = await res.json();

      setFormData((prev) => ({
        ...prev,
        image: data.url,
      }));

      setImageUploadProgress(null);
      setImageUploadError(null);
    } catch (error) {
      console.error("Upload error:", error);
      setImageUploadError(
        error.message.includes("Failed to fetch")
          ? "Could not connect to the server. Please ensure the backend is running."
          : `Image upload failed: ${error.message}`
      );
      setImageUploadProgress(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const res = await fetch(`${API_URL}/api/post/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError(
        error.message.includes("Failed to fetch")
          ? "Could not connect to the server. Please ensure the backend is running."
          : "Something went wrong"
      );
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
            className={`p-2 text-white rounded bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 ${
              imageUploadProgress ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={
                    imageUploadProgress === 1
                      ? "Uploading..."
                      : `${imageUploadProgress || 0}%`
                  }
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </button>
        </div>
        {imageUploadError && (
          <div className="p-3 bg-red-100 text-red-700 border border-red-400 rounded">
            {imageUploadError}
          </div>
        )}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <textarea
          placeholder="Write your post content here..."
          required
          id="content"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 h-72 resize-y"
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />
        <button
          type="submit"
          className="p-2 text-white rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          Publish
        </button>
        {publishError && (
          <div className="p-3 mt-5 bg-red-100 text-red-700 border border-red-400 rounded">
            {publishError}
          </div>
        )}
      </form>
    </div>
  );
}
