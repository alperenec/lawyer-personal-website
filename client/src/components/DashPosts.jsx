import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/post/getposts?userId=${currentUser._id}`,
          { credentials: "include" }
        );
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) setShowMore(false);
        } else {
          setError(data.message || "Failed to fetch posts");
        }
      } catch (error) {
        setError(
          error.message.includes("Failed to fetch")
            ? "Could not connect to the server. Please ensure the backend is running."
            : "Error fetching posts: " + error.message
        );
      }
    };
    if (currentUser.isAdmin) fetchPosts();
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `${API_URL}/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`,
        { credentials: "include" }
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) setShowMore(false);
      } else {
        setError(data.message || "Failed to fetch more posts");
      }
    } catch (error) {
      setError(
        error.message.includes("Failed to fetch")
          ? "Could not connect to the server. Please ensure the backend is running."
          : "Error fetching more posts: " + error.message
      );
    }
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `${API_URL}/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Failed to delete post");
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      setError(
        error.message.includes("Failed to fetch")
          ? "Could not connect to the server. Please ensure the backend is running."
          : "Error deleting post: " + error.message
      );
    }
  };

  if (error) {
    return <div className="p-3 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <div className="flex justify-end mb-4">
            <Link to="/create-post">
              <button className="p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Yeni Makale Oluştur
              </button>
            </Link>
          </div>
          <table className="shadow-md w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date updated
                </th>
                <th scope="col" className="px-6 py-3">
                  Post image
                </th>
                <th scope="col" className="px-6 py-3">
                  Post title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr
                  key={post._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/post/${post.slug}`}>
                      <div className="w-20 h-10 flex items-center justify-center bg-gray-900">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="max-h-10 max-w-20 object-contain"
                        />
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{post.category}</td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-post/${post._id}`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7 hover:underline"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg mb-4">Henüz makaleniz bulunmuyor!</p>
          <Link to="/create-post">
            <button className="p-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              İlk Makalenizi Oluşturun
            </button>
          </Link>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 max-w-md w-full">
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500">
                Are you sure you want to delete this post?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDeletePost}
                  className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
