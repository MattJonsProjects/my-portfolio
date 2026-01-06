"use client";
import { motion, Variants } from "framer-motion";

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const, // Tambahkan "as const" di sini
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden bg-white py-4 sm:py-6">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4 text-4xl sm:text-6xl font-black uppercase italic text-black">
            Fullstack Developer — UI/UX Designer — Next.js Specialist —
          </span>
        ))}
      </motion.div>
    </div>
  );
}