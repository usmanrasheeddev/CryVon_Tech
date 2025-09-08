export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Highlighted Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-lg font-semibold">FinTech Platform</h3>
            <p className="text-slate-300 text-sm mt-2">Handles 50k+ users with secure payments and analytics.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-lg font-semibold">Healthcare AI</h3>
            <p className="text-slate-300 text-sm mt-2">ML models to predict health risks.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-lg font-semibold">E-Commerce Suite</h3>
            <p className="text-slate-300 text-sm mt-2">Marketplace with inventory, payments, vendor dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
