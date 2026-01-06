"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Container untuk Teks Utama */}
      <div className="relative">
        <motion.h1 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-[12vw] font-black uppercase italic leading-none tracking-tighter"
        >
          Lando Style
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-gray-400 tracking-[0.5em] uppercase text-sm"
      >
        Digital Portfolio — 2024
      </motion.p>
    </main>
  );
}