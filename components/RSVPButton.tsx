"use client";
import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
export default function RSVPButton() {
  const message = encodeURIComponent(
    "السلام عليكم، أود تأكيد حضوري لحفل زفاف سفيان ❤️ أميرة يوم 24 أكتوبر 2026",
  );
  return (
    <section className=" relative py-24 px-6 text-center overflow-hidden ">
      {" "}
      {/* صورة الخلفية */}{" "}
      <img
        src="/assets/rsvp-bg.jpg"
        alt=""
        className=" absolute inset-0 w-full h-full object-cover "
      />{" "}
      {/* طبقة شفافة */} <div className=" absolute inset-0 bg-white/50 " />{" "}
      {/* المحتوى */}{" "}
      <div className=" relative z-10 max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-[2.5rem] px-6 py-14 shadow-2xl border border-[#c9a227]/30 ">
        {" "}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-3xl md:text-4xl font-bold text-[#c9a227] mb-5 "
        >
          {" "}
          هل ستشاركوننا فرحتنا؟{" "}
        </motion.h2>{" "}
        <p className=" text-gray-600  text-lg ">
          {" "}
          يسعدنا حضوركم ومشاركتكم أجمل لحظات حياتنا{" "}
        </p>{" "}
       
      </div>{" "}
      <footer
        className="
py-10
text-center
text-gray-500
"
      >
        سفيان ❤️ أميرة
        <br />
        2026
      </footer>
    </section>
  );
}
