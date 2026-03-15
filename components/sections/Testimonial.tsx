"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["hsl(0 0% 35%)", "hsl(0 0% 100%)"]);

  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em]">
      {children}
    </motion.span>
  );
}

export function Testimonial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const testimonialText = "Neuralyn revolutionized how we handle financial insights using smart analytics. We are now driving better outcomes quicker than we ever imagined! Neuralyn revolutionized how we handle financial insights using smart analytics.";
  const words = testimonialText.split(" ");
  const total = words.length;

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center py-24 md:py-32 px-8 md:px-28 bg-background"
    >
      <div className="max-w-3xl w-full flex flex-col items-start gap-10">
        {/* Quote Icon */}
        <div className="w-14 h-10 relative">
          <Image
            src="/quote-symbol.png"
            alt="Quote"
            fill
            className="object-contain"
          />
        </div>

        {/* Testimonial Text */}
        <div className="flex flex-wrap text-4xl md:text-5xl font-medium leading-[1.2]">
          {words.map((word, i) => {
            const start = i / total;
            const end = (i + 1) / total;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
          <span className="text-muted-foreground ml-2">”</span>
        </div>

        {/* Author Row */}
        <div className="flex items-center gap-4 mt-4">
          <div className="w-14 h-14 relative rounded-full border-[3px] border-foreground overflow-hidden">
            <Image
              src="/testimonial-avatar.png"
              alt="Brooklyn Simmons"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold leading-7 text-foreground">
              Brooklyn Simmons
            </span>
            <span className="text-sm font-normal leading-5 text-muted-foreground">
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
