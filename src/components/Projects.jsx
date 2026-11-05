import React from 'react';
import { profileData } from '../data/profile';

export default function Projects() {
  const project = profileData.projects[0];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyek Utama</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Kartu Studi Kasus Proyek */}
        <div className="max-w-4xl mx-auto bg-rose-50/20 rounded-3xl border border-rose-100 overflow-hidden shadow-sm">
          <div className="p-8 md:p-12">
            
            {/* Header Proyek */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 bg-rose-100 text-rose-700 text-sm font-bold rounded-full w-fit">
                {project.year}
              </span>
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="text-sm text-slate-500 font-medium">
                    {tech}{idx < project.stack.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
              {project.title}
            </h3>

            {/* Konten Studi Kasus */}
            <div className="space-y-8 text-slate-700">
              
              {/* Masalah */}
              <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Masalah yang Diselesaikan
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                  Pengelolaan Bank Sampah di Kemantren Tegalrejo masih menggunakan pencatatan manual yang rentan hilang, data tidak terpusat, dan sulitnya memonitor penimbangan serta saldo nasabah secara *real-time*.
                </p>
              </div>
              
              {/* Solusi & Teknologi */}
              <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Solusi & Implementasi Sistem
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-slate-600 text-justify">
                  Merancang dan membangun aplikasi web terpadu menggunakan <strong>CodeIgniter 4</strong> dan <strong>MySQL</strong>. Sistem ini mengintegrasikan <strong>Location Based Service (LBS)</strong> untuk memetakan penjemputan sampah, serta mendigitalisasi keseluruhan alur kerja dari penimbangan hingga pelaporan.
                </p>
              </div>

              {/* Hak Akses & Peran */}
              <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-lg">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  Hak Akses & Peran Pengguna (Role-Based Access)
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Sistem dirancang dengan keamanan hak akses berbasis peran untuk 5 entitas pengguna yang berbeda:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <li className="flex items-center gap-2 bg-rose-50/50 px-4 py-2.5 border border-rose-100 rounded-xl font-medium text-slate-700">1. Admin</li>
                  <li className="flex items-center gap-2 bg-rose-50/50 px-4 py-2.5 border border-rose-100 rounded-xl font-medium text-slate-700">2. Operator Bank Sampah</li>
                  <li className="flex items-center gap-2 bg-rose-50/50 px-4 py-2.5 border border-rose-100 rounded-xl font-medium text-slate-700">3. Operator Kelurahan</li>
                  <li className="flex items-center gap-2 bg-rose-50/50 px-4 py-2.5 border border-rose-100 rounded-xl font-medium text-slate-700">4. Kepala Kemantren</li>
                  <li className="flex items-center gap-2 bg-rose-50/50 px-4 py-2.5 border border-rose-100 rounded-xl font-medium text-slate-700 col-span-1 sm:col-span-2 md:col-span-1">5. Nasabah</li>
                </ul>
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}