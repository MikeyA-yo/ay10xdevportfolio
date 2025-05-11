import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FadeIn, SlideIn } from "./animatecontainers";

export default function Hero() {
  return (
    <>
      <div className="flex h-screen lg:flex-row flex-col md:flex-row lg:p-10 md:p-10 p-10 pt-16 w-full gap-4 items-center">
        <SlideIn className="flex-[1] w-full flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-white">
            HI, I AM
            <br /> OLUWATOLA AYOMIDE
          </h1>
          <p className="text-[#C7C7C7]">
            A professional fullstack web2 and web3 developer passionate about
            building great products and solving real-world problems.
          </p>
          <div className="flex gap-2">
            <div className="rounded-full flex gap-2 bg-[#D3E97A] items-center p-2 text-black font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
                <p>CONTACT ME</p>
                <BsArrowUpRightCircleFill />
            </div>
            <div className="rounded-full flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
                <Link href={"https://x.com/OluwatolaAyomi4"}><FaXTwitter className="h-6 w-6 fill-[#D3E97A]" /></Link>
            </div>
            <div className="rounded-full flex items-center justify-center bg-[#222222] p-2 font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
                <Link href={"https://github.com/MikeyA-yo"}><FaGithub className="h-6 w-6 fill-[#D3E97A]" /></Link>
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
