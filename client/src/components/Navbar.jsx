import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yaldiz1.png"; // yaldiz1.png kullanılıyor

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-bg py-6 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ve Yazı */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24" />
          </Link>
          <div className="name-text flex flex-col items-center justify-center h-18 gap-0">
            <span className="text-2xl font-semibold text-[#dcac2f] drop-shadow-lg tracking-wide">
              Av.
            </span>
            <span className="text-3xl font-semibold text-[#dcac2f] drop-shadow-lg tracking-wide">
              Zafer
            </span>
            <span className="text-3xl font-semibold text-[#dcac2f] drop-shadow-lg tracking-wide">
              Tağa
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-[#dcac2f] hover:text-[#b5872c] font-medium text-xl drop-shadow-lg"
          >
            Anasayfa
          </Link>
          <Link
            to="/hizmetlerimiz"
            className="text-[#dcac2f] hover:text-[#b5872c] font-medium text-xl drop-shadow-lg"
          >
            Hizmetlerimiz
          </Link>
          <Link
            to="/avukat"
            className="text-[#dcac2f] hover:text-[#b5872c] font-medium text-xl drop-shadow-lg"
          >
            Avukat
          </Link>
          <Link
            to="/makaleler"
            className="text-[#dcac2f] hover:text-[#b5872c] font-medium text-xl drop-shadow-lg"
          >
            Makaleler
          </Link>
          <Link
            to="/iletisim"
            className="text-[#dcac2f] hover:text-[#b5872c] font-medium text-xl drop-shadow-lg"
          >
            İletişim
          </Link>
        </div>

        {/* Contact Info (Telefon Numarası Büyük Boyut) */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center text-[#dcac2f] text-xl drop-shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>+90 543 297 55 16</span>
          </div>
          <div className="ml-6 text-[#755721] font-bold text-xl heading-font drop-shadow-lg">
            S.S.S
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#dcac2f] hover:text-[#b5872c] focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 py-2 bg-[#f8f5ef] bg-opacity-90 shadow-lg rounded-lg">
          <div className="flex flex-col px-4 py-2">
            <Link
              to="/"
              className="text-[#dcac2f] hover:text-[#b5872c] py-2 border-b border-gray-300 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              to="/hizmetlerimiz"
              className="text-[#dcac2f] hover:text-[#b5872c] py-2 border-b border-gray-300 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/avukat"
              className="text-[#dcac2f] hover:text-[#b5872c] py-2 border-b border-gray-300 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Avukat
            </Link>
            <Link
              to="/makaleler"
              className="text-[#dcac2f] hover:text-[#b5872c] py-2 border-b border-gray-300 text-xl"
              onClick={() => setIsOpen(false)}
            >
              Makaleler
            </Link>
            <Link
              to="/iletisim"
              className="text-[#dcac2f] hover:text-[#b5872c] py-2 border-b border-gray-300 text-xl"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <div className="py-2 flex items-center text-[#dcac2f] text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span>+90 543 297 55 16</span>
            </div>
            <div className="py-2 text-[#755721] font-bold text-xl heading-font">
              S.S.S
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
