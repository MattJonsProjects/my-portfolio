"use client";
import { motion, Variants } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Sparkles, Zap, Layout, Terminal } from "lucide-react";

export default function About() {
  // Menambahkan tipe data Variants untuk memperbaiki error TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // Menggunakan bezier curve agar lebih smooth dan menghindari error type string
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <PageTransition>
      <main className="relative min-h-screen bg-[#0a0f1d] text-[#f0f0f0] overflow-hidden selection:bg-[#e6c17a] selection:text-[#0a0f1d]">
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6b8eff]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#e6c17a]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
          >
            {/* HERO SECTION */}
            <section className="relative">
              <motion.div variants={itemVariants} className="flex items-center gap-3 text-[#6b8eff] mb-8">
                <div className="h-px w-12 bg-[#6b8eff]/30" />
                <span className="font-mono text-xs uppercase tracking-[0.5em]">The Philosophy</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-7xl font-light leading-tight tracking-tight"
              >
                I'm a developer focused on <span className="text-[#e6c17a] italic font-serif">speed</span>, 
                {" "}<span className="hover:text-[#6b8eff] transition-colors duration-500">minimalist aesthetics</span>, 
                and <span className="font-black uppercase tracking-tighter">modern functionality</span>.
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="mt-12 text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed"
              >
                Crafting digital experiences that not only work, but leave a lasting impression.
              </motion.p>
            </section>

            {/* PILLARS GRID */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
              {[
                { 
                  icon: <Zap size={24} />, 
                  title: "Performance", 
                  desc: "Zero bloat. Optimized delivery. Speed is not a feature, it's a foundation." 
                },
                { 
                  icon: <Layout size={24} />, 
                  title: "Aesthetics", 
                  desc: "Negative space is as important as the content itself. Simple, but significant." 
                },
                { 
                  icon: <Terminal size={24} />, 
                  title: "Function", 
                  desc: "Solving complex problems with elegant, maintainable code solutions." 
                }
              ].map((pillar, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group cursor-default"
                >
                  <div className="text-[#e6c17a] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-[#f0f0f0] font-bold uppercase tracking-widest text-sm mb-4">{pillar.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm">{pillar.desc}</p>
                </motion.div>
              ))}
            </section>

            {/* WATERMARK */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 2 }}
              className="absolute -bottom-20 -right-20 pointer-events-none select-none z-[-1]"
            >
              <h2 className="text-[25vw] font-black italic leading-none uppercase">Matthew</h2>
            </motion.div>
          </motion.div>

        </div>
      </main>
    </PageTransition>
  );
}