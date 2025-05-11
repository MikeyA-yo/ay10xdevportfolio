"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="lg:flex hidden z-10 md:flex fixed w-full justify-between items-center p-4 backdrop-blur text-[#C7C7C7]">
        <Link href={"/"} className="text-xl font-bold">Oluwatola Ayomide</Link>
        <div className="flex gap-3">
          <ScrollLink
            to="about"
            smooth={true} duration={500}
            className="cursor-pointer font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            About
          </ScrollLink>
          <a
            href="/#projects"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Work
          </a>
          <ScrollLink
            to="contact"
            smooth={true} duration={500}
            className="cursor-pointer font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Contact
          </ScrollLink>
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
          <ScrollLink
            to="about"
            smooth={true} duration={500}
            className="cursor-pointer font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            About
          </ScrollLink>
          <a
            href="/#projects"
            className=" font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Work
          </a>
          <ScrollLink
            to="contact"
            smooth={true} duration={500}
            className="cursor-pointer font-bold hover:text-[#D3E97A] transition-all duration-300 ease-in-out"
          >
            Contact
          </ScrollLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
