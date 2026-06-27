import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; // Import skills layout
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white scroll-smooth pt-16">
      <Navbar />
      <main>
        <Hero />
        <Skills /> {/* Render skills grid component */}
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;