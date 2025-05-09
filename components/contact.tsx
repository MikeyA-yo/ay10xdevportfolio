"use client";

import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight">LET'S CONNECT</h2>
            <p className="text-lg text-gray-300">
              Say hello at <a href="mailto:ayomideoluwatola1@gmail.com" className="text-[#D3E97A] hover:underline">ayomideoluwatola1@gmail.com</a>
            </p>
            <p className="text-lg text-gray-300">
              For more info, here's my <a href="#" className="text-[#D3E97A] hover:underline">resume</a>
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/ayomide-oluwatola-943801315/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D3E97A] transition-colors duration-300">
                <FaLinkedinIn size={28} />
              </a>
              <a href="https://github.com/MikeyA-yo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D3E97A] transition-colors duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://x.com/OluwatolaAyomi4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D3E97A] transition-colors duration-300">
                <FaXTwitter size={28} />
              </a>
              <a href="https://wa.me/+2348089132385" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D3E97A] transition-colors duration-300">
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="space-y-6 p-8 bg-[#1C1C1C] rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#2D2D2D] border border-gray-600 rounded-md text-white focus:ring-[#D3E97A] focus:border-[#D3E97A] placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#2D2D2D] border border-gray-600 rounded-md text-white focus:ring-[#D3E97A] focus:border-[#D3E97A] placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Regarding your portfolio"
                className="w-full px-4 py-3 bg-[#2D2D2D] border border-gray-600 rounded-md text-white focus:ring-[#D3E97A] focus:border-[#D3E97A] placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Your message here..."
                className="w-full px-4 py-3 bg-[#2D2D2D] border border-gray-600 rounded-md text-white focus:ring-[#D3E97A] focus:border-[#D3E97A] placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-[#D3E97A] text-black font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#D3E97A]"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="w-full max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Oluwatola Ayomide, C.H.O</p>
      </footer>
    </section>
  );
};

export default Contact;