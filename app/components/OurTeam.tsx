"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Li Huxiang",
    role: "CEO & Founder",
    image: "/images/team/user1.jpg",
    bio: "Visionary leader with a passion for AI innovation and business growth. Building bridges between technology and impact.",
  },
  {
    name: "Harry Tovard",
    role: "Lead Developer",
    image: "/images/team/user2.avif",
    bio: "Expert in full-stack development and AI infrastructure, leading the codebase with scalable architecture.",
  },
];

export default function OurTeam() {
  const [selected, setSelected] = useState<null | (typeof teamMembers)[0]>(
    null
  );

  return (
    <section className="bg-white py-24 px-4 md:px-10 text-white relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
          Our Core Team
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Meet the visionaries behind{" "}
          <span className="text-yellow-600 font-semibold">Viola Research</span> — the
          pioneers shaping the future of precision medicine through AI and data
          science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="group cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-1 shadow-xl"
              onClick={() => setSelected(member)}
            >
              <div className="bg-white rounded-[inherit] p-6 text-black transition-all duration-300 group-hover:bg-black group-hover:text-white h-full flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-yellow-300 group-hover:border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-yellow-600 group-hover:text-yellow-300 font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-sm mt-3 text-center opacity-0 group-hover:opacity-100 transition duration-300 max-w-xs">
                  {member.bio.slice(0, 100)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-8 rounded-3xl shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-yellow-400 mb-4">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <p className="text-yellow-600 font-medium">{selected.role}</p>
                <p className="text-gray-700 mt-4 text-sm">{selected.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
