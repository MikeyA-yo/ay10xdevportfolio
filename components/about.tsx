"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaXTwitter, FaGithub, FaDownload } from "react-icons/fa6";

export function AboutM() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold uppercase tracking-tight">
            About Me
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-6">
            Software Innovator &amp; Systems Engineer passionate about solving{" "}
            <span className="text-[#D3E97A] font-semibold">complex technical challenges</span>{" "}
            across the stack. Experienced in building next-gen solutions — from{" "}
            <span className="text-[#D3E97A] font-semibold">AI-driven B2B automation tools</span>{" "}
            to{" "}
            <span className="text-[#D3E97A] font-semibold">custom programming languages</span>{" "}
            and{" "}
            <span className="text-[#D3E97A] font-semibold">decentralized finance (DeFi) protocols</span>.
          </p>
          <div className="flex items-center gap-2">
            <Link
              className="rounded-full flex gap-2 bg-[#D3E97A] items-center p-2 text-black font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out"
              href={"/AY-Resume-Minimal-Type.pdf"}
              download={true}
            >
              <p>DOWNLOAD RESUME</p>
              <FaDownload />
            </Link>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
              <Link href={"https://x.com/OluwatolaAyomi4"}>
                <FaXTwitter className="h-6 w-6 fill-[#D3E97A]" />
              </Link>
            </div>
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
              <Link href={"https://github.com/MikeyA-yo"}>
                <FaGithub className="h-6 w-6 fill-[#D3E97A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  "JavaScript",
  "TypeScript",
  "Golang",
  "Rust",
  "Solidity",
  "Move",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Tailwind",
  "Supabase",
  "MQTT",
  "WebSockets",
  "AI Agents",
  "Git",
];

export function Skills() {
  return (
    <section className="text-white py-16 px-10 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            My Capabilities
          </h2>
          <p className="text-[#C7C7C7] mt-3 text-sm">
            Technologies I work with across the stack.
          </p>
        </div>
        <div className="md:w-2/3 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#1a1a1a] border border-gray-700 text-[#D3E97A] px-4 py-2 rounded-full text-sm font-semibold cursor-default hover:bg-[#D3E97A] hover:text-black transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    position: "Software Engineer",
    company: "Digivo LTD",
    location: "Remote (Lagos, Nigeria)",
    duration: "Oct 2024 - Present",
    achievements: [
      "Architected a B2B SaaS platform integrating autonomous AI Voice Agents and email automation workflows, facilitating client acquisition.",
      "Engineered scalable backend systems to handle concurrent VoIP sessions and real-time data processing for AI agents.",
      "Transformed high-fidelity Figma designs into responsive UIs using Next.js and React, focusing on seamless UX.",
    ],
  },
  {
    position: "CoreTech Engineer Intern",
    company: "Freepass Africa",
    location: "Remote (Lagos, Nigeria)",
    duration: "Jun 2025 - Jan 2026",
    achievements: [
      "Designed and implemented core M2M infrastructure using MQTT protocols for low-latency data transmission between IoT devices, reducing cloud costs by 20%.",
      "Developed robust API endpoints for mobile applications, optimizing payload sizes by 60% for low-bandwidth environments.",
    ],
  },
  {
    position: "Smart Contract Developer (Contract)",
    company: "Bizflip",
    location: "Remote (US)",
    duration: "Jun 2025 - Mar 2026",
    achievements: [
      "Refactored Solidity codebases to improve gas efficiency by 50% and security, reducing transaction costs for marketplace users.",
      "Delivered critical secure smart contract features for MVP launch within a strict 2-month deadline.",
    ],
  },
];

export function Experience() {
  return (
    <section className="text-white py-16 px-10 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            My Experience
          </h2>
        </div>
        <div className="md:w-2/3 flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-[#111111] border border-gray-800 p-6 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-bold text-[#D3E97A]">{exp.position}</h3>
                <span className="text-xs text-gray-500">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300 leading-relaxed">
                    <span className="text-[#D3E97A] mt-1 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
