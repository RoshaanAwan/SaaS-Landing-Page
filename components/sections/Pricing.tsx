"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals and side projects.",
    features: ["Up to 3 projects", "Basic analytics", "Community support", "Public dashboards"],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    description: "The best choice for growing teams.",
    features: ["Unlimited projects", "Advanced AI insights", "Priority support", "Custom domains", "Team collaboration"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large organizations.",
    features: ["Dedicated account manager", "SSO & SAML", "Custom contracts", "24/7 Phone support", "SLA guarantees"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-8 md:px-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
          >
            Simple, <span className="font-serif italic">transparent</span> pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Choose the plan that's right for you and your team.
          </motion.p>

          {/* Billing Toggle (Visual placeholder for now) */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-white/10 relative p-1 transition-colors hover:bg-white/20"
            >
              <motion.div 
                animate={{ x: isAnnual ? 24 : 0 }}
                className="w-4 h-4 rounded-full bg-white shadow-sm"
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-muted-foreground'}`}>
              Yearly <span className="text-xs text-green-400 ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-white/20 bg-white/[0.04]' : 'border-white/5 bg-white/[0.02]'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.popular ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
