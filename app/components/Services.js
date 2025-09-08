"use client";

import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      short: "Professional websites with modern technologies.",
      details: [
        "WordPress development & customization",
        "Static sites (HTML, CSS, JS)",
        "React.js & Next.js web apps",
        "Responsive & SEO friendly"
      ],
      icon: "🌐"
    },
    {
      id: 2,
      title: "Mobile App Development",
      short: "Cross-platform mobile apps that engage users.",
      details: [
        "React Native apps",
        "Flutter development",
        "Android/iOS native apps",
        "App store deployment support"
      ],
      icon: "📱"
    },
    {
      id: 3,
      title: "Backend Development",
      short: "Scalable and secure server-side solutions.",
      details: [
        "Node.js, Express.js APIs",
        "REST & GraphQL services",
        "Database integration (MongoDB, MySQL, PostgreSQL)",
        "Authentication & security setup"
      ],
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Database & Analytics",
      short: "Smart data handling and insights for your business.",
      details: [
        "Database design & optimization",
        "Big data processing",
        "Data analytics dashboards",
        "Business intelligence reports"
      ],
      icon: "📊"
    },
    {
      id: 5,
      title: "AI & Automation",
      short: "Leverage AI to scale faster.",
      details: [
        "AI agents & chatbots",
        "Automation workflows",
        "Machine learning integration",
        "NLP solutions"
      ],
      icon: "🤖"
    },
    {
      id: 6,
      title: "UI/UX Design",
      short: "Beautiful, user-focused designs.",
      details: [
        "Wireframing & prototyping",
        "Web & mobile app design",
        "User journey mapping",
        "Design systems & style guides"
      ],
      icon: "🎨"
    },
    {
      id: 7,
      title: "Cloud & DevOps",
      short: "Reliable infrastructure for your applications.",
      details: [
        "AWS / Azure / Google Cloud setup",
        "CI/CD pipelines",
        "Docker & Kubernetes deployment",
        "Serverless solutions"
      ],
      icon: "☁️"
    },
    {
      id: 8,
      title: "Digital Marketing",
      short: "Grow your business with online strategies.",
      details: [
        "SEO optimization",
        "Social media marketing",
        "Paid ad campaigns",
        "Content strategy"
      ],
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Professional Services
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end digital solutions tailored for startups,
            enterprises, and growing businesses. Our team delivers scalable,
            secure, and high-performing technology solutions that help you stay
            ahead in the competitive market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`relative p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-xl shadow-lg border border-slate-700/50 
                transition-all duration-500 ease-out overflow-hidden group
                ${hoveredCard === service.id ? 'scale-105 -translate-y-2 shadow-xl shadow-blue-500/10' : 'hover:-translate-y-1'}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Animated border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Short description */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {service.short}
                </p>
                
                {/* Details list with staggered animation */}
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li 
                      key={i}
                      className="text-slate-400 text-xs flex items-start transition-all duration-300 group-hover:text-slate-300"
                      style={{ 
                        transform: hoveredCard === service.id ? 'translateX(5px)' : 'translateX(0)',
                        transitionDelay: hoveredCard === service.id ? `${i * 100}ms` : '0ms'
                      }}
                    >
                      <span className="text-blue-400 mr-2">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-8 bg-slate-800/30 rounded-2xl border border-slate-700/50">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-slate-300 uppercase text-sm tracking-wider">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-slate-300 uppercase text-sm tracking-wider">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-slate-300 uppercase text-sm tracking-wider">Years Experience</div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 space-y-12">
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <h3 className="text-3xl font-bold mb-6 pl-4">Why Choose Us?</h3>
            <p className="text-slate-300 leading-relaxed pl-4 border-l border-slate-700">
              Our mission is not only to deliver technology but also to create
              long-term partnerships with our clients. We focus on scalability,
              security, and performance while maintaining cost-effectiveness. We
              pride ourselves on clear communication, transparent processes, and
              delivering measurable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                "Fast delivery with agile methodology",
                "Affordable pricing packages",
                "Expert developers & designers",
                "Cutting-edge technology stack",
                "Transparent communication & reporting"
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <span className="text-blue-400 mr-3 text-lg">✓</span>
                  <span className="text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h3 className="text-3xl font-bold mb-6 pl-4">Industries We Serve</h3>
            <p className="text-slate-300 leading-relaxed mb-6 pl-4 border-l border-slate-700">
              We have successfully delivered projects across multiple industries
              including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-4">
              {[
                "Healthcare & Telemedicine",
                "E-commerce & Retail",
                "Education & E-learning",
                "FinTech & Banking",
                "Travel & Hospitality",
                "Media & Entertainment"
              ].map((industry, index) => (
                <div 
                  key={index}
                  className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-slate-300">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
