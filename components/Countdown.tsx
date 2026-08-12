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
  }, [weddingDate]);
  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((distance / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((distance / 1000) % 60));
  const items = [
    { title: "يوم", value: days },
    { title: "ساعة", value: hours },
    { title: "دقيقة", value: minutes },
    { title: "ثانية", value: seconds },
  ];
  return (
    <section className=" relative w-full min-h-[500px] overflow-hidden flex items-center justify-center py-20 ">
      {" "}
      {/* صورة الخلفية */}{" "}
      <img
        src="/assets/countdown-bg.webp"
        alt=""
        className=" absolute inset-0 w-full h-full object-cover "
      />{" "}
      {/* طبقة شفافة */} <div className=" absolute inset-0 bg-white/50 " />{" "}
      {/* المحتوى */}{" "}
      <div className=" relative z-10 w-full text-center ">
        {" "}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=" text-4xl md:text-5xl font-bold text-[#c9a227] mb-12 "
        >
          {" "}
          Save The Date{" "}
        </motion.h2>{" "}
        <div className=" flex justify-center gap-4 flex-wrap px-4 ">
          {" "}
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className=" relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#c9a227] bg-white/90 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center "
            >
              {" "}
              <div className=" absolute inset-2 rounded-full border border-[#c9a227]/30 " />{" "}
              <span className=" relative text-3xl md:text-4xl font-bold text-[#c9a227] ">
                {" "}
                {item.value}{" "}
              </span>{" "}
              <span className=" relative text-sm text-gray-600 ">
                {" "}
                {item.title}{" "}
              </span>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
