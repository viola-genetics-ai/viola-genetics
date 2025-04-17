"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";


export default function FooterComponent() {
  return (
    <footer className="bg-black/90 text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Viola Research
          </h3>
          <p className="text-gray-500 text-sm max-w-sm">
            Empowering healthcare with AI-driven diagnostics and intelligent
            analysis.
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-start"
        >
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex justify-start md:justify-start items-center gap-2">
              <Send className="w-4 h-4 text-blue-400" />
              <a
                href="https://t.me/violaresearch"
                target="_blank"
                rel="noopener noreferrer"
              >
                @violaresearch
              </a>
            </li>
            <li className="flex justify-start md:justify-end items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              <a href="mailto:support@viola.ai">support@violaresearch.ai</a>
            </li>
            <li className="flex justify-start md:justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <path d="M719.19 546.61L1159.4 0H1055.7L676.2 475.82L362.15 0H0L469.93 713.52L0 1227H103.72L507.3 721.1L837.85 1227H1200L719.19 546.61ZM554.5 655.5L516.56 598.1L142.95 90.3H312.2L614.4 547.6L652.3 605L1053.15 1136.7H883.9L554.5 655.5Z" />
              </svg>
              <a
                href="https://x.com/ViolaResearch"
                target="https://x.com/ViolaResearch"
                rel="noopener noreferrer"
              >
                @violaresearch
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Viola Research. All rights reserved.
      </div>
    </footer>
  );
}
