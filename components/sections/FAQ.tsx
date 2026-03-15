"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Neuralyn integrate with my current workflow?",
    answer: "Neuralyn offers direct integrations with Slack, Jira, GitHub, and major CRM platforms. You can sync your data in minutes with our one-click connectors.",
  },
  {
    question: "Is there a free trial available for the Pro plan?",
    answer: "Yes! We offer a 14-day free trial of our Pro features so you can experience the full power of Neuralyn before committing.",
  },
  {
    question: "How secure is my data on Neuralyn?",
    answer: "We use 256-bit AES encryption at rest and TLS 1.2+ for data in transit. We are SOC 2 Type II compliant and conduct regular security audits.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. You can cancel your subscription from your dashboard at any time. You'll retain access to your plan features until the end of your current billing period.",
  },
  {
    question: "Do you offer discounts for non-profits or students?",
    answer: "Yes, we have special pricing programs for education and non-profit organizations. Contact our support team to learn more.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-8 md:px-28 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
          >
            Frequently Asked <span className="font-serif italic font-normal">Questions.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border transition-all ${openIndex === index ? 'border-white/20 bg-white/[0.04]' : 'border-white/5 bg-white/[0.02]'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <div className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
