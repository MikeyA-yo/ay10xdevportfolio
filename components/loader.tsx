"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINES = [
  { text: "> initializing...", color: "text-gray-500" },
  { text: "> loading: Oluwatola Ayomide", color: "text-gray-400" },
  { text: "> stack: Rust · Go · TypeScript · Solidity", color: "text-gray-400" },
  { text: "> status: ready.", color: "text-[#D3E97A]" },
];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [completed, setCompleted] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (currentLine >= LINES.length) {
      const t = setTimeout(() => {
        setExiting(true);
        setTimeout(onDone, 650);
      }, 500);
      return () => clearTimeout(t);
    }

    const line = LINES[currentLine].text;

    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCompleted((prev) => [...prev, currentLine]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 160);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      animate={exiting ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="font-mono text-sm md:text-base text-left w-full max-w-sm px-8 space-y-2">
        {completed.map((i) => (
          <p key={i} className={LINES[i].color}>
            {LINES[i].text}
          </p>
        ))}
        {currentLine < LINES.length && (
          <p className={LINES[currentLine].color}>
            {LINES[currentLine].text.slice(0, currentChar)}
            <span className="animate-pulse">▋</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
