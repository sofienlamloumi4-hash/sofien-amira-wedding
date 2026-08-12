"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
const flowers = [  "🤍"];
export default function FlowerEffect() {
  const flowersData = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 5 + Math.random() * 6,
        duration: 8 + Math.random() * 7,
        delay: Math.random() * 8,
        moveX: -80 + Math.random() * 160,
        rotate: 180 + Math.random() * 360,
      })),
    [],
  );
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {" "}
      {flowersData.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute select-none"
          style={{
            left: `${flower.left}%`,
            top: "-50px",
            fontSize: `${flower.size}px`,
          }}
          initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, flower.moveX, -flower.moveX / 2, flower.moveX / 3],
            rotate: flower.rotate,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {" "}
          {flowers[flower.id % flowers.length]}{" "}
        </motion.div>
      ))}{" "}
    </div>
  );
}
