// app/components/Header.js
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-800/60 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
           <Image
  src="/logo.png"
  alt="Edge Rise Logo"
  width={36}   // 👈 w-9 = 36px
  height={36}  // 👈 h-9 = 36px
  className="rounded-md object-cover"
/>

            <div>
              <div className="text-xl font-extrabold tracking-tight">Edge Rise</div>
              <div className="text-xs text-slate-400 -mt-1">Software House • 20+ Engineers</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <Link href="/services">Services</Link>
            <Link href="/tech">Tech</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/team">Team</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/projects" className="hidden md:inline-block px-4 py-2 border border-slate-700 rounded-md text-sm hover:bg-slate-800">View Work</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-sm font-medium">Get a Quote</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
