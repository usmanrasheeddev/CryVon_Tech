"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Edge Rise
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rising Beyond Limits in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Tech Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Edge Rise helps businesses grow with modern scalable and affordable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-lg font-medium">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 font-medium">
                View Our Projects
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">120+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-slate-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Introduction Section */}
      <section id="ceo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Leadership Team
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                CEO & Founder
              </div>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Asim Mughal</h3>
              <p className="text-slate-300 mb-4">
                Visionary leader with over 10 years of experience in the tech industry. Asim founded Edge Rise with a mission to deliver cutting-edge solutions that help businesses thrive in the digital age.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Strategic Planning</span>
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Tech Innovation</span>
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Business Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Team Section */}
      <section id="hr-team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Human Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HR 1 */}
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:scale-105 transition-transform duration-500">
                  👨‍💻
                </div>
                <h3 className="text-xl font-bold mb-2">Usman Rasheed</h3>
                <p className="text-slate-400 mb-4">HR Manager & Talent Acquisition</p>
                <p className="text-slate-300 mb-4">
                  Usman specializes in building high-performing teams and creating a culture of innovation and excellence.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Talent Management</span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Team Building</span>
                </div>
              </div>
            </div>
            
            {/* HR 2 */}
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:scale-105 transition-transform duration-500">
                  👨‍💼
                </div>
                <h3 className="text-xl font-bold mb-2">Faizan Ahmad</h3>
                <p className="text-slate-400 mb-4">HR Specialist & Operations</p>
                <p className="text-slate-300 mb-4">
                  Faizan ensures smooth operations and employee satisfaction focusing on creating a productive work environment.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Operations</span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">Employee Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section id="team" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Talented Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            We have a diverse team of experts dedicated to delivering exceptional results for our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">👨‍💻</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-slate-300">Developers</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <div className="text-2xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300">Designers</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-2xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-slate-300">Data Analysts</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <div className="text-2xl font-bold text-amber-400 mb-2">4+</div>
              <div className="text-slate-300">DevOps Engineers</div>
            </div>
          </div>
          
          <Link href="/team">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-lg font-medium">
              Meet Our Full Team
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-slate-700/50 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Lets discuss how we can bring your ideas to life with our expertise and innovative solutions.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow hover:shadow-lg font-medium">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Edge Rise
          </span>
          <p className="text-slate-400 mt-4">Rising Beyond Limits in Tech Solutions</p>
          <p className="text-slate-500 text-sm mt-8">© {new Date().getFullYear()} Edge Rise. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}