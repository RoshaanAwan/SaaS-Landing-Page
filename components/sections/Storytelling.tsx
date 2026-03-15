"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  BarChart3, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Users
} from "lucide-react";

interface StoryStepProps {
  title: string;
  description: string;
  index: number;
}

const StoryStep = ({ title, description, index }: StoryStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1, x: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0.1,
        x: isInView ? 0 : 20,
        scale: isInView ? 1 : 0.95
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:h-screen flex flex-col justify-center py-20"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-blue-500 font-mono text-sm font-bold tracking-[0.2em]">STEP 0{index + 1}</span>
        <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
      </div>
      <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md font-light">
        {description}
      </p>
    </motion.div>
  );
};

export function Storytelling() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for the visual elements based on overall progress
  // Refined transform values for better synchronization with h-screen steps
  const chartHeight1 = useTransform(scrollYProgress, [0, 0.25], ["20%", "90%"]);
  const chartHeight2 = useTransform(scrollYProgress, [0.05, 0.3], ["30%", "75%"]);
  const chartHeight3 = useTransform(scrollYProgress, [0.1, 0.35], ["10%", "95%"]);
  
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]);
  const aiGlowOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  
  const globeOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const globeScale = useTransform(scrollYProgress, [0.65, 1], [0.8, 1.1]);

  const steps = [
    {
      title: "Real-time Intelligence",
      description: "Neuralyn tracks every metric across your stack in real-time, providing a unified dashboard for your entire team."
    },
    {
      title: "AI-Powered Predictions",
      description: "Machine learning models analyze your history to predict growth patterns and flag potential bottlenecks before they happen."
    },
    {
      title: "Global Collaboration",
      description: "Scale effortlessly with edge processing and real-time sync, keeping your distributed team aligned no matter where they are."
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#050505] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Sticky Visuals */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center py-20 lg:py-0">
          <div className="relative w-full aspect-square max-w-[500px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 overflow-hidden backdrop-blur-3xl shadow-2xl group">
            
            {/* Phase 1: Dynamic Charts */}
            <motion.div 
              style={{ opacity: phase1Opacity }}
              className="absolute inset-0 p-8 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/50">System Performance</span>
              </div>
              <div className="flex items-end gap-3 h-48">
                <motion.div style={{ height: chartHeight1 }} className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-400/60 rounded-xl" />
                <motion.div style={{ height: chartHeight2 }} className="flex-1 bg-gradient-to-t from-indigo-600/20 to-indigo-400/60 rounded-xl" />
                <motion.div style={{ height: chartHeight3 }} className="flex-1 bg-gradient-to-t from-purple-600/20 to-purple-400/60 rounded-xl" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Uptime</p>
                  <p className="text-xl font-bold">99.99%</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Response</p>
                  <p className="text-xl font-bold">14ms</p>
                </div>
              </div>
            </motion.div>

            {/* Phase 2: AI Core Pulse */}
            <motion.div 
              style={{ opacity: aiGlowOpacity }}
              className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-150"
                />
                <div className="w-24 h-24 rounded-3xl bg-blue-500 border border-blue-400 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] z-10 relative">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Phase 3: Global Grid */}
            <motion.div 
              style={{ opacity: globeOpacity, scale: globeScale }}
              className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="w-full h-full relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                 <Globe className="w-40 h-40 text-blue-400/40 relative z-10" />
                 <div className="absolute inset-0 flex items-center justify-center gap-4 z-20">
                    <Users className="w-8 h-8 text-white/80 animate-pulse" />
                 </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Side: Scrollable Story */}
        <div className="lg:w-1/2">
          {steps.map((step, i) => (
            <StoryStep 
              key={i} 
              index={i}
              title={step.title} 
              description={step.description} 
            />
          ))}
        </div>

      </div>
      
      {/* Background radial fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
