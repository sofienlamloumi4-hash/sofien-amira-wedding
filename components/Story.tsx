"use client";
import { motion } from "framer-motion";
const moments = [
  {
    icon: "❤️",
    title: "البداية",
    text: "بدأت حكايتنا بلحظة جميلة جمعت بين قلبين.",
  },
  {
    icon: "✨",
    title: "أجمل اللحظات",
    text: "معًا صنعنا ذكريات لا تنسى مليئة بالفرح والمحبة.",
  },
  {
    icon: "💍",
    title: "القرار",
    text: "اخترنا أن نكمل طريقنا معًا ونكتب فصلًا جديدًا من حياتنا.",
  },
  {
    icon: "👰🤵",
    title: "اليوم الكبير",
    text: "نحتفل معكم بأجمل يوم في قصة حبنا.",
  },
];
export default function Story() {
  return (
    <section className=" relative py-24 px-6 overflow-hidden ">
      {" "}
      {/* صورة الخلفية */}{" "}
      <img
        src="/assets/story-bg.jpg"
        alt=""
        className=" absolute inset-0 w-full h-full object-cover "
      />{" "}
      {/* طبقة شفافة فوق الصورة */}{" "}
      <div className=" absolute inset-0 bg-white/55 " /> {/* المحتوى */}{" "}
      <div className="relative z-10">
        {" "}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" text-center text-4xl md:text-5xl font-bold text-[#c9a227] mb-16 "
        >
          {" "}
          قصتنا{" "}
        </motion.h2>{" "}
        <div className=" max-w-3xl mx-auto relative ">
          {" "}
          {/* الخط الذهبي */}{" "}
          <div className=" absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#c9a227] hidden md:block " />{" "}
          <div className="space-y-14">
            {" "}
            {moments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={` relative md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} `}
              >
                {" "}
                <div className=" bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#c9a227]/40 p-8 md:w-5/12 text-center ">
                  {" "}
                  <div className=" text-5xl mb-4 "> {item.icon} </div>{" "}
                  <h3 className=" text-2xl font-bold text-[#c9a227] mb-3 ">
                    {" "}
                    {item.title}{" "}
                  </h3>{" "}
                  <p className=" leading-8 text-gray-600 ">
                    {" "}
                    {item.text}{" "}
                  </p>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
