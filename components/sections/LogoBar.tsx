"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "GlobalTech",
  "Nexus AI",
  "CloudPulse",
  "Vertex",
  "Quantix",
];

export function LogoBar() {
  return (
    <section className="py-20 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-12 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white/20 to-white/60 bg-clip-text text-transparent hover:from-white/40 hover:to-white/80 transition-all cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 ml-16 md:ml-24">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white/20 to-white/60 bg-clip-text text-transparent hover:from-white/40 hover:to-white/80 transition-all cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          display: inline-flex;
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
