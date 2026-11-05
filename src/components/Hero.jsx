import React from 'react';
import { profileData } from '../data/profile';

export default function Hero() {
  const { name, role, summary } = profileData.personal;
  
  // Variabel path diletakkan di atas dengan benar
  const fotoProfil = `${import.meta.env.BASE_URL}foto_profilmu.png`; 
  const fileCV = `${import.meta.env.BASE_URL}CV_Puput_Lestari_ATS.pdf`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center min-h-screen overflow-hidden transition-colors duration-300 bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Kolom Kiri: Teks Konten */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-rose-600 font-semibold tracking-wide uppercase mb-3">
            Halo, saya
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-6 leading-tight">
            {role}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {summary}
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-rose-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            >
              Lihat Proyek
            </a>
            <a 
              href="https://github.com/Puputlestarii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            
            <a 
              href={fileCV}
              download="CV_Puput_Lestari.pdf"
              className="px-6 py-3 bg-white hover:bg-rose-50 text-rose-600 font-medium rounded-xl border border-rose-200 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            >
              Unduh CV
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Style Cutout & Elemen Abstrak Pink */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-64 sm:w-72 md:w-96 flex justify-center items-end group">
            
            {/* Latar Belakang Cahaya Blur Soft Pink */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-rose-300/40 -rotate-12 rounded-[3rem] blur-xl transition-all duration-500 group-hover:bg-rose-400/50"></div>
            
            {/* SVG Path Blob Abstrak Organik Berwarna Pink */}
            <svg 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto text-rose-400/40 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-6" 
              viewBox="0 0 200 200" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.3,-40.5C85.5,-25.8,91.8,-10.3,90.3,4.6C88.7,19.5,79.4,33.9,69.5,47.1C59.6,60.3,49.2,72.2,35.5,78.5C21.8,84.7,4.8,85.2,-10.5,81.1C-25.7,76.9,-39.1,68,-51.2,56.7C-63.3,45.4,-74,31.7,-79.8,15.6C-85.5,-0.6,-86.2,-19.1,-79.5,-34.5C-72.7,-50,-58.5,-62.4,-43.3,-68.9C-28.1,-75.4,-11.9,-75.9,2.8,-80.1C17.5,-84.3,32.4,-83.4,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
            </svg>

            {/* Foto Profil */}
            <img 
              src={fotoProfil} 
              alt="Puput Lestari" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
}