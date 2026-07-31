"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const details = [
  {
    icon: <CalendarDays size={40} />,
    title: "التاريخ",
    value: "24 أكتوبر 2026",
  },

  {
    icon: <Clock size={40} />,
    title: "الوقت",
    value: "18:00",
  },

  {
    icon: <MapPin size={40} />,
    title: "المكان",
    value: "قاعة الحفل",
  },
];

export default function EventDetails() {
  return (
    <section
      className="
py-24
px-6
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
text-center
text-4xl
font-bold
text-[#c9a227]
mb-14
"
      >
        تفاصيل الحفل
      </motion.h2>

      <div
        className="
max-w-5xl
mx-auto
grid
md:grid-cols-3
gap-8
"
      >
        {details.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.2,
            }}
            className="
bg-white
rounded-[2rem]
p-10
text-center
shadow-xl
border
border-[#c9a227]/40
"
          >
            <div
              className="
text-[#c9a227]
flex
justify-center
mb-5
"
            >
              {item.icon}
            </div>

            <h3
              className="
text-2xl
font-bold
mb-3
"
            >
              {item.title}
            </h3>

            <p
              className="
text-gray-600
"
            >
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        className="
text-center
mt-12
"
      >
        <a
          href="https://maps.app.goo.gl/HVsnRMb6NiNf1BtCA"
          target="_blank"
          className="
inline-flex
items-center
gap-3
bg-[#c9a227]
text-white
px-10
py-4
rounded-full
text-lg
shadow-xl
hover:scale-105
transition
"
        >
          <MapPin size={22} />
          افتح موقع الحفل
        </a>
      </motion.div>
    </section>
  );
}
