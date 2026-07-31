"use client";

import { motion } from "framer-motion";

const flowers = ["🌸", "🌹", "🌷", "✨", "🤍"];

export default function FlowerEffect() {
  return (
    <div
      className="
fixed
top-0
left-0
w-full
h-screen
overflow-hidden
pointer-events-none
z-50
"
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -100,
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "110vh",

            rotate: 360,

            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,

            delay: Math.random() * 5,

            repeat: Infinity,

            ease: "linear",
          }}
          className="
absolute
text-3xl
"
        >
          {flowers[i % flowers.length]}
        </motion.div>
      ))}
    </div>
  );
}
