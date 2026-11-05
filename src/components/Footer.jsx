import React from 'react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name } = profileData.personal;

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {currentYear} <span className="text-white font-medium">{name}</span>. Hak Cipta Dilindungi.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#hero" className="hover:text-rose-400 transition-colors">Kembali ke Atas ↑</a>
          <a href="https://github.com/Uputt27" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">GitHub</a>
          <a href={`mailto:${profileData.personal.email}`} className="hover:text-rose-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}