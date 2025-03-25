import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Use the full URL with API_URL environment variable
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const res = await fetch(
          `${API_URL}/api/post/getposts?postId=${postId}`,
          {
            credentials: "include",
          }
        );

        // Check if response is JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned non-JSON response");
        }

        const data = await res.json();

        if (!res.ok) {
          console.error("Error response:", data);
          setPublishError(data.message || "Failed to fetch post");
          setLoading(false);
          return;
        }

        if (res.ok && data.posts && data.posts.length > 0) {
          setPublishError(null);
          setFormData(data.posts[0]);
        } else {
          setPublishError("Post not found or empty response");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setPublishError(`Error loading post: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

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

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Upload error response:", errorText);
        setImageUploadError(
          `Image upload failed: ${res.status} ${res.statusText}`
        );
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
      setImageUploadError(`Image upload failed: ${error.message}`);
      setImageUploadProgress(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const res = await fetch(
        `${API_URL}/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message || "Failed to update post");
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      console.error("Update error:", error);
      setPublishError(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update Post</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : publishError ? (
        <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4">
          {publishError}
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <input
              type="text"
              placeholder="Title"
              required
              id="title"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title || ""}
            />
            <select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category || "uncategorized"}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            <button
              type="button"
              onClick={handleUploadImage}
              disabled={imageUploadProgress}
              className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50`}
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
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {imageUploadError}
            </div>
          )}
          {formData.image && (
            <div className="flex justify-center bg-gray-100 p-2 rounded-md">
              <img
                src={formData.image}
                alt="upload"
                className="max-h-60 object-contain"
              />
            </div>
          )}
          <textarea
            placeholder="Write something..."
            className="p-2 h-72 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            value={formData.content || ""}
            onChange={(e) => {
              setFormData({ ...formData, content: e.target.value });
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Update Post
          </button>
        </form>
      )}
    </div>
  );
}
