"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, BarChart3, Users, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { title: "Analytics", icon: BarChart3, desc: "Real-time data insights" },
    { title: "Team Collab", icon: Users, desc: "Work together seamlessly" },
    { title: "Performance", icon: Zap, desc: "Lightning fast execution" },
    { title: "Security", icon: ShieldCheck, desc: "Enterprise grade safety" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-12 md:gap-20">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <span className="text-xl font-bold tracking-tight">Neuralyn</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-white transition-colors">
            Home
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors py-2">
              <span className="text-sm font-medium">Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-[400px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl mt-1"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className="p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <service.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium group-hover:text-white transition-colors">{service.title}</span>
                        </div>
                        <p className="text-[12px] text-muted-foreground leading-snug">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="#reviews" className="text-sm font-medium hover:text-white transition-colors">
            Reviews
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-white transition-colors">
            Contact us
          </Link>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-foreground text-background px-6 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-white/5"
      >
        Sign In
      </motion.button>
    </nav>
  );
}
