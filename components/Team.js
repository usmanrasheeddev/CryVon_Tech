export default function Team() {
  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Leadership & Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box text-center">
            <div className="avatar-placeholder w-16 h-16 mx-auto rounded-full mb-3">AM</div>
            <h3 className="font-semibold">Asim Mughal</h3>
            <p className="text-xs text-slate-400">CEO</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box text-center">
            <div className="avatar-placeholder w-16 h-16 mx-auto rounded-full mb-3">UR</div>
            <h3 className="font-semibold">Usman Rasheed</h3>
            <p className="text-xs text-slate-400">HR</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl hover-box text-center">
            <div className="avatar-placeholder w-16 h-16 mx-auto rounded-full mb-3">FA</div>
            <h3 className="font-semibold">Faizan Ahmad</h3>
            <p className="text-xs text-slate-400">HR</p>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-400">20+ skilled engineers, designers, and specialists.</div>
      </div>
    </section>
  );
}
