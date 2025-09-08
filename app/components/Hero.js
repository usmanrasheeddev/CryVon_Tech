"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-slate-900 text-slate-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Edge Rise Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h1 className="font-bold text-lg">
                <span className="text-amber-400">Edge</span>{" "}
                <span className="text-sky-400">Rise</span>
              </h1>
              <p className="text-xs text-slate-400">Software House • 20+ Engineers</p>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-amber-400 transition">Services</Link>
            <Link href="#tech" className="hover:text-amber-400 transition">Tech</Link>
            <Link href="#projects" className="hover:text-amber-400 transition">Projects</Link>
            <Link href="#team" className="hover:text-amber-400 transition">Team</Link>
            <Link href="#careers" className="hover:text-amber-400 transition">Careers</Link>
            <Link href="#contact" className="hover:text-amber-400 transition">Contact</Link>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#projects"
              className="px-4 py-2 rounded-lg border border-slate-700 hover:border-amber-400 transition"
            >
              View Work
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white transition shadow-md"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="text-amber-400">Edge</span>{" "}
            <span className="text-sky-400">Rise</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            We build modern, scalable, and reliable digital solutions for businesses worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-amber-400">120+</h3>
              <p className="text-slate-300 mt-2">Projects Completed</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-teal-400">50+</h3>
              <p className="text-slate-300 mt-2">Happy Clients</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-sky-400">15+</h3>
              <p className="text-slate-300 mt-2">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attach Sections (Already Built) */}
      <section id="services" />
      <section id="tech" />
      <section id="projects" />
      <section id="team" />
      <section id="careers" />
      <section id="contact" />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        <p>© 2025 Edge Rise. All rights reserved.</p>
        <p className="mt-1">
          CEO: Asim Mughal | HR: Usman Rasheed, Faizan Ahmad | 20+ Employees
        </p>
      </footer>
    </main>
  );
}
