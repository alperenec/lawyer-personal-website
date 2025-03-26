import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import officeImage from "../assets/002.jpg";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_URL}/api/post/getposts?slug=${postSlug}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        if (res.ok && data.posts.length > 0) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/post/getposts?limit=3`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          const filteredPosts = data.posts.filter((p) => p.slug !== postSlug);
          setRecentPosts(filteredPosts.slice(0, 3));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentPosts();
  }, [postSlug]);

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-black z-0"></div>
        <div
          className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
          style={{ backgroundImage: `url(${officeImage})` }}
        ></div>
        <Navbar />
        <div className="relative z-20 flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#dcac2f]"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-black z-0"></div>
        <div
          className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
          style={{ backgroundImage: `url(${officeImage})` }}
        ></div>
        <Navbar />
        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-white">
          <h2 className="text-2xl font-bold mb-4">Makale Bulunamadı</h2>
          <p className="mb-6">
            Aradığınız makale bulunamadı veya bir hata oluştu.
          </p>
          <Link
            to="/articles"
            className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded-md font-medium transition-all duration-300"
          >
            Tüm Makalelere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>
      <Navbar />
      <main className="relative z-20 max-w-6xl mx-auto px-4 pt-36 pb-20">
        <div className="bg-black bg-opacity-70 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(post.createdAt).toLocaleDateString("tr-TR")}
              </span>
              <Link
                to={`/articles?category=${post.category}`}
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Link>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {Math.ceil(post.content.length / 1000)} dk okuma
              </span>
            </div>
          </div>
          <div className="flex justify-center p-4 bg-gray-900">
            <img
              src={post.image}
              alt={post.title}
              className="max-w-full max-h-[400px] object-contain"
            />
          </div>
          <div className="p-6">
            <div
              className="text-gray-300 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
        {recentPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Diğer Makaleler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
}
