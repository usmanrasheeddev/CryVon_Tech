
"use client";


export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! (This is a demo — backend not yet connected.)");
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-300 mb-4">Drop us a line for projects or consulting.</p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>Email: <a href="mailto:hello@edge-rise.example" className="text-teal-400">hello@edge-rise.example</a></div>
            <div>HR: <a href="mailto:hr@edge-rise.example" className="text-teal-400">hr@edge-rise.example</a></div>
            <div>Phone: +92-000-1234567</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"/>
          <textarea rows="4" placeholder="Your Message" className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"></textarea>
          <button type="submit" className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 rounded-md font-semibold btn-hover">Send Message</button>
        </form>
      </div>
    </section>
  );
}
