"use client";

import { useState } from 'react';
import Image from 'next/image';

export function Team() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  
  const teamData = {
    leadership: [
      {
        id: 1,
        name: "Asim Mughal",
        role: "CEO & Founder",
        image: "/team/asim.jpg",
        bio: "Visionary leader with over 10 years of experience in the tech industry. Founded Edge Rise with a mission to deliver cutting-edge solutions.",
        skills: ["Strategic Planning", "Business Development", "Tech Innovation"],
        social: { linkedin: "#", twitter: "#" }
      }
    ],
    hr: [
      {
        id: 2,
        name: "Usman Rasheed",
        role: "HR Manager",
        image: "/team/usman1.jpg",
        bio: "Specializes in building high-performing teams and creating a culture of innovation and excellence.",
        skills: ["Talent Management", "Team Building", "Employee Engagement"],
        social: { linkedin: "#", twitter: "#" }
      },
      {
        id: 3,
        name: "Faizan Ahmad",
        role: "HR Specialist",
        image: "/team/faizan1.jpg",
        bio: "Ensures smooth operations and employee satisfaction, focusing on creating a productive work environment.",
        skills: ["HR Operations", "Employee Relations", "Performance Management"],
        social: { linkedin: "#", twitter: "#" }
      }
    ],
    development: [
      {
        id: 4,
        name: "Ibrahim Yousaf",
        role: "Senior Frontend Developer",
        image: "/team/ib.jpg",
        bio: "Specialized in building complex React applications with modern state management and responsive designs.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        social: { linkedin: "#", github: "#" }
      },
      {
        id: 5,
        name: "Muhammad Usman",
        role: "UI/UX Designer",
        image: "/team/musman.jpg",
        bio: "Creates intuitive user interfaces with a focus on accessibility, performance, and beautiful animations.",
        skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
        social: { linkedin: "#", dribbble: "#" }
      },
      {
        id: 6,
        name: "Bilal Siddiqui",
        role: "Frontend Architect",
        image: "/team/bilal-siddiqui.jpg",
        bio: "Expert in building scalable frontend architectures and optimizing web performance for large applications.",
        skills: ["Vue.js", "Nuxt.js", "GraphQL", "Performance Optimization"],
        social: { linkedin: "#", github: "#" }
      },
      {
        id: 7,
        name: "Ayesha Malik",
        role: "Backend Developer",
        image: "/team/ayesha-malik.jpg",
        bio: "Specializes in building robust and scalable server-side applications with modern technologies.",
        skills: ["Node.js", "Python", "PostgreSQL", "API Design"],
        social: { linkedin: "#", github: "#" }
      },
      {
        id: 8,
        name: "Omar Hassan",
        role: "Full Stack Developer",
        image: "/team/omar-hassan.jpg",
        bio: "Experienced in developing end-to-end web applications with focus on performance and user experience.",
        skills: ["MERN Stack", "AWS", "DevOps", "Testing"],
        social: { linkedin: "#", github: "#" }
      }
    ],
    design: [
      {
        id: 9,
        name: "Zainab Hussain",
        role: "Senior UI Designer",
        image: "/team/zainab-hussain.jpg",
        bio: "Creates visually stunning interfaces that enhance user experience and align with brand identity.",
        skills: ["UI Design", "Design Systems", "Illustration", "Animation"],
        social: { linkedin: "#", behance: "#" }
      },
      {
        id: 10,
        name: "Yusuf Abdullah",
        role: "Product Designer",
        image: "/team/yusuf-abdullah.jpg",
        bio: "Focuses on user-centered design principles to create products that solve real problems.",
        skills: ["Product Strategy", "User Research", "Wireframing", "Usability Testing"],
        social: { linkedin: "#", dribbble: "#" }
      }
    ],
    marketing: [
      {
        id: 11,
        name: "Sara Ibrahim",
        role: "Digital Marketing Manager",
        image: "/team/sara-ibrahim.jpg",
        bio: "Develops and executes comprehensive digital marketing strategies to drive growth and engagement.",
        skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
        social: { linkedin: "#", twitter: "#" }
      },
      {
        id: 12,
        name: "Hamza Farooq",
        role: "Content Strategist",
        image: "/team/hamza-farooq.jpg",
        bio: "Creates compelling content that resonates with target audiences and supports business objectives.",
        skills: ["Content Writing", "SEO", "Copywriting", "Strategy"],
        social: { linkedin: "#", medium: "#" }
      }
    ]
  };

  const departments = [
    { id: 'all', name: 'All Team' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'hr', name: 'Human Resources' }
  ];

  const allTeamMembers = [
    ...teamData.leadership,
    ...teamData.hr,
    ...teamData.development,
    ...teamData.design,
    ...teamData.marketing
  ];

  const filteredMembers = activeDepartment === 'all' 
    ? allTeamMembers 
    : teamData[activeDepartment];

  return (
    <section className="min-h-screen py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-blue-400">Talented</span> Team
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet the passionate professionals who make Edge Rise a leading technology solutions provider.
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
            <div className="text-slate-300 text-sm">Years Experience</div>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">120+</div>
            <div className="text-slate-300 text-sm">Projects Delivered</div>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-slate-300 text-sm">Technologies</div>
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeDepartment === dept.id
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div 
              key={member.id}
              className="bg-slate-800/30 rounded-xl border border-slate-700/30 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
             {/* Image */}
<div className="h-60 relative overflow-hidden">
  <Image
    src={member.image}      // 👈 yahan tumhare teamData se image aayegi (e.g. "/team/asim.jpg")
    alt={member.name}
    width={400}             // 👈 image ka size control karne ke liye
    height={400}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
</div>

              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <button className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10 10 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-slate-800/30 p-12 rounded-3xl border border-slate-700/30">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            We are always looking for talented individuals to join our growing team. Check out our open positions and become part of our success story.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}