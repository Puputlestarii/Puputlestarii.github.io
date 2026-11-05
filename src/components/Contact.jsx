import React from 'react';
import { profileData } from '../data/profile';

export default function Contact() {
  const { email, phone, location } = profileData.personal;

  // Format nomor WhatsApp untuk tautan (mengubah 08... menjadi 628...)
  const formattedPhone = phone.startsWith('0') ? '62' + phone.slice(1) : phone;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=Halo%20Puput,%20saya%20tertarik%20untuk%20berkolaborasi.`;

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Informasi Kontak (Bisa Diklik) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
            
            {/* Email Klik */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-rose-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">Email</h4>
                <a href={`mailto:${email}`} className="text-lg font-semibold hover:text-rose-400 transition-colors underline">
                  {email}
                </a>
              </div>
            </div>

            {/* WhatsApp Klik */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-rose-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">Telepon / WhatsApp</h4>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-rose-400 transition-colors underline">
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-rose-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">Domisili</h4>
                <p className="text-lg font-semibold">{location}</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Kontak */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nama Lengkap</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white transition-colors" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" id="email-input" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white transition-colors" placeholder="contoh@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Pesan</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white transition-colors resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-rose-600 text-white font-medium rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30">
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}