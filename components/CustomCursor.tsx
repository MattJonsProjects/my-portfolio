"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Spring config yang lebih "empuk" dan elegan
  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest("button, a, .group, .cursor-pointer"));
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Lingkaran Luar (Ring) */}
      <motion.div
        className="fixed top-0 left-0 border border-[#e6c17a] rounded-full pointer-events-none z-9999 hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />

      {/* 2. Titik Dalam (Core) */}
      <motion.div
        className="fixed top-0 left-0 bg-[#e6c17a] rounded-full pointer-events-none z-9999 hidden md:block shadow-[0_0_15px_#e6c17a]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 12 : 8,
          height: isHovered ? 12 : 8,
        }}
      />
    </>
  );
}