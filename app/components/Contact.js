// app/components/Contact.js
"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = e => { e.preventDefault(); alert(`Message sent: ${form.name}`); setForm({name:'',email:'',message:''}); };

  return (
    <section className="py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Contact & Sales</h2>
          <p className="text-slate-400 mt-2">For partnerships, hiring or quotes — reach us.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div><span className="text-slate-400">Email:</span> hello@edge-rise.example</div>
            <div><span className="text-slate-400">Phone:</span> +92-XXX-XXXXXXX</div>
            <div><span className="text-slate-400">Location:</span> Lahore, Pakistan</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/40 p-6 rounded-lg glass">
          <label className="block text-sm text-slate-300">Your name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md bg-slate-900/50 border border-slate-700 px-3 py-2 text-sm" placeholder="Full name" />
          <label className="block text-sm text-slate-300 mt-4">Email</label>
          <input name="email" value={form.email} onChange={handleChange} required type="email" className="mt-1 w-full rounded-md bg-slate-900/50 border border-slate-700 px-3 py-2 text-sm" placeholder="name@company.com" />
          <label className="block text-sm text-slate-300 mt-4">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-md bg-slate-900/50 border border-slate-700 px-3 py-2 text-sm" rows="4" placeholder="Brief about your project..." />
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 bg-teal-500 rounded-md text-slate-900 font-medium">Send message</button>
            <div className="text-xs text-slate-400">We reply within 48 hours (business days)</div>
          </div>
        </form>
      </div>
    </section>
  );
}
