import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/yaldiz1.png";
import "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const phoneNumber = "+905330319009"; // Telefon numarası boşluksuz formatta

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg py-2" : "bg-black bg-opacity-70 py-3"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo ve isim alanı */}
        <div className="flex items-center space-x-3 md:ml-4">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto transition-all duration-300"
            />
          </Link>
          <Link
            to="/"
            className="flex flex-col items-start justify-center gap-0 ml-2 cursor-pointer"
          >
            <span className="text-xl font-semibold text-[#dcac2f] drop-shadow-lg tracking-wide text-left">
              Av.
            </span>
            <span className="text-2xl font-semibold text-[#dcac2f] drop-shadow-lg tracking-wide text-left">
              Zafer Tağa
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 mx-4">
          <Link
            to="/"
            className={`nav-link text-[#dcac2f] font-medium text-lg drop-shadow-lg relative py-2 hover:scale-105 transition-transform duration-200 ${
              location.pathname === "/" ? "active-link" : ""
            }`}
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            className={`nav-link text-[#dcac2f] font-medium text-lg drop-shadow-lg relative py-2 hover:scale-105 transition-transform duration-200  ${
              location.pathname === "/about" ? "active-link" : ""
            }`}
          >
            Hakkımızda
          </Link>
          <Link
            to="/services"
            className={`nav-link text-[#dcac2f] font-medium text-lg drop-shadow-lg relative py-2 hover:scale-105 transition-transform duration-200 ${
              location.pathname === "/services" ? "active-link" : ""
            }`}
          >
            Hizmetlerimiz
          </Link>
          <Link
            to="/articles"
            className={`nav-link text-[#dcac2f] font-medium text-lg drop-shadow-lg relative py-2 hover:scale-105 transition-transform duration-200 ${
              location.pathname === "/articles" ? "active-link" : ""
            }`}
          >
            Makaleler
          </Link>
          <Link
            to="/contact"
            className={`nav-link text-[#dcac2f] font-medium text-lg drop-shadow-lg relative py-2 hover:scale-105 transition-transform duration-200 ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
          >
            İletişim
          </Link>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4 mr-4">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center text-[#dcac2f] text-lg drop-shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>+90 533 031 9009</span>
          </a>
          <Link
            to="/faq"
            className="text-[#755721] font-bold text-lg heading-font drop-shadow-lg hover:scale-105 transition-transform duration-200"
          >
            S.S.S
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <a href={`tel:${phoneNumber}`} className="mr-4 text-[#dcac2f]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c-.363-.271-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#dcac2f] focus:outline-none"
            aria-label="Toggle menu"
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
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 py-2 bg-black bg-opacity-95 shadow-lg border-t border-[#dcac2f] border-opacity-30">
          <div className="flex flex-col px-6 py-2">
            <Link
              to="/"
              className={`nav-link text-[#dcac2f] py-3 border-b border-gray-800 text-lg hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200 ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              to="/about"
              className={`nav-link text-[#dcac2f] py-3 border-b border-gray-800 text-lg hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200 ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              to="/services"
              className={`nav-link text-[#dcac2f] py-3 border-b border-gray-800 text-lg hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200 ${
                location.pathname === "/services" ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/articles"
              className={`nav-link text-[#dcac2f] py-3 border-b border-gray-800 text-lg hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200 ${
                location.pathname === "/articles" ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Makaleler
            </Link>
            <Link
              to="/contact"
              className={`nav-link text-[#dcac2f] py-3 border-b border-gray-800 text-lg hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200 ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <Link
              to="/faq"
              className="py-3 text-[#755721] font-bold text-lg heading-font hover:bg-[#dcac2f] hover:bg-opacity-20 px-2 rounded transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              S.S.S
            </Link>
          </div>
        </div>
      )}

      {/* Stil tanımlamaları */}
      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #dcac2f;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .active-link::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
