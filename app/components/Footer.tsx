"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Viola AI
          </h3>
          <p className="text-white/60 text-sm">
            Empowering healthcare with AI-driven diagnostics and intelligent
            analysis.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-purple-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-purple-400">
                Our Features
              </Link>
            </li>
            <li>
              <Link href="/guide" className="hover:text-purple-400">
                Guide
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-400">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-4 text-purple-300">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Send className="w-4 h-4 text-blue-400" />
              <a
                href="https://t.me/violaai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram: @violaai
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <a href="mailto:support@viola.ai">support@viola.ai</a>
            </li>
            <li className="flex items-center gap-2">
              {/* Custom X icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path d="M719.19 546.61L1159.4 0H1055.7L676.2 475.82L362.15 0H0L469.93 713.52L0 1227H103.72L507.3 721.1L837.85 1227H1200L719.19 546.61ZM554.5 655.5L516.56 598.1L142.95 90.3H312.2L614.4 547.6L652.3 605L1053.15 1136.7H883.9L554.5 655.5Z" />
              </svg>
              <a
                href="https://x.com/violaai"
                target="_blank"
                rel="noopener noreferrer"
              >
                @violaai
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Viola AI. All rights reserved.
      </div>
    </footer>
  );
}
