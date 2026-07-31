"use client";

import { motion } from "framer-motion";

export default function WeddingSeal() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 25,

        repeat: Infinity,

        ease: "linear",
      }}
      className="
mx-auto
w-36
h-36
rounded-full
border-4
border-[#c9a227]
flex
items-center
justify-center
text-6xl
bg-white
shadow-xl
"
    >
      💍
    </motion.div>
  );
}
