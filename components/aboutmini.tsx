import React from 'react';

const AboutMini: React.FC = () => {
  return (
    <section id="about-mini" className="bg-black text-white py-16 px-10 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold uppercase tracking-tight">
            About Me
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4">
            I am a full-stack developer, with experience in web2,web3 and desktop apps.
            Has Systems Engineering background.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            I am a full-stack developer specializing in web and web3 applications. My core 
            tech stack includes JavaScript, TypeScript, Golang, and Solidity, with a growing 
            interest in Rust. I build robust applications using the MERN stack, NextJS, and 
            NestJS frameworks. Passionate about solving complex problems and creating efficient, 
            scalable solutions. When I'm not coding, I enjoy exploring new technologies and 
            contributing to the developer community. Always eager to take on challenging projects 
            and expand my technical expertise.
          </p>
          <a
            href="/about" 
            className="text-sm font-medium text-[#D3E97A] hover:text-green-300 transition-colors duration-300 border-b-2 border-green-400 pb-1"
          >
            MORE ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMini;