"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-28">
        <div className="relative rounded-[2.5rem] bg-foreground text-background p-12 md:p-24 overflow-hidden text-center">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Start building with <span className="font-serif italic">Neuralyn</span> today.
            </h2>
            <p className="text-lg md:text-xl opacity-80 mb-12">
              Join 5,000+ teams who use Neuralyn to turn data into progress.
              No credit card required to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-10 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                Get Started for Free <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="text-background border border-background/20 px-10 py-4 rounded-full font-semibold"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
