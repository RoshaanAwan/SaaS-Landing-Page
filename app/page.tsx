"use client";

import { Navbar } from "../components/ui/Navbar";
import { Hero } from "../components/sections/Hero";
import { LogoBar } from "../components/sections/LogoBar";
import { Storytelling } from "../components/sections/Storytelling";
import { Pricing } from "../components/sections/Pricing";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative bg-background text-foreground selection:bg-white/20">
      <Navbar />
      <Hero />
      <LogoBar />
      <div className="h-40 bg-gradient-to-b from-background to-[#050505]" />
      <Storytelling />
      <Pricing />
      <FAQ />
      <CTA />
      
      {/* Footer Placeholder for completeness */}
      <footer className="py-12 px-8 md:px-28 border-t border-white/10 flex justify-between items-center text-sm text-muted-foreground bg-background">
        <p>© 2026 Neuralyn. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

