"use client";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import About from "@/components/About"; 
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const PROJECTS = [
  { id: 1, title: "F1 Performance Dashboard", category: "Web Development", year: "2024" },
  { id: 2, title: "Speedline E-Commerce", category: "UI/UX Design", year: "2023" },
  { id: 3, title: "Aerodynamic Simulation", category: "Frontend Engine", year: "2024" },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        {/* Padding-right (pr-4) ditambahkan agar huruf W tidak terpotong */}
        <div className="relative pr-4 md:pr-8"> 
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            // Ukuran diubah ke 13vw agar pas dengan 7 huruf "MATTHEW"
            className="text-[13vw] font-black uppercase italic leading-none tracking-tighter"
          >
            MATTHEW
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 tracking-widest text-gray-500 font-mono"
        >
          SCROLL TO EXPLORE
        </motion.p>
      </section>

      {/* 2. Marquee Section */}
      <section className="py-10 border-y border-gray-900">
        <Marquee />
      </section>

      {/* 3. About Section (TAMBAHKAN DI SINI) */}
            <About />

      {/* 4. Project Section */}
      <section className="min-h-screen px-4 py-24 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16 border-b border-gray-800 pb-8"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none">
            Selected <br /> Projects
          </h2>
          <span className="text-gray-500 font-mono text-xl">({PROJECTS.length})</span>
        </motion.div>

        {/* List Proyek */}
        <div className="flex flex-col border-t border-gray-800">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="group relative border-b border-gray-800 p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300"
            >
              <div className="z-10">
                <span className="text-xs font-mono text-gray-500 uppercase mb-2 block group-hover:text-gray-700">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-6xl font-bold uppercase italic transition-all">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-8 mt-6 md:mt-0 z-10">
                <span className="font-mono text-lg md:text-2xl">{project.year}</span>
                <div className="h-12 w-12 md:h-16 md:w-16 border border-current flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <span className="text-2xl md:text-4xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Footer / Contact Preview */}
      <section className="py-40 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 mb-4 font-mono"
        >
          WANT TO WORK TOGETHER?
        </motion.p>
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black uppercase italic hover:text-gray-400 cursor-pointer transition-all text-center leading-none"
        >
          GET IN TOUCH
        </motion.h2>
      </section>
    </main>
  );
}