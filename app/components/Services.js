export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Professional Services
        </h2>
        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-16">
          We provide end-to-end digital solutions tailored for startups,
          enterprises, and growing businesses. Our team delivers scalable,
          secure, and high-performing technology solutions that help you stay
          ahead in the competitive market.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Web & Mobile */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">
              Web & Mobile Development
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Full-stack applications, enterprise-grade portals, responsive
              websites, native & hybrid mobile apps.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>Custom SaaS platforms</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>Cross-platform mobile apps</li>
            </ul>
          </div>

          {/* AI & Data Science */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">AI & Data Science</h3>
            <p className="text-slate-400 text-sm mb-4">
              From data engineering to AI-powered solutions, we make your data
              work smarter for your business.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>Predictive analytics</li>
              <li>Recommendation systems</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm mb-4">
              Deploy faster, scale smarter, and operate seamlessly with our
              modern cloud & DevOps expertise.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>CI/CD pipelines</li>
              <li>Kubernetes orchestration</li>
              <li>Cloud cost optimization</li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-slate-400 text-sm mb-4">
              Clean, modern, and user-centric designs that enhance brand value
              and customer satisfaction.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>Wireframing & Prototyping</li>
              <li>Mobile-first responsive design</li>
              <li>Interactive product mockups</li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-slate-400 text-sm mb-4">
              Protect your systems and customers with enterprise-level security
              solutions.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>Vulnerability assessments</li>
              <li>Penetration testing</li>
              <li>Zero-trust security</li>
            </ul>
          </div>

          {/* IT Consulting */}
          <div className="p-8 bg-slate-800/50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold mb-3">IT Consulting</h3>
            <p className="text-slate-400 text-sm mb-4">
              Strategic guidance to align your technology with business goals
              and scale sustainably.
            </p>
            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
              <li>Digital transformation</li>
              <li>System integration</li>
              <li>Agile process setup</li>
            </ul>
          </div>
        </div>

        {/* More content section */}
        <div className="mt-20 space-y-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-slate-300 leading-relaxed">
              Our mission is not only to deliver technology but also to create
              long-term partnerships with our clients. We focus on scalability,
              security, and performance while maintaining cost-effectiveness. We
              pride ourselves on clear communication, transparent processes, and
              delivering measurable results.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">Industries We Serve</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We have successfully delivered projects across multiple industries
              including:
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-400 list-disc list-inside">
              <li>Healthcare & Telemedicine</li>
              <li>E-commerce & Retail</li>
              <li>Education & E-learning</li>
              <li>FinTech & Banking</li>
              <li>Travel & Hospitality</li>
              <li>Media & Entertainment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
