"use client";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Activity } from "lucide-react";

type ResultItem = {
  label: string;
  value: string;
  status?: "success" | "warning" | "info";
};

const results: ResultItem[] = [
  {
    label: "Detected Mutation",
    value: "BRCA1 Variant c.68_69delAG",
    status: "warning",
  },
  {
    label: "Risk Level",
    value: "High",
    status: "warning",
  },
  {
    label: "Recommended Treatment",
    value: "PARP Inhibitors",
    status: "success",
  },
  {
    label: "Confidence Score",
    value: "94.2%",
    status: "info",
  },
];

const getStatusIcon = (status?: string) => {
  switch (status) {
    case "success":
      return <CheckCircle className="text-green-500 w-5 h-5" />;
    case "warning":
      return <AlertTriangle className="text-yellow-500 w-5 h-5" />;
    case "info":
      return <Activity className="text-black w-5 h-5" />;
    default:
      return null;
  }
};

export default function AnalysisResult() {
  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* 🧬 Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"
        >
          Analysis Result
        </motion.h2>

        {/* 🏥 Institution Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-sm md:text-base text-gray-600 mb-10"
        >
          Used by:{" "}
          <span className="text-black font-medium">
            National Cancer Research Institute
          </span>
        </motion.p>

        {/* 💾 Result Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-black/10 rounded-xl p-8"
        >
          <div className="space-y-6">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start md:items-center flex-col md:flex-row border-b border-black/10 pb-4"
              >
                <div className="flex items-center gap-3 text-yellow-600">
                  {getStatusIcon(item.status)}
                  <span className="font-semibold text-black">{item.label}</span>
                </div>
                <div className="text-gray-700 text-right">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 🔗 Guide Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-sm md:text-base text-gray-600 mt-8"
        >
          For usage examples and detailed instructions, please refer to our{" "}
          <a
            href="/guide"
            className="text-yellow-500 hover:text-yellow-600 underline transition-colors"
          >
            guide page
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
