export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="CryVon Tech Logo" className="w-9 h-9 rounded-md object-cover"/>
            <div>
              <div className="text-xl font-extrabold tracking-tight">CryVon Tech</div>
              <div className="text-xs text-teal-400 font-medium -mt-1">Innovating Beyond Limits</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services">Services</a>
            <a href="#tech">Tech</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a className="hidden md:inline-block px-4 py-2 border border-slate-700 rounded-md text-sm hover-box" href="#projects">View Work</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 rounded-md text-sm font-medium btn-hover" href="#contact">Get a Quote</a>
          </div>
        </div>
      </div>
    </header>
  );
}
