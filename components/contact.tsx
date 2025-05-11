"use client";

import React, { useReducer } from 'react';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import Toast from './toasts'; // Import the Toast component

interface Action {
  type: 'name' | 'email' | 'subject' | 'message' | 'toast' | 'loading';
  payload?: any;
}
interface Message {
  name: string;
  email: string;
  subject?: string;
  message: string;
  toast?: { message: string; type: 'success' | 'error'; isVisible: boolean };
  isLoading?: boolean;
}
function ContactReducer(state:Message, action:Action){
  if (action.type === 'toast') {
    return { ...state, toast: action.payload };
  }
  if (action.type === 'loading') {
    return { ...state, isLoading: action.payload };
  }
  return {...state, [action.type]:action.payload}
}

const Contact: React.FC = () => {
 const [state, dp] = useReducer(ContactReducer, {
  name:"",
  email:"",
  subject:"",
  message:"",
  toast: { message: '', type: 'success', isVisible: false },
  isLoading: false
 });

 const handleCloseToast = () => {
  dp({ type: 'toast', payload: { ...state.toast, isVisible: false } });
 };

  return (
    <section id="contact" className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
      {state.toast?.isVisible && (
        <Toast
          message={state.toast.message}
          type={state.toast.type}
          isVisible={state.toast.isVisible}
          onClose={handleCloseToast}
        />
      )}
      <div className="container mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">LET'S CONNECT</h2>
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
          <form onSubmit={(e)=>{
            e.preventDefault()
          }} className="space-y-6 p-8 bg-[#1C1C1C] rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="John Doe"
                onChange={(e) => dp({type:'name', payload:e.target.value})}
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
                onChange={(e) => dp({type:'email', payload:e.target.value})}
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
                onChange={(e)=> dp({type:'subject', payload:e.target.value})}
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
                onChange={(e) => dp({type:'message', payload:e.target.value})}
                placeholder="Your message here..."
                className="w-full px-4 py-3 bg-[#2D2D2D] border border-gray-600 rounded-md text-white focus:ring-[#D3E97A] focus:border-[#D3E97A] placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <button
               onClick={async ()=>{
                dp({ type: 'loading', payload: true });
                try {
                  const res = await fetch('/api', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: state.name, email: state.email, subject: state.subject, message: state.message }), // Only send necessary fields
                  });
                  // const data = await res.json(); // data might not be needed if only status is checked
                  if(res.status === 200){
                    dp({type:'toast', payload: { message: 'Message sent successfully!', type: 'success', isVisible: true }})
                    // Clear form fields after successful submission
                    dp({ type: 'name', payload: '' });
                    dp({ type: 'email', payload: '' });
                    dp({ type: 'subject', payload: '' });
                    dp({ type: 'message', payload: '' });
                  }else{
                    dp({type:'toast', payload: { message: 'Failed to send message. Please try again.', type: 'error', isVisible: true }})
                  }
                } catch (error) {
                  console.error('Form submission error:', error);
                  dp({type:'toast', payload: { message: 'An unexpected error occurred. Please try again.', type: 'error', isVisible: true }})
                } finally {
                  dp({ type: 'loading', payload: false });
                }
               }}
                disabled={state.isLoading}
                className={`w-full cursor-pointer bg-[#D3E97A] text-black font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#D3E97A] ${state.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {state.isLoading ? 'SUBMITTING...' : 'SUBMIT'}
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