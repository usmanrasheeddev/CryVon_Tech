"use client";

import { useState } from "react";

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      category: "development",
      type: "Full-time",
      location: "Lahore, Pakistan",
      experience: "3-5 years",
      description: "We're looking for an experienced React developer to join our frontend team and help build innovative web applications.",
      requirements: [
        "Strong experience with React.js and Next.js",
        "Proficiency in JavaScript/TypeScript",
        "Experience with state management (Redux/Zustand)",
        "Knowledge of modern CSS frameworks (Tailwind CSS)"
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      description: "Join our design team to create beautiful, user-friendly interfaces for web and mobile applications.",
      requirements: [
        "Portfolio demonstrating UI/UX design skills",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Understanding of user-centered design principles",
        "Experience with design systems"
      ],
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"]
    },
    {
      id: 3,
      title: "Backend Developer (Node.js)",
      category: "development",
      type: "Full-time",
      location: "Lahore, Pakistan",
      experience: "2-4 years",
      description: "Help us build scalable backend services and APIs for our client projects.",
      requirements: [
        "Experience with Node.js and Express.js",
        "Database knowledge (MongoDB, PostgreSQL)",
        "API design and development",
        "Understanding of authentication methods"
      ],
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      category: "devops",
      type: "Full-time",
      location: "Remote",
      experience: "3-5 years",
      description: "Manage our infrastructure and deployment processes for various projects.",
      requirements: [
        "Experience with AWS/Azure/GCP",
        "Docker and Kubernetes knowledge",
        "CI/CD pipeline setup",
        "Infrastructure as Code (Terraform)"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      category: "marketing",
      type: "Full-time",
      location: "Lahore, Pakistan",
      experience: "2-3 years",
      description: "Develop and execute digital marketing strategies to help our clients grow.",
      requirements: [
        "Experience with SEO and SEM",
        "Social media marketing skills",
        "Content strategy development",
        "Analytics and reporting"
      ],
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"]
    }
  ];

  const categories = [
    { id: "all", name: "All Positions" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "devops", name: "DevOps" },
    { id: "marketing", name: "Marketing" }
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages."
    },
    {
      icon: "🏠",
      title: "Flexible Work",
      description: "Remote work options and flexible hours for better work-life balance."
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and skill development."
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family."
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career paths and opportunities for advancement."
    },
    {
      icon: "🍕",
      title: "Team Events",
      description: "Team building activities and company events."
    }
  ];

  const filteredJobs = activeCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  return (
    <section id="careers" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-amber-400">Team</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Work with talented people on exciting projects and grow your career in a supportive environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-slate-300 text-sm">Team Members</div>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">5+</div>
            <div className="text-slate-300 text-sm">Open Positions</div>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-slate-300 text-sm">Employee Satisfaction</div>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-slate-300 text-sm">Projects Monthly</div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With <span className="text-amber-400">Us</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Current <span className="text-amber-400">Openings</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Explore our available positions and find where you can make an impact.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <a 
                      href={`mailto:usmanrasheed.dev@gmail.com?subject=Application for ${job.title}`}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 inline-block font-medium transform hover:-translate-y-1 shadow hover:shadow-lg"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No current openings</h3>
              <p className="text-slate-300 mb-6">We dont have any positions in this category right now, but check back later!</p>
              <a 
                href="mailto:usmanrasheed.dev@gmail.com"
                className="px-6 py-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300 inline-block font-medium border border-slate-700/50"
              >
                Send General Application
              </a>
            </div>
          )}
        </div>

        {/* Application Process */}
        <div className="mt-20 bg-slate-800/30 p-8 rounded-2xl border border-slate-700/30">
          <h2 className="text-3xl font-bold text-center mb-12">Application <span className="text-amber-400">Process</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Apply</h3>
              <p className="text-slate-300 text-sm">Submit your application through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Screening</h3>
              <p className="text-slate-300 text-sm">Initial phone screening with HR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Interview</h3>
              <p className="text-slate-300 text-sm">Technical and cultural interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Offer</h3>
              <p className="text-slate-300 text-sm">Receive and celebrate your offer!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your <span className="text-amber-400">Journey</span>?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Even if you dont see the perfect role, we did love to hear from you. Send us your resume and tell us how you can contribute.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="usmanrasheed.dev@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium"
            >
              Send General Application
            </a>
            <a 
              href="/contact"
              className="px-8 py-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 font-medium border border-slate-700/50"
            >
              Contact HR Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}