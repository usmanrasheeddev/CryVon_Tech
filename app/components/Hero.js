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
              <Link href="/" className="text-2xl font-bold">
                <span className="text-blue-400">Edge</span>
                <span className="text-amber-400">Rise</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</Link>
                <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</Link>
                <Link href="/tech" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Tech Stack</Link>
                <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Projects</Link>
                <Link href="/team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Team</Link>
                <Link href="/career" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Career</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</Link>
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

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">We offer comprehensive digital solutions to help your business thrive in the digital age.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-4xl text-blue-400 mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-slate-300 mb-4">Professional websites with modern technologies and responsive designs.</p>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-4xl text-amber-400 mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
              <p className="text-slate-300 mb-4">Cross-platform mobile apps that engage users and deliver results.</p>
              <Link href="/services" className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-4xl text-purple-400 mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
              <p className="text-slate-300 mb-4">Leverage AI to automate processes and gain competitive advantage.</p>
              <Link href="/services" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <button className="px-6 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300 font-medium border border-slate-600 hover:border-slate-500">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Frontend Team Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frontend Experts</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Our frontend developers specialize in creating responsive, performant, and user-friendly interfaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 group text-center">
              <div className="w-32 h-32 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-500/30 transition-colors duration-500">
                <div className="text-4xl">👨‍💻</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahmed Khan</h3>
              <p className="text-blue-400 text-sm mb-3">Senior React Developer</p>
              <p className="text-slate-300 mb-4 text-sm">Specialized in building complex React applications with modern state management and responsive designs.</p>
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">React</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Next.js</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">TypeScript</span>
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-all duration-500 group text-center">
              <div className="w-32 h-32 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden border-4 border-slate-600/50 group-hover:border-amber-500/30 transition-colors duration-500">
                <div className="text-4xl">👩‍💻</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fatima Ali</h3>
              <p className="text-amber-400 text-sm mb-3">UI/UX Specialist</p>
              <p className="text-slate-300 mb-4 text-sm">Creates intuitive user interfaces with a focus on accessibility, performance, and beautiful animations.</p>
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Figma</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Tailwind</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Framer</span>
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 group text-center">
              <div className="w-32 h-32 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden border-4 border-slate-600/50 group-hover:border-purple-500/30 transition-colors duration-500">
                <div className="text-4xl">👨‍💻</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bilal Siddiqui</h3>
              <p className="text-purple-400 text-sm mb-3">Frontend Architect</p>
              <p className="text-slate-300 mb-4 text-sm">Expert in building scalable frontend architectures and optimizing web performance for large applications.</p>
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Vue.js</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">Nuxt.js</span>
                <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">GraphQL</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/team">
              <button className="px-6 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300 font-medium border border-slate-600 hover:border-slate-500">
                Meet Our Full Team
              </button>
            </Link>
          </div>
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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold">
                <span className="text-blue-400">Edge</span>
                <span className="text-amber-400">Rise</span>
              </span>
              <p className="text-slate-400 mt-4 text-sm">Rising Beyond Limits in Tech Solutions</p>
            </div>
            
            <div>
              <h3 className="text-slate-200 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Home</Link></li>
                <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Services</Link></li>
                <li><Link href="/projects" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Projects</Link></li>
                <li><Link href="/team" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-200 font-semibold mb-4">More</h3>
              <ul className="space-y-2">
                <li><Link href="/tech" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Tech Stack</Link></li>
                <li><Link href="/career" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Career</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-200 font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>info@edgerise.com</li>
                <li>+92 300 1234567</li>
                <li>Lahore, Pakistan</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/30 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Edge Rise. All rights reserved.</p>
          </div>
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