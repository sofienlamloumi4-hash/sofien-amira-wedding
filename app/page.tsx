"use client";

import { motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import RSVPButton from "@/components/RSVPButton";
import FlowerEffect from "@/components/FlowerEffect";
import WeddingSeal from "@/components/WeddingSeal";

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
min-h-screen
flex
flex-col
items-center
justify-center
text-center
px-5
"
      >
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
text-gray-500
"
        >
          دعوة زفاف
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
text-6xl
md:text-8xl
font-bold
text-[#c9a227]
"
        >
          سفيان
        </motion.h1>

        <div
          className="
text-5xl
my-5
"
        >
          ❤️
        </div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
text-6xl
md:text-8xl
font-bold
text-[#c9a227]
"
        >
          أميرة
        </motion.h1>
        <WeddingSeal />
        <p
          className="
mt-10
text-xl
"
        >
          24 أكتوبر 2026
        </p>
      </section>

      <section
        className="
py-20
text-center
"
      >
        <h2
          className="
text-4xl
font-bold
text-[#c9a227]
mb-10
"
        >
          Save The Date
        </h2>

        <Countdown />
      </section>

      <Story />

      <EventDetails />

      <Gallery />

      <section
        className="
py-20
text-center
"
      >
        <h2
          className="
text-4xl
font-bold
text-[#c9a227]
mb-8
"
        >
          هل ستشاركوننا فرحتنا؟
        </h2>

        <RSVPButton />
      </section>

      <MusicPlayer />

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
    </main>
  );
}
