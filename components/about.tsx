import Link from "next/link";
import { FaXTwitter, FaGithub, FaDownload } from "react-icons/fa6";

export function AboutM() {
  return (
    <section className="bg-black text-white py-16 px-10 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold uppercase tracking-tight">
            About Me
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4">
            I am a full-stack developer, with experience in web2,web3 and
            desktop apps. Has Systems Engineering background.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            I am a full-stack developer specializing in web and web3
            applications. My core tech stack includes JavaScript, TypeScript,
            Golang, and Solidity, with a growing interest in Rust. I build
            robust applications using the MERN stack, NextJS, and NestJS
            frameworks. Passionate about solving complex problems and creating
            efficient, scalable solutions. When I'm not coding, I enjoy
            exploring new technologies and contributing to the developer
            community. Always eager to take on challenging projects and expand
            my technical expertise.
          </p>
          <div className="flex gap-2">
            <div className="rounded-full flex gap-2 bg-[#D3E97A] items-center p-2 text-black font-bold cursor-pointer hover:bg-[#C7C7C7] transition-all duration-300 ease-in-out">
              <p>DOWNLOAD RESUME</p>
              <FaDownload />
            </div>
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
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <>
      <section className="text-white py-16 px-10 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold uppercase tracking-tight">
              My Capabilities
            </h2>
          </div>
          <div>
            <p className="text-[#C7C7C7]">
                Here are some of the technologies I have worked with:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {["JavaScript", "TypeScript", "Go", "Solidity", "Rust", "React", "Next", "Nest", "Tailwind", "Node", "Supabase", "TeamWork"].map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-[#222222] p-4 rounded-full flex items-center justify-center text-center hover:bg-[#D3E97A] hover:text-black transform hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        <p className="text-lg font-semibold">{skill}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Experience(){
    
}