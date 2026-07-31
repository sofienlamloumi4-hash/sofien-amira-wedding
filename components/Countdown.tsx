"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date("2026-10-24T18:00:00").getTime();

  const [distance, setDistance] = useState(weddingDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setDistance(weddingDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));

  const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));

  const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));

  const seconds = Math.max(0, Math.floor((distance / 1000) % 60));

  const items = [
    {
      title: "يوم",
      value: days,
    },

    {
      title: "ساعة",
      value: hours,
    },

    {
      title: "دقيقة",
      value: minutes,
    },

    {
      title: "ثانية",
      value: seconds,
    },
  ];

  return (
    <div
      className="
flex
justify-center
gap-4
flex-wrap
px-4
"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: index * 0.2,
          }}
          className="
relative
w-24
h-24
md:w-32
md:h-32
rounded-full
border-2
border-[#c9a227]
bg-white
shadow-xl
flex
flex-col
items-center
justify-center
"
        >
          <div
            className="
absolute
inset-2
rounded-full
border
border-[#c9a227]/30
"
          ></div>

          <span
            className="
relative
text-3xl
md:text-4xl
font-bold
text-[#c9a227]
"
          >
            {item.value}
          </span>

          <span
            className="
relative
text-sm
text-gray-600
"
          >
            {item.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
