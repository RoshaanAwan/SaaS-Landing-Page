"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center bg-background"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-16"
      >
        {/* Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="liquid-glass px-3 py-2 rounded-lg mb-6 flex items-center gap-2 border border-white/5 bg-white/[0.02]"
        >
          <span className="bg-foreground text-background rounded-md text-[10px] md:text-[12px] font-bold px-2 py-0.5 uppercase tracking-widest">
            New
          </span>
          <span className="text-sm font-medium text-muted-foreground/80">
            Say Hello to Corewave v3.2
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl tracking-[-3px] font-medium leading-[1.05] md:leading-[1.05] mb-8 max-w-4xl"
        >
          Your Insights. <br />
          One Clear <span className="font-serif italic font-normal">Overview.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-normal leading-relaxed opacity-70 mb-10 max-w-2xl text-muted-foreground"
        >
          Neuralyn helps teams track metrics, goals, <br className="hidden md:block" />
          and progress with absolute precision.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-foreground text-background rounded-full px-10 py-4 text-base font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:shadow-white/20"
        >
          Get Started for Free
        </motion.button>
      </motion.div>

      {/* Hero Visual Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ y: visualY }}
        className="relative z-20 w-full flex justify-center mt-0 overflow-visible"
      >
      </motion.div>
    </section>
  );
}
