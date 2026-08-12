"use client";

import { motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
//import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import RSVPButton from "@/components/RSVPButton";
import FlowerEffect from "@/components/FlowerEffect";
//import WeddingSeal from "@/components/WeddingSeal";

export default function Home() {
  return (
    <main
      className="
bg-[#fffaf0]
text-gray-800
overflow-hidden
"
    >
      <FlowerEffect />
      <OpeningScreen />
      <section
        className="
    relative
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-5
    overflow-hidden
  "
      >
        {/* صورة الخلفية */}
        <img
          src="/assets/background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover wedding-background"
        />

        {/* طبقة شفافة فوق الصورة */}
        <div className="absolute inset-0 bg-black/10" />

        {/* المحتوى */}
        <div className="relative z-10">
          {/* البسملة */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="mb-20"
          >
            <p
              dir="rtl"
              className="
        text-4xl
        sm:text-4xl
        md:text-5xl
        font-serif
        font-bold
        text-[#57103C]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]
      "
            >
              بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p
              dir="rtl"
              className="
        text-2xl
        sm:text-4xl
        md:text-5xl
        font-serif
        font-bold
        text-[#57103C]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]
      "
            >
              وَمِنْ آَيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
              لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً
              إِنَّ فِي ذَلِكَ لَآَيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ﴿21﴾ ***سورة
              الروم***
            </p>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="
text-lg
mb-8
text-gray-1000 
"
          >
            دعوة زفاف
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" text-lg mb-8 text-gray-500 "
          ></motion.p>{" "}
          {/* أسماء العروسين في سطر واحد */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" flex items-center justify-center gap-2 sm:gap-4 md:gap-8 px-4 whitespace-nowrap "
          >
            {" "}
            <h1 className=" text-4xl sm:text-5xl md:text-8xl font-bold text-[#CC9110] ">
              {" "}
              سفيان{" "}
            </h1>{" "}
            <span className=" text-2xl sm:text-4xl md:text-6xl ">
              {" "}
              ❤️{" "}
            </span>{" "}
            <h1 className=" text-4xl sm:text-5xl md:text-8xl font-bold text-[#CC9110] ">
              {" "}
              أميرة{" "}
            </h1>{" "}
          </motion.div>{" "}
          <p className=" mt-10 text-xl ">24 أكتوبر 2026</p>
        </div>
      </section>

      <section
        className="
py-0
text-center
"
      >
        <Countdown />
      </section>
      <Story />
      <EventDetails />

      <section
        className="
py-0
text-center
"
      >
        <RSVPButton />
      </section>
      <MusicPlayer />
    </main>
  );
}
