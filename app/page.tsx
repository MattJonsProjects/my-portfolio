"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import About from "@/components/About"; 
import PageTransition from "@/components/PageTransition";
import { Github, Linkedin, Mail, Instagram, Star } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  // Fungsi untuk download CV
  const handleDownloadCV = () => {
    // Ganti dengan path file CV kamu di folder public
    window.open("/cv-matthew.pdf", "_blank");
  };

  return (
    <PageTransition>
      <main style={{ backgroundColor: '#0a0f1d' }} className="relative min-h-screen text-[#f0f0f0] overflow-hidden">
        
        {/* --- EFFECT: CELESTIAL PARTICLES --- */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + "px",
                height: Math.random() * 3 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* 1. Hero Section */}
        <section className="relative z-10 h-screen flex flex-col items-center justify-center">
          <div className="relative pr-4 md:pr-8"> 
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
              style={{ color: '#e6c17a' }}
              className="text-[13vw] font-black uppercase italic leading-none tracking-tighter drop-shadow-[0_0_35px_rgba(230,193,122,0.4)]"
            >
              MATTHEW
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 tracking-[0.5em] text-[#6b8eff] font-mono text-xs uppercase"
          >
            Explore the Teyvat of Code
          </motion.p>
        </section>

        {/* 2. Marquee Section */}
        <section className="relative z-10 py-10 border-y border-[#e6c17a]/20 bg-[#e6c17a]/5 backdrop-blur-sm">
          <Marquee />
        </section>

        {/* 3. About Section */}
        <section className="relative z-10">
          <About />
        </section>

        {/* 4. Project Section */}
        <section className="relative z-10 min-h-screen px-4 py-24 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-16 border-b border-[#e6c17a]/20 pb-8"
          >
            <h2 style={{ color: '#e6c17a' }} className="text-5xl md:text-7xl font-black uppercase italic leading-none">
              Selected <br /> Projects
            </h2>
            <span className="text-[#6b8eff] font-mono text-xl">({PROJECTS.length})</span>
          </motion.div>

          <div className="flex flex-col border-t border-[#e6c17a]/10">
            {PROJECTS.map((project, index) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ backgroundColor: "rgba(230, 193, 122, 0.05)" }}
                  className="group relative border-b border-[#e6c17a]/10 p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300"
                >
                  <div className="z-10">
                    <span className="text-xs font-mono text-[#6b8eff] uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-6xl font-bold uppercase italic transition-all group-hover:text-[#e6c17a] group-hover:translate-x-4 duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-8 mt-6 md:mt-0 z-10 text-[#e6c17a]">
                    <span className="font-mono text-lg md:text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {project.year}
                    </span>
                    <div className="h-12 w-12 md:h-16 md:w-16 border border-[#e6c17a]/30 flex items-center justify-center rounded-full group-hover:rotate-45 group-hover:border-[#e6c17a] transition-all duration-500">
                      <span className="text-2xl md:text-4xl group-hover:scale-110">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. Footer / Contact Section */}
        <footer className="relative z-10 py-40 flex flex-col items-center justify-center bg-transparent">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex flex-col items-center mb-16"
          >
            {/* WISB BUTTON GACHA STYLE */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 30px rgba(230, 193, 122, 0.4)",
                backgroundColor: "rgba(230, 193, 122, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-4 border-2 border-[#e6c17a] text-[#e6c17a] hover:text-[#0a0f1d] font-black italic rounded-full uppercase tracking-widest transition-all duration-300 mb-12"
            >
              <Star size={20} className="group-hover:fill-current" />
              Make a Wish (CV)
            </motion.button>
            
            <p className="text-[#6b8eff] mb-4 font-mono tracking-widest text-xs uppercase">
              Ready for adventure?
            </p>
            <motion.h2 
              onClick={() => window.location.href = "mailto:email-kamu@gmail.com"}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ color: '#e6c17a' }}
              className="text-5xl md:text-9xl font-black uppercase italic hover:drop-shadow-[0_0_50px_rgba(230,193,122,0.6)] cursor-pointer transition-all text-center leading-none"
            >
              GET IN TOUCH
            </motion.h2>
          </motion.div>

          {/* SOCIAL LINKS - Dihubungkan ke URL Asli */}
          <div className="flex gap-10 text-[#6b8eff]">
             <a href="https://github.com/MattJonsProjects" target="_blank" rel="noopener noreferrer">
                <Github className="hover:text-[#e6c17a] cursor-pointer transition-colors" size={28} />
             </a>
             <a href="https://www.linkedin.com/in/matthew-syauta/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:text-[#e6c17a] cursor-pointer transition-colors" size={28} />
             </a>
             <a href="https://instagram.com/_matthewjs" target="_blank" rel="noopener noreferrer">
                <Instagram className="hover:text-[#e6c17a] cursor-pointer transition-colors" size={28} />
             </a>
             <a href="mailto:matthewjsyauta@gmail.com">
                <Mail className="hover:text-[#e6c17a] cursor-pointer transition-colors" size={28} />
             </a>
          </div>
          
          <p className="mt-20 font-mono text-[10px] text-white/20 uppercase tracking-[0.5em]">
            © 2026 MATTHEW — ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </PageTransition>
  );
}