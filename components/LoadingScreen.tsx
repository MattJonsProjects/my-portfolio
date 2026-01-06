"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Code, Server, Database, Cloud, GitBranch, Terminal, Layers, Monitor } from "lucide-react";

// Ikon yang akan menjadi "Loading Bar" kita
const LOADING_ICONS = [
  { icon: Code, label: "Frontend" },
  { icon: Terminal, label: "Logic" },
  { icon: Database, label: "Storage" },
  { icon: Server, label: "Backend" },
  { icon: Cloud, label: "Deploy" },
  { icon: GitBranch, label: "Version" },
];

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio tetap disiapkan
    audioRef.current = new Audio("/audio/bg-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Karena tidak ada tombol, kita otomatis panggil onLoaded setelah delay kecil
          setTimeout(() => {
            if (audioRef.current) audioRef.current.play().catch(() => {});
            onLoaded();
          }, 800);
          return 100;
        }
        return prev + 1; // Kecepatan loading dibuat lebih tenang
      });
    }, 4000 / 100); // Total loading sekitar 4 detik

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#0a0f1d] overflow-hidden"
    >
      {/* Container Ikon Tengah */}
      <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
        {LOADING_ICONS.map((item, index) => {
          // Logika apakah ikon ini sudah "terisi" oleh progress
          const isActive = progress >= (index + 1) * (100 / LOADING_ICONS.length);
          
          return (
            <div key={index} className="flex flex-col items-center gap-4">
              <motion.div
                animate={{
                  color: isActive ? "#e6c17a" : "#1e293b",
                  scale: isActive ? [1, 1.2, 1] : 1,
                  filter: isActive ? "drop-shadow(0 0 10px #e6c17a)" : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <item.icon size={32} strokeWidth={isActive ? 2 : 1.5} />
              </motion.div>
              
              {/* Titik indikator di bawah ikon */}
              <motion.div 
                className="w-1.5 h-1.5 rounded-full"
                animate={{
                  backgroundColor: isActive ? "#e6c17a" : "#1e293b",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Progress Text yang Sangat Minimalis */}
      <div className="flex flex-col items-center">
        <motion.p 
          className="font-mono text-[10px] tracking-[0.8em] text-[#6b8eff] uppercase opacity-60"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Initializing Systems... {progress}%
        </motion.p>
      </div>

      {/* Ornamen Garis Halus ala UI Game */}
      <div className="absolute bottom-10 w-full max-w-xs h-px bg-linear-to-r from-transparent via-[#e6c17a]/20 to-transparent" />
    </motion.div>
  );
}