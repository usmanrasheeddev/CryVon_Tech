"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";


export function Team() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  
  const teamData = {
    leadership: [
      {
        id: 1,
        name: "Asim Mughal",
        role: "CEO & Founder",
        image: "/team/asim.jpg",
        bio: "Visionary leader with over 10 years of experience in the tech industry. Founded CryVon-Tech with a mission to deliver cutting-edge solutions.",
        skills: ["Strategic Planning", "Business Development", "Tech Innovation"],
        social: { linkedin: "https://www.linkedin.com/in/asim-mughal-b69247299/", twitter: "#" }
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
        social: { linkedin:"https://www.linkedin.com/in/usman-rasheed-3a7158364", 
          twitter: "#",
        github:"https://github.com/usmanrasheeddev" }
      },
      {
        id: 3,
        name: "Faizan Ahmad",
        role: "HR Specialist",
        image: "/team/faizan1.jpg",
        bio: "Ensures smooth operations and employee satisfaction, focusing on creating a productive work environment.",
        skills: ["HR Operations", "Employee Relations", "Performance Management"],
       social: { 
          linkedin: "#", 
          twitter: "https://twitter.com/username" 
      }

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
        social: { linkedin: "https://www.linkedin.com/in/ibrahim-yousaf-139200332/", github: "#" }
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
            Meet the passionate professionals who make CryVon Tech a leading technology solutions provider.
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
  <a
    href={member.social.linkedin !== "#" ? member.social.linkedin : "#"}
    target={member.social.linkedin !== "#" ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`text-slate-400 hover:text-blue-400 transition-colors duration-300 ${member.social.linkedin === "#" ? "cursor-not-allowed opacity-50" : ""}`}
  >
    <FaLinkedin className="w-5 h-5" />
  </a>

  <a
    href={member.social.twitter !== "#" ? member.social.twitter : "#"}
    target={member.social.twitter !== "#" ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`text-slate-400 hover:text-blue-400 transition-colors duration-300 ${member.social.twitter === "#" ? "cursor-not-allowed opacity-50" : ""}`}
  >
    <FaTwitter className="w-5 h-5" />
  </a>

  <a
    href={member.social.github !== "#" ? member.social.github : "#"}
    target={member.social.github !== "#" ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`text-slate-400 hover:text-blue-400 transition-colors duration-300 ${member.social.github === "#" ? "cursor-not-allowed opacity-50" : ""}`}
  >
    <FaGithub className="w-5 h-5" />
  </a>
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
          <Link href="/careers">
  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium">
    View Open Positions
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}