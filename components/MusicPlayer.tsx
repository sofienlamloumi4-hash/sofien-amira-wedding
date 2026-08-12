"use client";

import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <>
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="none" />

      <motion.button
        onClick={toggleMusic}
        animate={
          playing
            ? {
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: 5,

          repeat: playing ? Infinity : 0,

          ease: "linear",
        }}
        className="
fixed
bottom-6
left-6
z-40
w-16
h-16
rounded-full
bg-[#c9a227]
text-white
shadow-2xl
flex
items-center
justify-center
"
      >
        {playing ? <Pause size={28} /> : <Music size={28} />}
      </motion.button>
    </>
  );
}
