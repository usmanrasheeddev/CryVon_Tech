export default function Tech() {
  const items = ['React','Next.js','Node.js','Express','Django','Flask','MongoDB','MySQL','Postgres','AWS','GCP','Docker','Kubernetes'];
  return (
    <section id="tech" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {items.map(i => <span key={i} className="px-4 py-2 bg-slate-800/60 rounded-md text-sm hover-box">{i}</span>)}
        </div>
      </div>
    </section>
  );
}
