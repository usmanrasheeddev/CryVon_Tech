"use client";

import { useState, useRef } from 'react';

export default function Tech() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const scrollContainer = useRef(null);

  const techData = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Angular", level: 70 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 75 },
        { name: "PHP", level: 70 },
        { name: "Ruby on Rails", level: 65 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    database: {
      title: "Database & Storage",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Elasticsearch", level: 65 }
      ],
      color: "from-amber-500 to-orange-500"
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Terraform", level: 70 }
      ],
      color: "from-green-500 to-teal-500"
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Our Technology Expertise
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build robust, scalable, and high-performance solutions tailored to your business needs.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(techData).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? `bg-gradient-to-r ${techData[category].color} text-white shadow-lg` 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {techData[category].title}
            </button>
          ))}
        </div>

        {/* Tech Stack Cards */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/90 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 -translate-x-2 hover:-translate-x-3 hidden md:block"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/90 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 translate-x-2 hover:translate-x-3 hidden md:block"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto pb-6 scrollbar-hide gap-6 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {techData[activeCategory].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl shadow-lg border border-slate-700/50 p-6 group hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-amber-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden mb-6">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${techData[activeCategory].color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                {/* Skill Description */}
                <p className="text-slate-400 text-sm mb-4">
                  Our team has extensive experience building production-grade applications with {skill.name}.
                </p>
                
                {/* Projects Count */}
                <div className="flex items-center text-slate-500 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{Math.floor(Math.random() * 20) + 10} projects completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tech Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Development Approach */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-colors duration-500">
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Our Development Philosophy</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-amber-500/10 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Clean, maintainable code with comprehensive documentation</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-500/10 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Test-driven development for robust, bug-free applications</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-500/10 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Agile methodology with regular client updates</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-500/10 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Performance optimization and SEO best practices</span>
              </li>
            </ul>
          </div>

          {/* Tech Stats */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/30 transition-colors duration-500">
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Technology Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-700/20 rounded-xl">
                <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-slate-700/20 rounded-xl">
                <div className="text-4xl font-bold text-amber-400 mb-2">40%</div>
                <div className="text-slate-400 text-sm">Faster Development</div>
              </div>
              <div className="text-center p-4 bg-slate-700/20 rounded-xl">
                <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center p-4 bg-slate-700/20 rounded-xl">
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}