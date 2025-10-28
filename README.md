# Wellness Tracker Dashboard

Dashboard ini adalah proyek frontend berbasis **React + Tailwind CSS + Vite** untuk memonitor kesehatan mental, mood, dan tips self-care. Desain mengikuti konsep **Bold Supportive Minimalism**, fokus pada user experience yang ramah, profesional, dan responsif.  
Karakter ghost (GamerGhost) digunakan untuk memberikan motivasi dan menyampaikan pesan interaktif kepada user.


## Demo / Preview

<img width="1916" height="911" alt="image" src="https://github.com/user-attachments/assets/9c2684fa-2696-4e53-8c25-a33b54c3b0ce" />



## Fitur Utama

- **Sidebar Navigasi**: Bisa collapsible/hamburger di mobile, menampilkan menu utama.
- **Header**: Menampilkan judul aplikasi dan tombol navigasi tambahan.
- **SummaryCard**: Ringkasan sesi konseling dengan informasi:
  - Total sesi
  - Durasi rata-rata sesi
  - Sesi terakhir
- **QuoteCard / QuoteGhost**: Bubble motivasi dari karakter ghost yang animatif. Quotes berubah saat diklik, menampilkan interaktivitas.
- **MoodChart**: Grafik mood mingguan menggunakan **Recharts**, menampilkan persentase Happy / Neutral / Sad.
- **SelfCareTips**: Tips praktis menjaga kesehatan mental (minum cukup air, tidur cukup, meditasi), ditampilkan dalam kartu horizontal.
- **Responsif & Mobile-Friendly**: Layout menyesuaikan layar, sidebar collapsible, grid fleksibel.
- **Animasi Interaktif**: Framer Motion digunakan untuk animasi QuoteGhost dan smooth transition.


## Teknologi yang Digunakan

- **React** (v18+)
- **Tailwind CSS** (v3+)
- **Vite** (v4+)
- **Framer Motion** (untuk animasi interaktif)
- **Recharts** (untuk grafik MoodChart)
- **React Icons** (opsional, mengganti emoji dengan ikon profesional)


## Struktur Proyek

wellness-dashboard/
│
├─ public/
│ ├─ index.html
│ └─ screenshot-dashboard.png
│
├─ src/
│ ├─ assets/
│ │ └─ ghost.png
│ │
│ ├─ components/
│ │ ├─ Header.jsx # Navigasi atas
│ │ ├─ Sidebar.jsx # Sidebar collapsible
│ │ ├─ SummaryCard.jsx # Ringkasan sesi
│ │ ├─ QuoteCard.jsx # Motivasi ghost
│ │ ├─ MoodChart.jsx # Grafik mood
│ │ └─ SelfCareTips.jsx # Tips self-care
│ │
│ ├─ data/
│ │ └─ data.js # Data dummy (sesi, mood, quotes)
│ │
│ ├─ App.jsx # Entry point dashboard
│ └─ main.jsx # Root render React
│
├─ package.json
├─ tailwind.config.js
└─ README.md


