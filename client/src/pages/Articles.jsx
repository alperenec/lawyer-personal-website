import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContactButtons from "../components/FloatingContactButtons";
import PostCard from "../components/PostCard";
import officeImage from "../assets/002.jpg";

export default function Articles() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showMore, setShowMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Using the direct API URL
  const API_URL = "https://zafer-taga.vercel.app";

  // Retry mechanism for API calls
  const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(
          `API returned ${response.status}: ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        console.log(`Retrying request to ${url}, ${retries} retries left`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 1.5);
      }
      throw error;
    }
  };

  // Handle URL parameters for category filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  // Main function to fetch posts with proper error handling
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(false);
        setErrorMessage("");

        // Build the URL with query parameters
        let url = `${API_URL}/api/post/getposts?limit=9`;
        if (selectedCategory) url += `&category=${selectedCategory}`;
        if (searchTerm) url += `&searchTerm=${searchTerm}`;

        console.log("Fetching posts from:", url);

        // Use our retry mechanism
        const data = await fetchWithRetry(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
        });

        console.log("API response data:", data);

        setPosts(data.posts || []);
        setShowMore((data.posts || []).length >= 9);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(true);
        setErrorMessage(
          `Makaleler yüklenirken bir hata oluştu: ${error.message}`
        );
        setLoading(false);
      }
    };

    // Only fetch if we have a valid API URL
    if (API_URL) {
      fetchPosts();
    } else {
      setError(true);
      setErrorMessage(
        "API URL bulunamadı. Lütfen sistem yöneticisine başvurun."
      );
      setLoading(false);
    }
  }, [selectedCategory, searchTerm]);

  // Fetch categories with retry mechanism
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchWithRetry(`${API_URL}/api/post/getposts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
        });

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(
            (data.posts || [])
              .filter((post) => post.category) // Filter out posts without categories
              .map((post) => post.category)
          ),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // We don't set the main error state here to avoid disrupting the main content
      }
    };

    fetchCategories();
  }, []);

  // Function to load more posts with retry
  const handleShowMore = async () => {
    const startIndex = posts.length;

    try {
      let url = `${API_URL}/api/post/getposts?startIndex=${startIndex}&limit=9`;
      if (selectedCategory) url += `&category=${selectedCategory}`;
      if (searchTerm) url += `&searchTerm=${searchTerm}`;

      const data = await fetchWithRetry(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
      });

      setPosts((prev) => [...prev, ...(data.posts || [])]);
      setShowMore((data.posts || []).length >= 9);
    } catch (error) {
      console.error("Error fetching more posts:", error);
      // Show a temporary error message without disrupting the UI
      alert(
        "Daha fazla makale yüklenirken hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already triggered via the useEffect when searchTerm changes
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPosts([]); // Clear posts when changing category
  };

  return (
    <div className="min-h-screen relative">
      {/* Background layers */}
      <div className="fixed inset-0 bg-black z-0"></div>
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 z-10"
        style={{ backgroundImage: `url(${officeImage})` }}
      ></div>

      <Navbar />

      <div className="relative z-20 pt-36 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 heading-font">
            Makaleler
          </h1>

          {/* Search and Filter Section */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <form onSubmit={handleSearch} className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Makale ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 pl-10 focus:outline-none focus:border-[#dcac2f]"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </form>

              {/* Category Dropdown */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full md:w-auto bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-[#dcac2f]"
                >
                  <option value="">Tüm Kategoriler</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
            {loading ? (
              // Loading state
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#dcac2f]"></div>
              </div>
            ) : error ? (
              // Error state
              <div className="text-center py-20">
                <p className="text-xl text-white mb-4">
                  {errorMessage || "Makaleler yüklenirken bir hata oluştu."}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded-md font-medium transition-all duration-300"
                >
                  Tekrar Dene
                </button>
              </div>
            ) : posts.length > 0 ? (
              // Posts found
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
                {showMore && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={handleShowMore}
                      className="bg-transparent hover:bg-[#dcac2f] text-[#dcac2f] hover:text-black border border-[#dcac2f] px-6 py-3 rounded-md font-medium transition-all duration-300"
                    >
                      Daha Fazla Göster
                    </button>
                  </div>
                )}
              </>
            ) : (
              // No posts found
              <div className="text-center py-20">
                <p className="text-xl text-white mb-4">
                  {searchTerm || selectedCategory
                    ? "Arama kriterlerine uygun makale bulunamadı."
                    : "Henüz makale bulunmamaktadır."}
                </p>
                {(searchTerm || selectedCategory) && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("");
                    }}
                    className="bg-[#dcac2f] hover:bg-[#b5872c] text-black px-6 py-3 rounded-md font-medium transition-all duration-300"
                  >
                    Tüm Makaleleri Göster
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Categories Section */}
          {categories.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Kategorilere Göre Keşfet
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#dcac2f] text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => handleCategoryChange("")}
                    className="px-4 py-2 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300"
                  >
                    Tümünü Göster
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <FloatingContactButtons />
      <Footer />
    </div>
  );
}
