"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="lg:flex hidden md:flex fixed w-full justify-between items-center p-4 backdrop-blur text-[#C7C7C7]">
        <h2 className="text-xl font-bold">Oluwatola Ayomide</h2>
        <div className="flex gap-3">
          <a
            href="#about"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Work
          </a>
          <a
            href="#contact"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </nav>
      <nav className="flex fixed z-20 lg:hidden md:hidden justify-between items-center p-2 backdrop-blur text-[#C7C7C7] w-full">
        <h2 className="text-xl font-bold">Oluwatola Ayomide</h2>
        {!isOpen && (
          <HiMenuAlt4
            onClick={() => setIsOpen(true)}
            className="h-8 w-8 fill-[#C7C7C7] cursor-pointer"
          />
        )}
        {isOpen && (
          <FaXmark
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 fill-[#C7C7C7] cursor-pointer"
          />
        )}
      </nav>
      <Sidebar open={isOpen} />
    </>
  );
}

function Sidebar({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.5 }}
          className="fixed w-full pt-20 items-center  text-[#C7C7C7] flex flex-col z-10 gap-4 h-screen backdrop-blur-md "
        >
          <a
            href="#about"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Work
          </a>
          <a
            href="#contact"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
