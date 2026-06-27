import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <nav className="bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl py-3 px-6 rounded-full shadow-2xl flex items-center justify-between gap-12 max-w-xl w-full">
        {/* Brand / Logo */}
        <div className="text-base font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent cursor-pointer">
          Nethmi.dev
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-xs font-semibold tracking-wide text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition duration-200">
            Home
          </a>
          <a href="#skills" className="hover:text-indigo-400 transition duration-200">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition duration-200">
            Projects
          </a>
          <a 
            href="#contact" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-full transition duration-200 shadow-lg shadow-indigo-600/20"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;