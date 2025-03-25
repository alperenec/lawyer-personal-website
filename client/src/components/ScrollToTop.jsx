import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa değiştiğinde sayfanın en üstüne kaydır
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Daha yumuşak kaydırma için
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
