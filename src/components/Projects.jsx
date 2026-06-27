import React from 'react';
// 1. Import your project images from the assets folder
import fishBuddyImg from '../assets/fishbuddy.jpg'; 
// (Tip: You can import placeholder images or your other project images here too!)

function Projects() {
  const projectList = [
    // {
    //   title: "Human Resource Management System",
    //   description: "An enterprise-grade full-stack HRM platform built to manage complex corporate departments. Features seamless automation for employee management, payroll processing, attendance logging, and leave management cycles.",
    //   tech: ["React", "Vite", "Spring Boot", "PostgreSQL"],
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", // Using a premium placeholder until you add your own
    //   repoUrl: "https://github.com/nethmi2000" // Replace with your actual HRM repository URL
    // },
    // {
    //   title: "VHM Express Courier Portal",
    //   description: "A sleek, responsive web system developed for a logistical courier service. Provides real-time package updates, tracking views, and an intuitive user dashboard.",
    //   tech: ["React", "Tailwind CSS", "Node.js"],
    //   image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80", // Using a premium placeholder
    //   repoUrl: "https://github.com/nethmi2000" // Replace with your actual VHM repository URL
    // },
    {
      title: "Fish Buddy Mobile App",
      description: "A smart mobile application built to assist in aquaculture tracking. Integrates a custom Python machine learning backend server to quickly analyze and identify fish diseases.",
      tech: ["Flutter", "Python", "FastAPI / Uvicorn"],
      image: fishBuddyImg, // Using your imported local asset here!
      repoUrl: "https://github.com/nethmi2000/Fish-Buddy---Fish-Disease-Identify-Mobile-App.git" // Your exact GitHub URL
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Featured Projects
          </h2>
        </div>
        <p className="text-slate-600 max-w-md mt-4 md:mt-0 leading-relaxed">
          A targeted selection of real-world enterprise applications, full-stack architectures, and mobile ecosystems I've engineered.
        </p>
      </div>

      {/* The Responsive Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300/50 transition duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Project Image Card Header */}
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            
            <div className="px-6 pb-6">
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-slate-50 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Clickable Real Link to GitHub */}
              <a 
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-indigo-600 group-hover:text-indigo-500 items-center gap-1 transition"
              >
                Explore Code Repository <span className="transform group-hover:translate-x-1 transition duration-200">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;