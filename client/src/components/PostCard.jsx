import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  // Generate a truncated excerpt from the content
  const createExcerpt = (content) => {
    // Remove HTML tags
    const plainText = content.replace(/<[^>]+>/g, "");
    // Truncate to appropriate length
    return plainText.length > 120
      ? plainText.substring(0, 120) + "..."
      : plainText;
  };

  return (
    <div className="group relative h-[380px] overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-[#dcac2f] transition-all duration-300 shadow-lg flex flex-col">
      <Link
        to={`/post/${post.slug}`}
        className="block h-[180px] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-grow p-4">
        <div className="mb-2">
          <Link
            to={`/articles?category=${post.category}`}
            className="text-xs text-[#dcac2f] hover:underline"
          >
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </Link>
          <span className="text-xs text-gray-400 ml-3">
            {new Date(post.createdAt).toLocaleDateString("tr-TR")}
          </span>
        </div>

        <Link to={`/post/${post.slug}`}>
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 hover:text-[#dcac2f] transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {createExcerpt(post.content)}
        </p>

        <Link
          to={`/post/${post.slug}`}
          className="mt-auto text-[#dcac2f] hover:text-white text-sm font-medium flex items-center transition-colors"
        >
          Devamını Oku
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
