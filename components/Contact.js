"use client";

import { useState } from "react"; // Yeh line add karo

export default function Contact() {
  const [isSending, setIsSending] = useState(false); // Yeh line add karo

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true); // Loading start 

    // Form data collect 
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // API call 
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset(); // Form clear 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false); // Loading stop 
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-300 mb-4">Drop us a line for projects or consulting.</p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>Email: <a href="mailto:usmanrasheed.dev@gmail.com" className="text-teal-400">usmanrasheed.dev@gmail.com</a></div>
            <div>HR: <a href="mailto:usmanrasheed.dev@gmail.com" className="text-teal-400">usmanrasheed.dev@gmail.com</a></div>
            <div>Phone: +92-304-499-3095</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="name" // Yeh add 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"
            required 
          />
          <input 
            name="email" // Yeh add 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"
            required 
          />
          <textarea 
            name="message" // Yeh add 
            rows="4" 
            placeholder="Your Message" 
            className="w-full p-3 rounded-md bg-slate-800/50 border border-slate-700 text-sm"
            required 
          ></textarea>
          <button 
            type="submit" 
            disabled={isSending} // Loading state
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 rounded-md font-semibold btn-hover disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"} {/* Loading text */}
          </button>
        </form>
      </div>
    </section>
  );
}