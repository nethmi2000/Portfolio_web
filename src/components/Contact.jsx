import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-20 px-6 text-center border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Let's Build Something Great Together
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
          I'm always open to discussing new full-stack engineering opportunities, mobile architecture designs, or technical collaborations.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="nethminirasha1910140@gmail.com" 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-indigo-600/10 transition duration-300 text-center"
          >
            Email Me Directly
          </a>
          <a 
            href="https://github.com/nethmi2000" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold py-3.5 px-8 rounded-xl transition duration-300 text-center"
          >
            View GitHub Profile
          </a>
        </div>
        
        {/* Footer Note */}
        <p className="text-xs text-slate-600 mt-16 tracking-wide">
          &copy; {new Date().getFullYear()} Nethmi Wickramasinghe. Built with React, Vite & Tailwind v4.
        </p>
      </div>
    </section>
  );
}

export default Contact;