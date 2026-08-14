"use client";
import { useEffect, useState } from "react";
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
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      {showArrow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] flex flex-col items-center pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#c9a227] text-3xl"
          >
            ↓
          </motion.div>

          <span className="text-[#c9a227] text-xs mt-1">اسحب للأسفل</span>
        </motion.div>
      )}
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
          src="/assets/background.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover wedding-background"
        />

        {/* طبقة شفافة فوق الصورة */}
        <div className="absolute inset-0 bg-black/10" />

        {/* المحتوى */}
        <div className="relative z-10 -translate-y-14">
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
        text-3xl
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
        text-xl
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
              إِنَّ فِي ذَلِكَ لَآَيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ﴿21﴾
            </p>
            <p
              dir="rtl"
              className="
        text-1xl
        sm:text-4xl
        md:text-5xl
        font-serif
        font-bold
        text-[#57103C]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]
      "
            >
              ***سورة الروم***
            </p>
            <p
              dir="rtl"
              className="
        text-1xl
        sm:text-4xl
        md:text-5xl
        font-serif
        font-bold
        text-[#57103C]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]
      "
            >
              اللهم صَلِ عَلَى سَيِّدِنَا مُحَمَّدٍ أَصْلِ الأُصُول، نُورِ
              الْجَمَالِ، وَسِرِّ الْقَبُول، أَصْلِ الْكَمَالِ، وَبَابِ
              الْوُصُول، صلاةً تَدُومُ وَلا تَزُول
            </p>
          </motion.div>
          <div className="-translate-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-sm md:text-xl whitespace-nowrap font-semibold"
            >
              بعد إهداكم عاطر التحية وأزكى السلام
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-xl whitespace-nowrap font-semibold"
            >
              يتشرف السيد عبد الستار لملومي والمرحوم عبد السلام جبلاوي
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-sm md:text-xl whitespace-nowrap font-semibold"
            >
              بدعوتكم لحضور ومشاركة فرحتهم بمناسبة زفاف ابنيهما
            </motion.p>

            {/* أسماء العروسين */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8 px-4 whitespace-nowrap"
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal text-[#CC9110]">
                سفيان
              </h1>

              <span className="text-2xl sm:text-4xl md:text-6xl">❤️</span>

              <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal text-[#CC9110]">
                أميرة
              </h1>
            </motion.div>
          </div>
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
