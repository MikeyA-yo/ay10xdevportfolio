"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FadeIn, SlideIn } from "./animatecontainers";
import { ScrollLinkContact } from "./nav";

const roles = [
  "Full-Stack Developer",
  "Rust Developer",
  "Smart Contract Dev",
  "Web3 Builder",
  "Systems Builder",
];

function TypewriterTagline() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <p className="text-[#C7C7C7] text-lg min-h-[1.75rem]">
      A professional{" "}
      <span className="text-[#D3E97A] font-semibold">
        {displayed}
        <span className="animate-pulse">|</span>
      </span>{" "}
      passionate about building great products and solving real-world problems.
    </p>
  );
}

export default function Hero() {
  return (
    <>
      <div className="flex h-screen lg:flex-row flex-col md:flex-row lg:p-10 md:p-10 p-10 pt-16 w-full gap-4 items-center">
        <SlideIn className="flex-[1] w-full flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-white">
            HI, I AM
            <br /> OLUWATOLA AYOMIDE
          </h1>
          <TypewriterTagline />
          <div className="flex gap-2">
            <ScrollLinkContact>
              <div className="rounded-full flex gap-2 bg-[#D3E97A] items-center p-2 text-black font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
                <p>CONTACT ME</p>
                <BsArrowUpRightCircleFill />
              </div>
            </ScrollLinkContact>
            <div className="rounded-full flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
              <Link href={"https://x.com/OluwatolaAyomi4"}>
                <FaXTwitter className="h-6 w-6 fill-[#D3E97A]" />
              </Link>
            </div>
            <div className="rounded-full flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
              <Link href={"https://github.com/MikeyA-yo"}>
                <FaGithub className="h-6 w-6 fill-[#D3E97A]" />
              </Link>
            </div>
          </div>
        </SlideIn>
        <FadeIn className="flex-[1] overflow-hidden w-full flex items-center justify-center">
          <Image
            src={"/portpic.jpg"}
            alt="Me"
            width={500}
            height={500}
            className="rounded-md w-96 h-full object-cover"
          />
        </FadeIn>
      </div>
    </>
  );
}
