"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OpeningScreen() {
  const [opened, setOpened] = useState(false);

  if (opened) return null;

  return (
    <div
      className="
fixed
inset-0
z-50
bg-[#fffaf0]
flex
items-center
justify-center
overflow-hidden
"
    >
      {/* زخارف ذهبية */}

      <div
        className="
absolute
top-10
left-10
w-32
h-32
border
border-[#c9a227]
rounded-full
opacity-30
"
      />

      <div
        className="
absolute
bottom-10
right-10
w-40
h-40
border
border-[#c9a227]
rounded-full
opacity-30
"
      />

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="
text-center
relative
z-10
"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
mx-auto
mb-10
w-44
h-44
rounded-full
border-4
border-[#c9a227]
flex
items-center
justify-center
shadow-xl
"
        >
          <div>
            <p
              className="
text-gray-500
tracking-widest
"
            >
              WEDDING
            </p>

            <h1
              className="
text-3xl
font-bold
text-[#c9a227]
mt-3
"
            >
              سفيان ❤️ أميرة
            </h1>
          </div>
        </motion.div>

        <p
          className="
text-gray-600
mb-8
text-lg
"
        >
          يسعدنا دعوتكم لمشاركة أجمل لحظات حياتنا
        </p>

        <button
          onClick={() => setOpened(true)}
          className="
px-12
py-4
rounded-full
bg-[#c9a227]
text-white
text-lg
shadow-xl
hover:scale-105
transition
"
        >
          افتح الدعوة
        </button>
      </motion.div>
    </div>
  );
}
