"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Teks akan berubah dari abu-abu gelap ke putih saat di-scroll
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  return (
    <section ref={containerRef} className="min-h-screen px-4 py-40 flex items-center justify-center">
      <div className="max-w-5xl">
        <motion.p 
          style={{ opacity, y }}
          className="text-3xl md:text-6xl font-medium leading-tight tracking-tight text-center italic uppercase"
        >
          Matthew adalah seorang developer yang berfokus pada <span className="text-white">kecepatan</span>, 
          estetika <span className="text-white">minimalis</span>, dan fungsionalitas <span className="text-white">modern</span>. 
          Membangun pengalaman digital yang tidak hanya bekerja, tapi juga berkesan.
        </motion.p>
      </div>
    </section>
  );
}