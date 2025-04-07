"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the main goal of this analysis tool?",
    answer:
      "The tool is designed to detect genetic mutations and assess cancer risk levels based on advanced AI-driven analysis.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Our analysis has been validated with a confidence score of over 94%, using trusted data sets and industry-standard practices.",
  },
  {
    question: "Who can use this tool?",
    answer:
      "This tool is intended for researchers, clinicians, and institutions working on cancer-related studies and diagnostics.",
  },
  {
    question: "Where can I find detailed usage instructions?",
    answer:
      "You can head over to the Guide page for a step-by-step usage tutorial and integration tips.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-white hover:text-purple-300 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-white/70 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
