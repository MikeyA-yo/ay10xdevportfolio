"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveDemoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    image: "/anonyline.png",
    title: "Anonyline",
    description:
      "A web application that allows users to send anonymous messages to people via rooms. Users can create rooms, send messages, and view messages sent to them.",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    liveDemoLink: "https://anonyline.vercel.app",
    githubLink: "https://github.com/MikeyA-yo/anonyline",
  },
  {
    image: "/ayscript.jpg",
    title: "AYScript",
    description:
      "AYScript is a simple programming language that transpiles to JavaScript. It is designed to be easy to learn and use, with a syntax that is similar to Python and JavaScript.",
    stack: ["TypeScript", "Golang", "React (Frontend docs)"],
    liveDemoLink: "https://ayscriptdocs.vercel.app/",
    githubLink: "https://github.com/MikeyA-yo/ay-ts",
  },
  {
    image: "/bibleapp.png",
    title: "Online Bible App",
    description:
      "A web application that allows users to read the Bible online. Users can search for verses, read different translations, and save their favourite verses.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveDemoLink: "https://bible-ochre.vercel.app/",
    githubLink: "https://github.com/MikeyA-yo/bibleapp",
  },
  {
    image: "/cryptovault.png",
    title: "CryptoVault",
    description:
      "A web application that allows users to store their sepolia ETH securely. Users can connect wallets, deposit, view balances, and loan sepolia ETH.",
    stack: ["Solidity", "Tailwind CSS", "TypeScript"],
    liveDemoLink: "https://cryptovault-five.vercel.app/",
    githubLink: "https://github.com/MikeyA-yo/cryptovault",
  },
  {
    image: "/aysh.png",
    title: "AYSHELL",
    description:
      "An interactive fast shell that allows users to run commands in a terminal-like environment. Has some utility commands built in.",
    stack: ["Golang", "React (Frontend docs)"],
    liveDemoLink: "https://ayshell-guide.vercel.app/",
    githubLink: "https://github.com/MikeyA-yo/ayshell-guide",
  },
  {
    image: "/suirunner.png",
    title: "Sui-Runner",
    description:
      "A Rust-based CLI tool that simplifies development workflows for the Sui blockchain. Features project scaffolding, build/test automation with file-watching, network deployment, wallet management, and an interactive terminal UI dashboard.",
    stack: ["Rust", "Ratatui", "Tokio", "Clap"],
    liveDemoLink: "https://suirunner.vercel.app/",
    githubLink: "https://github.com/MikeyA-yo/sui-runner",
  },
];

// Alternating wide/narrow pattern across a 3-col grid:
// Row 1: [0 wide(2)] [1]
// Row 2: [2] [3 wide(2)]
// Row 3: [4] [5 wide(2)]
const colSpans = [
  "md:col-span-2 lg:col-span-2",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-2",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-2",
];

export default function Projects() {
  return (
    <section id="projects" className="w-full p-10">
      <div className="mb-10">
        <h3 className="text-white font-bold text-2xl">FEATURED PROJECTS</h3>
        <p className="text-gray-400 text-sm mt-1">
          Here are some of my projects that I have worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <BentoCard key={index} project={project} colSpan={colSpans[index]} index={index} />
        ))}
      </div>
    </section>
  );
}

function BentoCard({
  project,
  colSpan,
  index,
}: {
  project: Project;
  colSpan: string;
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <div className={colSpan} style={{ perspective: "900px" }}>
      <motion.div
        ref={wrapperRef}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
        className="relative rounded-2xl overflow-hidden bg-[#111111] border border-gray-800 flex flex-col h-full cursor-default"
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(211,233,122,0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Image */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <h3 className="text-base font-bold text-white">{project.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-gray-700 text-[#D3E97A] hover:bg-[#D3E97A] hover:text-black transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 mt-3 pt-3 border-t border-gray-800">
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D3E97A] hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                LIVE DEMO
                <FaExternalLinkAlt className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D3E97A] hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                GITHUB
                <FaGithub className="transition-transform duration-200 group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
