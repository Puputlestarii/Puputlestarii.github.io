export const profileData = {
  personal: {
    name: "Puput Lestari",
    role: "Web Developer Fullstack/Backend Developer | System & Data Analyst",
    location: "Indragiri Hilir, Riau",
    phone: "08988797823",
    email: "puputlstaarii@gmail.com",
    summary: "Merancang sistem yang rapi, mengolah data menjadi keputusan, dan membangun aplikasi web yang bekerja dengan baik."
  },
  skills: [
    { 
      category: "Backend", 
      items: ["PHP", "Laravel", "CodeIgniter", "Python (dasar)", "REST API (dasar)"] 
    },
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"] 
    },
    { 
      category: "Basis Data", 
      items: ["MySQL", "Perancangan Skema", "Query", "Normalisasi Data"] 
    },
    { 
      category: "Analisis Sistem & Data", 
      items: ["Analisis Kebutuhan", "ERD", "Excel", "SQL", "ERP (dasar)", "Data Mining (dasar)"] 
    },
    { 
      category: "Alat", 
      items: ["Git/GitHub", "Figma"] 
    }
  ],
  projects: [
    {
      title: "Sistem Informasi Bank Sampah Berbasis Web (Gerakan MasJOS)",
      year: "2025",
      stack: ["CodeIgniter 4", "MySQL", "Location Based Service (LBS)"],
      description: "Aplikasi web untuk mendigitalisasi pengelolaan Bank Sampah di Kemantren Tegalrejo, Yogyakarta.",
      points: [
        "Mendigitalisasi data nasabah, katalog sampah, tarif, penimbangan, saldo, penjemputan, dan pelaporan dengan 5 peran pengguna.",
        "Merancang struktur database dan antarmuka berdasarkan analisis kebutuhan di lapangan.",
        "Memusatkan pencatatan, pelaporan, dan monitoring data dalam satu basis data terpadu untuk menggantikan proses manual."
      ]
    }
  ],
  experience: [
    {
      role: "Pengembang Sistem Informasi (Magang)",
      company: "Kemantren Tegalrejo, Yogyakarta",
      period: "September - Oktober 2025",
      points: [
        "Menganalisis kebutuhan sistem bersama pihak kemantren dan kelurahan melalui observasi proses berjalan.",
        "Merancang struktur basis data dan antarmuka pengguna sesuai alur kerja Bank Sampah.",
        "Mengembangkan Sistem Informasi Bank Sampah berbasis web menggunakan CodeIgniter 4 dan MySQL."
      ]
    }
  ],
  organizations: [
    {
      role: "Anggota Divisi Eksternal",
      name: "Himpunan Mahasiswa Sistem Informasi (HIMASI) Universitas Respati Yogyakarta",
      period: "2023",
      points: [
        "Mendukung kegiatan divisi eksternal dalam menjalin komunikasi dan kerja sama dengan pihak luar.",
        "Berkoordinasi dengan pengurus dalam perencanaan dan pelaksanaan program kerja himpunan."
      ]
    }
  ],
  education: [
    {
      degree: "S1 Sistem Informasi",
      institution: "Universitas Respati Yogyakarta",
      period: "2022 - 2026"
    },
    {
      degree: "Sekolah Menengah Atas",
      institution: "SMA Negeri Tunas Bangsa Pulau Burung",
      period: "2019 - 2022"
    }
  ]
};