"use client";
import { motion, Variants } from "framer-motion";

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 30, // Sedikit diperlambat agar terasa lebih "ambient" dan tenang
        ease: "linear",
      },
    },
  },
};

export default function Marquee() {
  return (
    // bg-white diganti menjadi emas transparan (bg-[#e6c17a]/10) atau biru kaca
    <div className="relative flex overflow-hidden bg-genshin-gold/5 backdrop-blur-sm py-4 sm:py-6 border-y border-genshin-gold/20">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            // text-black diganti menjadi emas Primogem (#e6c17a)
            className="mx-8 text-4xl sm:text-5xl font-black uppercase italic text-genshin-gold drop-shadow-[0_0_10px_rgba(230,193,122,0.3)]"
          >
            Fullstack Developer — UI/UX Designer — Next.js Specialist —
          </span>
        ))}
      </motion.div>
    </div>
  );
}