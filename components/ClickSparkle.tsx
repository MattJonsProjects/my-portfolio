"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

// Tipe untuk sparkle
interface Sparkle {
  id: string;
  x: number;
  y: number;
  color: string;
}

export default function ClickSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Fungsi untuk menghasilkan sparkle
  const createSparkle = useCallback((e: MouseEvent) => {
    const newSparkle = {
      id: Math.random().toString(36).substring(7), // ID unik
      x: e.clientX,
      y: e.clientY,
      // Warna sparkle bisa emas atau biru
      color: Math.random() > 0.5 ? '#e6c17a' : '#6b8eff', 
    };
    setSparkles((prev) => [...prev, newSparkle]);

    // Hapus sparkle setelah animasinya selesai
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 1000); // Durasi animasi
  }, []);

  useEffect(() => {
    // Tambahkan event listener untuk klik di seluruh dokumen
    window.addEventListener("click", createSparkle);
    return () => {
      window.removeEventListener("click", createSparkle);
    };
  }, [createSparkle]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none z-999999 rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            backgroundColor: sparkle.color,
            width: 5, // Ukuran awal sparkle
            height: 5,
          }}
          initial={{
            opacity: 1,
            scale: 0,
            x: -2.5, // Center the sparkle
            y: -2.5,
          }}
          animate={{
            opacity: 0,
            scale: [1, 1.5], // Membesar sedikit
            x: sparkle.x + Math.random() * 40 - 20, // Bergerak acak
            y: sparkle.y + Math.random() * 40 - 20,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </>
  );
}