"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Dave Heist",
    role: "CEO & Founder",
    image: "/images/team/user1.jpg",
  },
  {
    name: "Harry Tovard",
    role: "Lead Developer",
    image: "/images/team/user2.avif",
  },
  {
    name: "Gordon",
    role: "Product Designer",
    image: "/images/team/user3.png",
  },
  {
    name: "Lin Huxiang",
    role: "Blockchain Engineer",
    image: "/images/team/user4.jpeg",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white py-20 px-4 md:px-10 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          Our Team
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Meet the passionate people behind{" "}
          <span className="text-yellow-500 font-medium">ViolaAI</span> — working
          together to shape the future with innovation and purpose.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-yellow-500 p-6 rounded-2xl shadow-lg group hover:bg-[#222240] transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto relative mb-4 rounded-full overflow-hidden border-2 border-yellow-500 group-hover:scale-105 transition">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
