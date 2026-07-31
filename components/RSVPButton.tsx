"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

export default function RSVPButton() {
  const message = encodeURIComponent(
    "السلام عليكم، أود تأكيد حضوري لحفل زفاف سفيان ❤️ أميرة يوم 24 أكتوبر 2026",
  );

  return (
    <section
      className="
py-20
px-6
text-center
"
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="
text-4xl
font-bold
text-[#c9a227]
mb-5
"
      >
        هل ستشاركوننا فرحتنا؟
      </motion.h2>

      <p
        className="
text-gray-600
mb-10
text-lg
"
      >
        يسعدنا حضوركم ومشاركتكم أجمل لحظات حياتنا
      </p>

      <motion.a
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.08,
        }}
        href={`https://wa.me/?text=${message}`}
        target="_blank"
        className="
inline-flex
items-center
gap-3
bg-[#25D366]
text-white
px-12
py-5
rounded-full
text-xl
shadow-2xl
"
      >
        <MessageCircleHeart size={28} />
        تأكيد الحضور
      </motion.a>
    </section>
  );
}
