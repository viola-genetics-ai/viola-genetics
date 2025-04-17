"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulasi submit
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-[#FAECD8] overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Get Early Access to <span className="text-yellow-500">Viola Research</span>
        </motion .h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Be the first to experience precision-driven health technology. Enter
          your email to join the waitlist.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition-all duration-300 shadow-lg"
          >
            {submitted ? "✓ Submitted" : "Request Access"}
          </button>
        </motion.form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 font-medium"
          >
            Thank you! You’ve been added to the waitlist.
          </motion.p>
        )}
      </div>
    </section>
  );
}
