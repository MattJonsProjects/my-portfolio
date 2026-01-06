"use client";
import { useParams, useRouter } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  
  const currentIndex = PROJECTS.findIndex((p) => p.id === params.id);
  const project = PROJECTS[currentIndex];
  
  // Ambil project berikutnya, jika di akhir list kembali ke awal
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Scroll ke atas saat ID berubah (ketika klik Next Project)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0a0f1d] text-[#e6c17a] gap-4">
        <h1 className="text-2xl font-mono italic">Project Not Found</h1>
        <button onClick={() => router.push("/")} className="text-[#6b8eff] underline">Back to Home</button>
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="relative min-h-screen bg-[#0a0f1d] text-[#f0f0f0] overflow-x-hidden">
        
        {/* --- BACKGROUND ORNAMENT --- */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6b8eff]/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e6c17a]/5 blur-[80px] rounded-full -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 p-6 md:p-20 max-w-7xl mx-auto">
          
          {/* NAVIGATION BAR */}
          <nav className="flex justify-between items-center mb-16">
            <motion.button 
              onClick={() => router.push("/#work")} // Kembali ke section work di home
              className="group flex items-center gap-3 text-[#6b8eff] hover:text-[#e6c17a] transition-all"
              whileHover={{ x: -5 }}
            >
              <div className="p-2 border border-[#6b8eff]/30 rounded-full group-hover:border-[#e6c17a]">
                <ArrowLeft size={18} />
              </div>
              <span className="font-mono text-sm tracking-widest uppercase">Back to Work</span>
            </motion.button>
          </nav>

          {/* HERO HEADER */}
          <header className="mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#6b8eff] mb-4"
            >
              <Sparkles size={16} />
              <span className="font-mono text-sm uppercase tracking-[0.4em]">{project.category}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: '#e6c17a' }}
              className="text-5xl md:text-[7vw] font-black uppercase italic leading-[0.9] drop-shadow-[0_0_20px_rgba(230,193,122,0.2)]"
            >
              {project.title}
            </motion.h1>
          </header>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-8 space-y-16">
              
              {/* IMAGE SECTION */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video w-full bg-[#e6c17a]/5 border border-[#e6c17a]/20 rounded-2xl overflow-hidden group"
              >
                <Image 
                  src={project.image || "/people-developer.png"} // Menggunakan data image dari project
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* CONTENT DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                  <h2 className="text-[#e6c17a] font-mono text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                    <span className="w-4 h-px bg-[#e6c17a]"></span> Brief
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed font-light italic">
                    {project.description}
                  </p>
                </section>

                <section className="space-y-12">
                  <div>
                    <h2 className="text-[#6b8eff] font-mono text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                      <span className="w-4 h-px bg-[#6b8eff]"></span> Challenge
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed border-l-2 border-[#6b8eff]/20 pl-6">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#e6c17a] font-mono text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                      <span className="w-4 h-px bg-[#e6c17a]"></span> Solution
                    </h2>
                    <p className="text-lg text-[#e6c17a]/80 leading-relaxed bg-[#e6c17a]/5 p-6 rounded-xl border border-[#e6c17a]/10">
                      {project.solution}
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-20 bg-[#e6c17a]/5 backdrop-blur-xl border border-[#e6c17a]/20 p-8 rounded-3xl space-y-8">
                <div>
                  <h3 className="text-[#6b8eff] font-mono text-xs uppercase mb-2">Timeline</h3>
                  <p className="text-3xl font-black italic text-[#e6c17a]">{project.year}</p>
                </div>
                
                <div>
                  <h3 className="text-[#6b8eff] font-mono text-xs uppercase mb-4">Tech Arsenal</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-[#0a0f1d] border border-[#e6c17a]/20 text-[#e6c17a] text-[10px] font-mono uppercase rounded-md italic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#e6c17a]/10">
                   <a 
                    href={project.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 border-2 border-[#e6c17a] text-[#e6c17a] font-black italic uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:bg-[#e6c17a] hover:text-[#0a0f1d] transition-all"
                   >
                     Live Preview <ExternalLink size={18} />
                   </a>
                </div>
              </div>
            </aside>
          </div>

          {/* NEXT PROJECT FEATURE */}
          <footer className="border-t border-[#e6c17a]/10 pt-20">
            <Link href={`/project/${nextProject.id}`} className="group block text-right">
              <p className="text-[#6b8eff] font-mono text-sm mb-4 tracking-widest">NEXT PROJECT</p>
              <div className="overflow-hidden">
                <h4 className="text-4xl md:text-7xl font-black uppercase italic text-white/20 group-hover:text-[#e6c17a] transition-all duration-500 flex items-center justify-end gap-6 leading-none">
                  {nextProject.title} 
                  <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform duration-500" />
                </h4>
              </div>
            </Link>
          </footer>

        </div>
      </main>
    </PageTransition>
  );
}