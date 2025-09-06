export default function Services() {
  return (
    <section id="services" className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-xl font-semibold mb-2">Web & Mobile Development</h3>
            <p className="text-slate-300 text-sm">Enterprise-grade web portals and native/hybrid mobile apps.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-xl font-semibold mb-2">AI & Data Science</h3>
            <p className="text-slate-300 text-sm">ML models, recommendation systems, NLP solutions.</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box">
            <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-slate-300 text-sm">Kubernetes, CI/CD, AWS/GCP.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
