import React from 'react';
// Step 2a: Import your profile photo from the assets folder.
// Replace 'profile.jpg' with your actual filename if it's different (e.g., 'profile.png')
import profilePhoto from '../assets/profile.jpg'; 

function Hero() {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white py-20 px-6 md:px-12 rounded-3xl m-6 shadow-2xl border border-slate-800">
      
      {/* Step 2b: A Responsive Two-Column Grid.
        'grid-cols-1' on mobile (stacked vertical) 
        'md:grid-cols-2' on tablet/desktop (side-by-side)
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* === Left Column (Your Text Content) === */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-indigo-500/20 inline-block mb-6">
            Available for Opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
            Hi, I'm Nethmi Wickramasinghe
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-300 font-medium mb-8">
            Software Engineer & Full-Stack Developer
          </h2>
          <p className="text-base md:text-lg text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto md:mx-0">
            I design and build clean, efficient full-stack platforms and mobile applications. Focused on turning complex data requirements into elegant, user-friendly digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-indigo-600/20 transition duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold py-3.5 px-8 rounded-xl border border-slate-700 transition duration-300 backdrop-blur-xs text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
        
        {/* === Right Column (Your Profile Image) === */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end mb-10 md:mb-0">
          <div className="relative group">
            {/* The modern profile picture with shadow and borders */}
            <img 
              src={profilePhoto} 
              alt="Nethmi Wickramasinghe Profile" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-indigo-500/10 transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* A subtle decorative glowing accent ring behind the image */}
            <div className="absolute -inset-2 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;