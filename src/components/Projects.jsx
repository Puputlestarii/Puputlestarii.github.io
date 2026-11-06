import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyek</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Kartu Proyek */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-rose-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-shadow duration-300">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-rose-50 text-rose-600 font-bold rounded-lg text-sm">
              2025
            </span>
            <div className="text-slate-500 text-sm font-medium">
              CodeIgniter 4 • MySQL • Location Based Service (LBS)
            </div>
          </div>

          {/* Judul Proyek */}
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
            Sistem Informasi Bank Sampah Berbasis Web (Gerakan MasJOS)
          </h3>

          {/* Detail Fitur & Informasi Proyek */}
          <div className="space-y-6">
            
            {/* Masalah */}
            <div className="border border-slate-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-3 text-rose-600 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Masalah yang Diselesaikan
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Pengelolaan Bank Sampah di Kemantren Tegalrejo masih menggunakan pencatatan manual yang rentan hilang, data tidak terpusat, dan sulitnya memonitor penimbangan serta saldo nasabah secara <em>real-time</em>.
              </p>
            </div>

            {/* Solusi */}
            <div className="border border-slate-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-3 text-emerald-600 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Solusi & Implementasi Sistem
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                Merancang dan membangun aplikasi web terpadu menggunakan <strong>CodeIgniter 4</strong> dan <strong>MySQL</strong>. Sistem ini mengintegrasikan <strong>Location Based Service (LBS)</strong> untuk memetakan penjemputan sampah, serta mendigitalisasi keseluruhan alur kerja dari penimbangan hingga pelaporan.
              </p>
            </div>

            {/* Hak Akses */}
            <div className="border border-slate-100 rounded-2xl p-6 bg-white">
              <div className="flex items-center gap-2 mb-4 text-rose-600 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                Hak Akses & Peran Pengguna (Role-Based Access)
              </div>
              <p className="text-slate-600 text-sm mb-4">Sistem dirancang dengan keamanan hak akses berbasis peran untuk 5 entitas pengguna yang berbeda:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-rose-50/40 border border-rose-50 rounded-lg p-3 text-sm text-slate-700">1. Admin</div>
                <div className="bg-rose-50/40 border border-rose-50 rounded-lg p-3 text-sm text-slate-700">2. Operator Bank Sampah</div>
                <div className="bg-rose-50/40 border border-rose-50 rounded-lg p-3 text-sm text-slate-700">3. Operator Kelurahan</div>
                <div className="bg-rose-50/40 border border-rose-50 rounded-lg p-3 text-sm text-slate-700">4. Kepala Kemantren</div>
                <div className="bg-rose-50/40 border border-rose-50 rounded-lg p-3 text-sm text-slate-700">5. Nasabah</div>
              </div>
            </div>

          </div>

          {/* Tautan Klik Langsung ke GitHub */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex justify-center md:justify-start">
            <a 
              href="https://github.com/Puputlestarii/Sistem-Informasi-Bank-Sampah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Lihat Kode di GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}