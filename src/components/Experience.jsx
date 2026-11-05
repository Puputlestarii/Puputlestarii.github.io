import React from 'react';
import { profileData } from '../data/profile';

export default function Experience() {
  const { experience } = profileData;

  return (
    <section id="experience" className="py-24 bg-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pengalaman Kerja</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 relative overflow-hidden transition-all hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-600"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-lg text-rose-600 font-semibold mt-1">{exp.company}</p>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full text-rose-700 text-sm font-medium whitespace-nowrap border border-rose-100">
                  <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-slate-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}