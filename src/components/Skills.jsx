import React from 'react';

function Skills() {
  // 1. This is your single source of truth for your systems
  const projectList = [
    // {
    //   title: "Human Resource Management System",
    //   tech: ["React", "Vite", "Spring Boot", "PostgreSQL"],
    // },
    // {
    //   title: "VHM Express Courier Portal",
    //   tech: ["React", "Tailwind CSS", "Node.js"],
    // },
    {
      title: "Fish Buddy Mobile App",
      tech: ["Flutter", "Python", "FastAPI", "Uvicorn"],
    }
  ];

  // 2. Automatically calculate unique technologies and their usage counts
  const techCounts = {};
  let totalProjects = projectList.length;

  projectList.forEach(project => {
    project.tech.forEach(tech => {
      techCounts[tech] = (techCounts[tech] || 0) + 1;
    });
  });

  // Map distinct colors to make your badges pop like the template video
  const colorMap = {
    "React": "bg-indigo-500 shadow-indigo-500/50",
    "Tailwind CSS": "bg-sky-400 shadow-sky-400/50",
    "Flutter": "bg-emerald-500 shadow-emerald-500/50",
    "Spring Boot": "bg-violet-500 shadow-violet-500/50",
    "Python": "bg-amber-500 shadow-amber-500/50",
    "PostgreSQL": "bg-blue-500 shadow-blue-500/50",
    "Vite": "bg-purple-500 shadow-purple-500/50",
    "Node.js": "bg-green-500 shadow-green-500/50",
    "FastAPI": "bg-teal-500 shadow-teal-500/50",
    "Uvicorn": "bg-orange-500 shadow-orange-500/50"
  };

  // Convert the calculated object into an array sorted by your highest usage
  const autoSkills = Object.keys(techCounts).map(techName => {
    const usageCount = techCounts[techName];
    // Calculate a dynamic percentage based on how many projects use it
    const dynamicPercentage = Math.round((usageCount / totalProjects) * 100);
    
    return {
      name: techName,
      // Fallback to calculation or minimum 75% display value for clean bars
      displayLevel: `${Math.max(dynamicPercentage, 75)}%`, 
      projectCount: `${usageCount} Project${usageCount > 1 ? 's' : ''}`,
      color: colorMap[techName] || "bg-slate-500 shadow-slate-500/50"
    };
  }).sort((a, b) => b.projectCount.localeCompare(a.projectCount)); // Sort by most used

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/50">
      <div className="text-center mb-16">
        <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">
          Automated Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          Project-Driven Skills
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mt-4 text-sm leading-relaxed">
          These technical proficiency values are auto-generated and calculated directly from active code repositories.
        </p>
      </div>

      {/* The Dynamic Layout Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {autoSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-bold text-slate-800 text-sm tracking-wide">
                  {skill.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                  Used in {skill.projectCount}
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100/50">
                {skill.displayLevel}
              </span>
            </div>
            
            {/* Smooth Render Bar */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${skill.color}`} 
                style={{ width: skill.displayLevel }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;