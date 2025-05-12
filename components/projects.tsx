"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const projects: ProjectCardProps[] = [
    {
        image:'/anonyline.png',
        title: 'Anonyline',
        description: 'A web application that allows users to send anonymous messages to people via rooms. Users can create rooms, send messages, and view messages sent to them.',
        stack: ['Next.js', 'Tailwind CSS', 'Supabase'],
        liveDemoLink: 'https://anonyline.vercel.app',
        githubLink: 'https://github.com/MikeyA-yo/anonyline'
    },
    {
        image:'/bibleapp.png',
        title: 'Online Bible App',
        description: 'A web application that allows users to read the Bible online. Users can search for verses, read different translations, and save their favorite verses.',
        stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        liveDemoLink: 'https://bible-ochre.vercel.app/',
        githubLink: 'https://github.com/MikeyA-yo/bibleapp'
    },
    {
        image:'/cryptovault.png',
        title:'CryptoVault',
        description: 'A web application that allows users to store their sepolia eth in a secure way. Users can connect wallets, add sepolia eth, and view their balances, and also loan sepolia eth.',
        stack: ['Solidity', 'Tailwind CSS', 'TypeScript'],
        liveDemoLink: 'https://cryptovault-five.vercel.app/',
        githubLink:'https://github.com/MikeyA-yo/cryptovault'
    }, 
    {
      image:'/aysh.png',
      title: 'AYSHELL',
      description: 'An interactive fast shell  that allows users to run commands in a terminal-like environment. Has some utility commands built in.',
      stack:['Golang', 'React (Frontend docs)'],
      liveDemoLink: 'https://ayshell-guide.vercel.app/',
      githubLink: 'https://github.com/MikeyA-yo/ayshell-guide'
    }
]
export default function Projects(){
    return (
        <>
            <section id="projects" className="w-full flex p-10 flex-col">
                <div>
                <h3 className='text-white font-bold text-2xl'>FEATURED PROJECTS</h3>
                <p className='text-gray-400 text-sm'>Here are some of my projects that I have worked on.</p>
                </div>
                <div className="flex flex-col gap-10 mt-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
              </section>
        </>
    )
}
interface ProjectCardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
  stack: string[];
  liveDemoLink?: string;
  githubLink?: string;
  conceptual?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  stack,
  liveDemoLink,
  githubLink,
  conceptual = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row my-8 w-full max-w-6xl mx-auto text-gray-300"
    >
      <div className="md:w-1/2 relative p-2  flex flex-col items-center justify-center">
        {conceptual && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            Conceptual Work
          </div>
        )}
        <div className="w-full bg-[#222222] h-full aspect-video relative overflow-hidden rounded-md border p-10">
          {typeof image === 'string' ? (
            <img src={image} alt={title} className="object-cover w-full h-full" />
          ) : (
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          )}
        </div>
      </div>

      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-sm md:text-base mb-6 leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Project Info</h4>
          <div className="border-t border-gray-700 pt-3">
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-400">Stack</span>
              <span className="text-sm text-right text-white font-medium">{stack.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D3E97A] hover:text-white transition-colors duration-300 flex items-center group"
            >
              LIVE DEMO
              <FaExternalLinkAlt className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#D3E97A] hover:text-white transition-colors duration-300 flex items-center group"
            >
              SEE ON GITHUB
              <FaGithub className="ml-2 transform transition-transform duration-300 group-hover:scale-110" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};