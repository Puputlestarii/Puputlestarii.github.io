import React from 'react';
import { profileData } from '../data/profile';

export default function Skills() {
  const { skills } = profileData;

  return (
    <section id="skills" className="py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Keahlian Teknis</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Kombinasi kemampuan pengembangan perangkat lunak dan analisis sistem untuk membangun solusi yang tepat guna.
          </p>
        </div>

        {/* Grid Kartu Keahlian (Semua Seragam Warna Pink Soft & Putih) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex p-2 bg-rose-100 text-rose-600 rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 text-sm font-medium rounded-xl bg-rose-50/80 text-rose-800 border border-rose-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}