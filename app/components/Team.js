// app/components/Team.js
export default function Team() {
  const leaders = [
    {initials:'AM', name:'Asim Mughal', role:'CEO'},
    {initials:'UR', name:'Usman Rasheed', role:'HR'},
    {initials:'FA', name:'Faizan Ahmad', role:'HR'}
  ];
  const extras = ['Sofia','Bilal','Ayesha','Omar','Zain','Nida','Hamza','Maya'];
  const roles = ['Frontend','Backend','Mobile','Data','QA','DevOps','Design','Product'];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Leadership & Team</h2>
            <p className="text-slate-400">A senior leadership team supported by 20+ engineers and specialists.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {leaders.map(l => (
            <div key={l.name} className="p-4 bg-slate-800/40 rounded-lg text-center">
              <div className="w-20 h-20 mx-auto rounded-full avatar-placeholder">{l.initials}</div>
              <div className="mt-3 font-semibold">{l.name}</div>
              <div className="text-xs text-slate-400">{l.role}</div>
            </div>
          ))}

          {extras.map((name, i) => (
            <div key={name} className="p-4 bg-slate-800/30 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto rounded-full avatar-placeholder">E</div>
              <div className="mt-3 font-medium text-sm">{name}</div>
              <div className="text-xs text-slate-400">{roles[i % roles.length]}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-400">We maintain cross-functional squads: frontend, backend, data, mobile, QA, product & design, security, DevOps.</div>
      </div>
    </section>
  );
}
