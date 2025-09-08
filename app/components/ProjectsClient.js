"use client";

import { useState, useRef } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "EduRise LMS",
      category: "web",
      description: "A complete e-learning system with live classes and progress tracking.",
      fullDescription: "EduRise is a comprehensive Learning Management System designed for educational institutions. It features live class capabilities, student progress tracking, assignment management, and interactive quizzes. The platform supports both instructors and students with an intuitive interface and powerful analytics.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Socket.io"],
      result: "Improved student engagement by 45%",
      image: "/api/placeholder/400/250",
      features: ["Live Classes", "Progress Tracking", "Assignment Management", "Interactive Quizzes"],
      client: "EduNext Inc.",
      duration: "6 months",
      link: "#"
    },
    {
      id: 2,
      title: "ShopEdge E-commerce",
      category: "web",
      description: "Scalable e-commerce platform with multi-vendor support.",
      fullDescription: "ShopEdge is a fully-featured e-commerce solution supporting multiple vendors, inventory management, and advanced analytics. The platform includes a sophisticated admin dashboard, customer relationship management tools, and seamless payment integration.",
      technologies: ["Next.js", "Stripe", "AWS", "Tailwind CSS", "GraphQL"],
      result: "Boosted sales by 60% for client",
      image: "/api/placeholder/400/250",
      features: ["Multi-vendor Support", "Inventory Management", "Advanced Analytics", "Payment Integration"],
      client: "Global Retail Group",
      duration: "8 months",
      link: "#"
    },
    {
      id: 3,
      title: "BizAI Agent",
      category: "ai",
      description: "Custom AI chatbot for customer support.",
      fullDescription: "BizAI Agent is an intelligent chatbot solution that uses natural language processing to handle customer inquiries. The system integrates with existing CRM platforms, provides 24/7 customer support, and learns from interactions to improve response accuracy over time.",
      technologies: ["Python", "NLP", "TensorFlow", "React", "Firebase"],
      result: "Reduced support costs by 40%",
      image: "/api/placeholder/400/250",
      features: ["Natural Language Processing", "CRM Integration", "24/7 Support", "Learning Algorithm"],
      client: "TechSpark Enterprises",
      duration: "4 months",
      link: "#"
    },
    {
      id: 4,
      title: "HealthTrack Pro",
      category: "mobile",
      description: "Health monitoring app with real-time analytics.",
      fullDescription: "HealthTrack Pro is a mobile application that allows users to monitor their health metrics, set fitness goals, and receive personalized recommendations. The app syncs with popular wearables and provides detailed reports and insights.",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      result: "100,000+ downloads in first month",
      image: "/api/placeholder/400/250",
      features: ["Health Metrics Tracking", "Goal Setting", "Wearable Integration", "Personalized Recommendations"],
      client: "HealthPlus Network",
      duration: "5 months",
      link: "#"
    },
    {
      id: 5,
      title: "FinSecure Platform",
      category: "web",
      description: "Banking security solution with advanced encryption.",
      fullDescription: "FinSecure is a comprehensive banking security platform that utilizes advanced encryption algorithms and multi-factor authentication to protect financial transactions. The system includes real-time threat detection and automated fraud prevention mechanisms.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
      result: "Prevented 99.9% of fraud attempts",
      image: "/api/placeholder/400/250",
      features: ["Advanced Encryption", "Multi-factor Authentication", "Threat Detection", "Fraud Prevention"],
      client: "SecureBank International",
      duration: "9 months",
      link: "#"
    },
    {
      id: 6,
      title: "TravelEase App",
      category: "mobile",
      description: "All-in-one travel planning and booking application.",
      fullDescription: "TravelEase is a comprehensive travel application that allows users to plan trips, book flights and accommodations, and discover local attractions. The app features personalized recommendations based on user preferences and travel history.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      result: "4.8-star rating on app stores",
      image: "/api/placeholder/400/250",
      features: ["Trip Planning", "Flight & Hotel Booking", "Local Attractions", "Personalized Recommendations"],
      client: "Wanderlust Travel",
      duration: "7 months",
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" ref={projectsRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Portfolio
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects that demonstrate our expertise in delivering high-quality solutions across various industries and technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-2xl shadow-lg border border-slate-700/50 overflow-hidden group hover:shadow-xl transition-all duration-500"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease forwards'
              }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 absolute inset-0"></div>
                <div className="w-full h-full bg-slate-800/30 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 text-xs text-slate-300 rounded-full backdrop-blur-sm">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Result */}
                <div className="flex items-center text-sm text-green-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{project.result}</span>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => openProjectDetail(project)}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
         <p className="text-slate-300 max-w-2xl mx-auto mb-8">
        Let&apos;s discuss how we can bring your ideas to life with our expertise and innovative solutions.

          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-lg font-medium">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700/50 z-10">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={closeProjectDetail}
                className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-700/50 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Header */}
              <div className="mb-8">
                <div className="h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-5xl">🚀</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-slate-400 text-sm mb-1">Client</h4>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-slate-400 text-sm mb-1">Duration</h4>
                    <p className="font-medium">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-slate-400 text-sm mb-1">Category</h4>
                    <p className="font-medium capitalize">{selectedProject.category}</p>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                  <p className="text-slate-300 mb-6">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">Key Results</h4>
                  <div className="flex items-center text-lg text-green-400 mb-6 p-4 bg-slate-700/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedProject.result}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-300 rounded-md border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-slate-700/50">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex-1">
                  Visit Live Project
                </button>
                <button 
                  onClick={closeProjectDetail}
                  className="px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}