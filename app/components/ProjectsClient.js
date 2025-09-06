// app/components/ProjectsClient.js
"use client";
import { useState } from "react";

const SAMPLE_PROJECTS = [
  { id:1, name:'FinTech Platform', tech:['React','Node.js'], domain:'Finance', desc:'B2B payments, reconciliation, and analytics.' },
  { id:2, name:'Health Mobile App', tech:['React Native','Python'], domain:'Health', desc:'Telemedicine & scheduling system.' },
  { id:3, name:'Data Pipeline', tech:['Python','Kubernetes'], domain:'Data', desc:'ETL + feature store for ML.' },
  { id:4, name:'E-commerce SaaS', tech:['Next.js','Go'], domain:'Retail', desc:'Multi-tenant storefront & admin.' },
  { id:5, name:'AI Assistant', tech:['PyTorch','FastAPI'], domain:'AI', desc:'Conversational assistant & knowledge retrieval.' },
  { id:6, name:'Logistics Dashboard', tech:['React','D3'], domain:'Logistics', desc:'Real-time tracking & optimization.' }
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState('All');
  const domains = ['All', ...Array.from(new Set(SAMPLE_PROJECTS.map(p=>p.domain)))];
  const filtered = SAMPLE_PROJECTS.filter(p => filter === 'All' ? true : p.domain === filter);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-800/40 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Project gallery</h3>
            <p className="text-sm text-slate-400 mt-1">Representative samples from multiple domains.</p>
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-xs text-slate-400">Filter</label>
            <select className="ml-2 bg-slate-900/40 rounded-md px-3 py-2 text-sm" value={filter} onChange={e => setFilter(e.target.value)}>
              {domains.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(p => (
            <article key={p.id} className="p-4 bg-slate-900/60 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm text-slate-400 mt-1">{p.desc}</p>
                  <div className="mt-3 text-xs text-slate-300 flex gap-2 flex-wrap">
                    {p.tech.map(t => <span key={t} className="px-2 py-1 bg-slate-800/30 rounded">{t}</span>)}
                  </div>
                </div>
                <div className="text-xs text-slate-500">{p.domain}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
