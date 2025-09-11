"use client";

import StatsCounter from "./StatsCounter";

export default function Hero() {
  return (
    <section className="bg-slate-800 text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to <span className="text-yellow-400">CryVon Tech</span>
      </h1>
      <p className="text-lg text-slate-300 mb-8">
        We build modern, scalable, and reliable digital solutions.
      </p>

      {/* Stats Section */}
      <div className="flex justify-center gap-12 mt-10">
        <div>
          <StatsCounter max={120} />
          <p className="text-slate-400">Projects Completed</p>
        </div>
        <div>
          <StatsCounter max={50} />
          <p className="text-slate-400">Happy Clients</p>
        </div>
        <div>
          <StatsCounter max={15} />
          <p className="text-slate-400">Team Members</p>
        </div>
      </div>
    </section>
  );
}
