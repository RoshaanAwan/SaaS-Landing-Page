"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Globe 
} from "lucide-react";

const features = [
  {
    title: "Real-time Analytics",
    description: "Monitor your key metrics as they happen with our lightning-fast data pipeline.",
    icon: Zap,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Insightful Goals",
    description: "Set and track complex KPIs with automated progress reporting and alerts.",
    icon: BarChart3,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Enterprise Security",
    description: "Industry-leading encryption and compliance standards to keep your data safe.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for sharing insights and coordinating across departments.",
    icon: Users,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "AI Optimization",
    description: "Machine learning algorithms that help you find patterns in your data automatically.",
    icon: Cpu,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Global Scale",
    description: "Infrastructure designed to grow with you, from startup to world-class enterprise.",
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-28">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
          >
            Everything you need to <span className="font-serif italic">scale</span> your business.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Neuralyn provides a suite of tools designed to help you understand your data, 
            empower your team, and make better decisions faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
