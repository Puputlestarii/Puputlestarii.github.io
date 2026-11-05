import React from 'react';
import { profileData } from '../data/profile';

export default function About() {
  const { education, organizations } = profileData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Narasi Perkenalan (Kotak kontak sudah dihapus) */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Kenalan Lebih Dekat</h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
              <p>
                Hai, perkenalkan, saya Puput Lestari. Saya tertarik pada dua bidang yang saling melengkapi: Fullstack Web Developer dan System and Data Analyst. Bagi saya, sistem informasi bukan sekadar aplikasi di layar, melainkan gabungan perangkat keras, perangkat lunak, data, jaringan, prosedur, dan manusia yang menggunakannya. Karena itu, saya selalu berusaha melihat masalah secara utuh, bukan hanya dari sisi teknis.
              </p>
              <p>
                Saya terbiasa mengawal sebuah sistem sejak awal: menggali kebutuhan bisnis, merancang basis data relasional yang rapi, hingga menghadirkan antarmuka yang nyaman digunakan. Pengalaman terlibat dalam digitalisasi proses manajemen di instansi pemerintahan melatih saya menghadapi persoalan nyata di lapangan, di mana solusi harus praktis, tepat sasaran, dan benar-benar dipakai.
              </p>
              <p>
                Saya pembelajar yang cepat beradaptasi dan tidak menunggu diminta untuk mencoba hal baru. Saya selalu mengikuti perkembangan teknologi dan praktik terbaik di dunia perangkat lunak, dan saya siap berkontribusi bersama tim untuk menghasilkan produk digital yang memberi dampak nyata bagi pengguna dan organisasi.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Pendidikan & Organisasi */}
          <div className="space-y-8">
            
            {/* Pendidikan */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6.5" /></svg>
                Pendidikan
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-rose-300 pl-4 py-1 relative">
                    <div className="absolute w-3 h-3 bg-rose-600 rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600 text-sm">{edu.institution}</p>
                    <span className="text-xs text-rose-600 font-semibold">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organisasi */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Organisasi
              </h3>
              <div className="space-y-4">
                {organizations.map((org, index) => (
                  <div key={index} className="border-l-2 border-rose-300 pl-4 py-1 relative">
                    <div className="absolute w-3 h-3 bg-rose-600 rounded-full -left-[7px] top-2"></div>
                    <h4 className="font-bold text-slate-900">{org.role}</h4>
                    <p className="text-slate-600 text-sm">{org.name}</p>
                    <span className="text-xs text-rose-600 font-semibold">{org.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}