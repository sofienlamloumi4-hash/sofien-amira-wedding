"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

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
        ذكرياتنا
      </motion.h2>

      <div
        className="
max-w-6xl
mx-auto
grid
grid-cols-2
md:grid-cols-3
gap-5
"
      >
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => setSelected(image)}
            className="
relative
h-56
md:h-72
rounded-3xl
overflow-hidden
cursor-pointer
shadow-xl
"
          >
            <Image
              src={image}
              alt="Wedding photo"
              fill
              className="
object-cover
"
            />
          </motion.div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="
fixed
inset-0
z-50
bg-black/80
flex
items-center
justify-center
p-5
"
        >
          <div
            className="
relative
w-full
max-w-4xl
h-[80vh]
"
          >
            <Image
              src={selected}
              alt="Preview"
              fill
              className="
object-contain
rounded-3xl
"
            />
          </div>
        </div>
      )}
    </section>
  );
}
