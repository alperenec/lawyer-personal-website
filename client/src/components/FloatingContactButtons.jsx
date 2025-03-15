import React, { useState, useEffect } from "react";

const FloatingContactButtons = () => {
  const [showWhatsappChat, setShowWhatsappChat] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const phoneNumber = "+905330319009";
  const email = "info@zafertaga.com";

  // WhatsApp sohbetini sayfa yüklendiğinde otomatik gösterme (delay olmadan)
  useEffect(() => {
    setShowWhatsappChat(true);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* WhatsApp chat window */}
      {showWhatsappChat && (
        <div className="mb-4 bg-white rounded-lg shadow-xl overflow-hidden w-72 transition-all duration-300">
          <div className="bg-green-500 p-3 text-white flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
              </svg>
              <div className="flex-1">
                <p className="font-bold text-sm">Av. Zafer Tağa</p>
                <p className="text-xs">Genellikle 1 saat içinde yanıt verir</p>
              </div>
            </div>
            <button
              onClick={() => setShowWhatsappChat(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-3 bg-gray-100">
            <p className="text-gray-700 text-sm">
              Merhaba, hukuki danışmanlık için nasıl yardımcı olabilirim?
            </p>
          </div>
          <div className="p-2 bg-white border-t flex">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              className="flex-1 border rounded-l-lg px-2 py-1 text-sm focus:outline-none"
            />
            <a
              href={`https://wa.me/${phoneNumber.replace(
                "+",
                ""
              )}?text=Merhaba, hukuki danışmanlık için bilgi almak istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-3 py-1 rounded-r-lg hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Horizontal contact buttons layout */}
      <div className="flex items-center justify-end">
        {/* Buttons that slide out to the left */}
        <div
          className={`flex flex-row-reverse mr-2 transition-all duration-300 ${
            showButtons
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
        >
          {/* WhatsApp Button */}
          <button
            onClick={() => setShowWhatsappChat(!showWhatsappChat)}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 mx-2"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
            </svg>
          </button>

          {/* Email Button */}
          <a
            href={`mailto:${email}`}
            className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 mx-2"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </a>

          {/* Phone Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 mx-2"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
            </svg>
          </a>

          {/* Location Button */}
          <a
            href="https://maps.google.com/?q=Istanbul"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 mx-2"
            aria-label="Location"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </a>
        </div>

        {/* Add (Plus) Button - toggles buttons visibility */}
        <button
          onClick={() => setShowButtons(!showButtons)}
          className="bg-[#dcac2f] hover:bg-[#b5872c] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10"
          aria-label="More options"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={`transition-transform duration-300 ${
              showButtons ? "rotate-45" : ""
            }`}
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButtons;
