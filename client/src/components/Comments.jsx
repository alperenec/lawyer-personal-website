import React, { useState, useEffect } from "react";

const Comments = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  // Sample client comments
  const comments = [
    {
      text: "Çankırı Avukat.com'a ilk danışma görüşmesi için gittim ve hemen etkilendim. Avukatların samimi ve anlayışlı yaklaşımları beni rahatlattı. Sorunum çözüme kavuştu ve bu süreçte bana her adımda destek oldular. Harika bir deneyimdi!",
      author: "Fatma Ö.",
    },
    {
      text: "Profesyonel ekip ve hızlı çözüm! Hukuki süreçte her zaman yanımda oldular, teşekkür ederim.",
      author: "Ahmet K.",
    },
    {
      text: "Güvenilir ve etkili bir hizmet aldım. Sorunlarımı kısa sürede çözdüler, çok memnunum!",
      author: "Ayşe Y.",
    },
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) =>
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [comments.length]);

  const nextComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-black rounded-xl">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
          MÜVEKKİL YORUMLARIMIZ
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <button
              onClick={prevComment}
              className="text-[#dcac2f] hover:text-[#b5872c] text-xl md:text-2xl font-bold px-2 md:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none"
              aria-label="Previous comment"
            >
              &lt;
            </button>
            <div className="w-full max-w-md md:max-w-2xl mx-2 md:mx-4 p-6 md:p-8 bg-gray-800 bg-opacity-80 rounded-lg shadow-xl transform hover:scale-102 transition-transform duration-300">
              <p className="text-gray-300 text-sm md:text-lg italic mb-6">
                <span className="text-[#dcac2f] text-xl md:text-2xl mr-2">
                  "
                </span>
                {comments[currentCommentIndex].text}
                <span className="text-[#dcac2f] text-xl md:text-2xl ml-2">
                  "
                </span>
              </p>
              <p className="text-right text-[#dcac2f] font-medium text-sm md:text-base">
                - {comments[currentCommentIndex].author}
              </p>
            </div>
            <button
              onClick={nextComment}
              className="text-[#dcac2f] hover:text-[#b5872c] text-xl md:text-2xl font-bold px-2 md:px-4 py-2 rounded-full transition-all duration-300 focus:outline-none"
              aria-label="Next comment"
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center mt-6">
            {comments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCommentIndex(index)}
                className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentCommentIndex ? "bg-[#dcac2f]" : "bg-gray-500"
                }`}
                aria-label={`Go to comment ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
