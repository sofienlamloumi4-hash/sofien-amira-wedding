"use client";

import { useEffect, useState } from "react";

export default function OpeningScreen() {
  const [loaded, setLoaded] = useState(false);
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const images = ["/assets/aa.jpg", "/assets/bb.jpg", "/assets/cc.png"];

    let count = 0;

    const imageLoaded = () => {
      count++;

      if (count >= images.length) {
        setTimeout(() => {
          setLoaded(true);
        }, 400);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = imageLoaded;
      img.onerror = imageLoaded;
      img.src = src;
    });
  }, []);

  const handleOpen = () => {
    setOpening(true);

    // بعد ابتعاد جناحي المظروف
    setTimeout(() => {
      setHidden(true);

      // إظهار محتوى الزفاف
      const weddingContent = document.getElementById("wedding-content");

      if (weddingContent) {
        weddingContent.style.opacity = "1";
      }
    }, 1000);
  };

  if (hidden) return null;

  return (
    <div
      id="invitation"
      className={`
        fixed
        inset-0
        z-[9999]
        bg-[#fffaf0]
        overflow-hidden
        transition-opacity
        duration-700
        ${loaded ? "opacity-100" : "opacity-100"}
        ${opening ? "open" : ""}
      `}
    >
      {/* Loader */}
      <div
        id="env-loader"
        className={`
          absolute
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          bg-[#fffaf0]
          transition-opacity
          duration-700
          ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="text-center">
          <div className="loader-ring mx-auto mb-5" />

          <p className="text-[#b8941f] tracking-[0.3em] text-sm">
            SOFIEN & AMIRA
          </p>

          <p className="text-gray-500 mt-2 text-sm">جاري تحضير الدعوة...</p>
        </div>
      </div>

      {/* Envelope */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="envelope-container">
          {/* الجناح الأيسر */}
          <img
            id="leftPanel"
            src="/assets/aa.jpg"
            alt=""
            className="envelope-panel left-panel"
          />

          {/* الجناح الأيمن */}
          <img
            id="rightPanel"
            src="/assets/bb.jpg"
            alt=""
            className="envelope-panel right-panel"
          />

          {/* الختم */}
          <button
            id="seal"
            onClick={handleOpen}
            aria-label="فتح الدعوة"
            className="seal-button"
          >
            <img src="/assets/cc.png" alt="فتح الدعوة" className="seal-image" />

            <span className="seal-text  ">افتح الدعوة</span>
          </button>
        </div>
      </div>

      {/* أسماء العروسين */}
      <div
        className={`
          absolute
           top-[20%]
          left-0
          right-0
          text-center
           z-[50]
          transition-all
          duration-700
          ${opening ? "opacity-0 translate-y-5" : "opacity-100"}
        `}
      >
        <p className="text-[#9d7b17] tracking-[0.35em] text-xs mb-3">
          WEDDING INVITATION
        </p>

        <h1 className="text-3xl md:text-5xl text-[#AD1E02] font-serif">
          سفيان <span className="text-[#AD1E02]">♥</span> أميرة
        </h1>

        <p className="mt-3 text-gray-500 text-sm">
          يسعدنا دعوتكم لمشاركة أجمل لحظات حياتنا
        </p>
      </div>

      <style jsx>{`
        .envelope-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: stretch;
          justify-content: center;
          perspective: 1800px;
          overflow: hidden;
        }

        .envelope-panel {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          object-fit: cover;
          z-index: 10;

          transition:
            transform 1.1s cubic-bezier(0.77, 0, 0.175, 1),
            opacity 0.8s ease;
        }

        .left-panel {
          left: 0;
          transform-origin: left center;
        }

        .right-panel {
          right: 0;
          transform-origin: right center;
        }

        /* عند فتح الدعوة */
        .open .left-panel {
          transform: rotateY(-100deg);
          opacity: 0;
        }

        .open .right-panel {
          transform: rotateY(100deg);
          opacity: 0;
        }

        @media (max-width: 640px) {
          .envelope-container {
            width: 100vw;
            height: 100dvh;
          }

          .envelope-panel {
            width: 50%;
            height: 100%;
          }
        }

        .seal-button {
          position: absolute;
          left: 50%;
          top: 50%;

          width: 150px;
          height: 150px;

          transform: translate(-50%, -50%);

          z-index: 100;

          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;

          transition:
            transform 0.4s ease,
            opacity 0.5s ease;
        }

        .seal-button:hover {
          transform: translate(-50%, -50%) scale(1.08);
        }

        .seal-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;

          filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.25));
        }

        .seal-text {
          position: absolute;
          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          width: 100%;

          color: white;
          font-size: 14px;
          font-weight: 400;

          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

          pointer-events: none;
        }

        /* عند فتح الدعوة */
        .open .seal-button {
          transform: translate(-50%, -50%) scale(0.6);

          opacity: 0;
        }

        /* Loader */
        .loader-ring {
          width: 55px;
          height: 55px;

          border-radius: 50%;

          border: 2px solid rgba(184, 148, 31, 0.2);

          border-top-color: #b8941f;

          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* الهاتف */
        @media (max-width: 640px) {
          .envelope-container {
            width: 100vw;
            height: 100dvh;
          }

          .seal-button {
            width: 115px;
            height: 115px;

            z-index: 100;
          }

          .seal-text {
            font-size: 11px;
          }

          .envelope-panel {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
        }
      `}</style>
    </div>
  );
}
