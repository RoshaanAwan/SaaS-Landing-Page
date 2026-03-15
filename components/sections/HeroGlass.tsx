"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HeroGlass() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 60,
        y: (clientY / innerHeight - 0.5) * 60,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 40, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 40, damping: 20 });

  return (
    <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center pointer-events-none select-none overflow-visible">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/10 blur-[100px] rounded-full" />

      {/* Main Glass Prism Container */}
      <motion.div
        style={{ 
          rotateX: useTransform(springY, [-30, 30], [20, -20]),
          rotateY: useTransform(springX, [-30, 30], [-20, 20]),
          perspective: 1000
        }}
        className="relative z-20"
      >
        {/* The "Glass" Layer 1 (Base Refraction) */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-64 h-64 md:w-80 md:h-80 bg-white/[0.03] backdrop-blur-[60px] border border-white/20 rounded-[3rem] rotate-12 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden"
        >
          {/* Animated Internal Refraction Gradients */}
          <motion.div
            animate={{
              x: ["-50%", "50%", "-50%"],
              y: ["-50%", "50%", "-50%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-500/20 blur-3xl opacity-50"
          />
        </motion.div>

        {/* The "Glass" Layer 2 (Floating Highlight) */}
        <motion.div
          style={{ 
            x: useTransform(springX, [-30, 30], [15, -15]),
            y: useTransform(springY, [-30, 30], [15, -15]),
          }}
          className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-white/[0.05] backdrop-blur-[40px] border border-white/30 rounded-2xl -rotate-6 shadow-2xl z-30"
        />

        {/* The "Glass" Layer 3 (Bottom Left Sparkle) */}
        <motion.div
          style={{ 
            x: useTransform(springX, [-30, 30], [-10, 10]),
            y: useTransform(springY, [-30, 30], [-10, 10]),
          }}
          className="absolute -bottom-6 -left-12 w-24 h-24 md:w-32 md:h-32 bg-white/[0.02] backdrop-blur-[80px] border border-white/10 rounded-full z-10"
        />

        {/* Neural Network Sparkle Points (Abstract) */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1.5 h-1.5 bg-white rounded-full z-40 blur-[1px]"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 12}%`,
              boxShadow: "0 0 10px white",
            }}
          />
        ))}
      </motion.div>

      {/* Floating Meta Labels (Minimalist) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[5%] z-50 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hidden md:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Refractive Intelligence</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-[5%] z-50 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hidden md:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">System v4.0.1</span>
      </motion.div>

    </div>
  );
}
