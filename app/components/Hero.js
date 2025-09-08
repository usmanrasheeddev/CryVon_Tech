"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">
                <span className="text-blue-400">Edge</span>
                <span className="text-amber-400">Rise</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</a>
                <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Projects</a>
                <a href="#team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Team</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</a>
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
              Rising Beyond Limits in <span className="text-blue-400">Tech</span> <span className="text-amber-400">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Edge Rise helps businesses grow with modern, scalable and affordable technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/projects">
                <button className="px-8 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 font-medium border border-slate-600 hover:border-slate-500">
                  View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">120+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-green-500/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Team Members</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Years Experience</div>
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
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-slate-800/20 p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500">
            <div className="relative">
              <div className="w-64 h-64 bg-slate-700/50 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-600/50">
                <div className="text-6xl">👨‍💼</div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                CEO & Founder
              </div>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Asim Mughal</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Visionary leader with over 10 years of experience in the tech industry. Asim founded Edge Rise with a mission to deliver cutting-edge solutions that help businesses thrive in the digital age. His expertise spans across software architecture, business strategy, and team leadership.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Strategic Planning</span>
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Tech Innovation</span>
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Business Development</span>
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
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 group hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 bg-slate-700/50 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-500/30 transition-colors duration-500 mb-6">
                  <div className="text-5xl">👨‍💻</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Usman Rasheed</h3>
                <p className="text-slate-400 mb-4">HR Manager & Talent Acquisition</p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Usman specializes in building high-performing teams and creating a culture of innovation and excellence. With 7+ years in tech recruitment, he ensures we have the best talent to deliver exceptional results.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Talent Management</span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Team Building</span>
                </div>
              </div>
            </div>
            
            {/* HR 2 */}
            <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-500 group hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 bg-slate-700/50 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-600/50 group-hover:border-amber-500/30 transition-colors duration-500 mb-6">
                  <div className="text-5xl">👨‍💼</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Faizan Ahmad</h3>
                <p className="text-slate-400 mb-4">HR Specialist & Operations</p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Faizan ensures smooth operations and employee satisfaction, focusing on creating a productive work environment. His expertise in HR operations helps maintain our company's culture and efficiency.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Operations</span>
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">Employee Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section id="team" className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Talented Team</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We have a diverse team of experts dedicated to delivering exceptional results for our clients across various technologies and domains.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">👨‍💻</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Developers</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🎨</div>
              <div className="text-2xl font-bold text-amber-400 mb-2">5+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Designers</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-2xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Data Analysts</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <div className="text-2xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">DevOps Engineers</div>
            </div>
          </div>
          
          <Link href="/team">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium">
              Meet Our Full Team
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-800/30 p-12 rounded-3xl border border-slate-700/30 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Lets discuss how we can bring your ideas to life with our expertise and innovative solutions. Contact us today for a free consultation.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg font-medium">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-2xl font-bold">
            <span className="text-blue-400">Edge</span>
            <span className="text-amber-400">Rise</span>
          </span>
          <p className="text-slate-400 mt-4">Rising Beyond Limits in Tech Solutions</p>
          <p className="text-slate-500 text-sm mt-8">© {new Date().getFullYear()} Edge Rise. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}