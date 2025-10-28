import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

export default function SummaryCard({ sessions }) {
  // Total sesi
  const totalSessions = sessions.length;

  // Durasi rata-rata
  const avgDuration =
    totalSessions > 0
      ? Math.round(sessions.reduce((sum, s) => sum + s.durationMin, 0) / totalSessions)
      : 0;

  // Ambil tanggal sesi terakhir, jika ada
  const lastSessionDate =
    sessions.length > 0
      ? sessions[sessions.length - 1].date || new Date().toISOString().split("T")[0]
      : "Belum ada sesi";

  return (
    <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white rounded-xl p-6 shadow-xl flex flex-col gap-4 transform hover:scale-105 transition-transform duration-300">
      <h2 className="font-extrabold text-xl">Ringkasan Sesi Konseling</h2>

      {/* Total Sesi */}
      <div className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg">
        <div>
          <p className="text-sm">Total Sesi</p>
          <p className="font-bold text-lg">{totalSessions}</p>
        </div>
        <FaCalendarAlt size={30} />
      </div>

      {/* Durasi Rata-rata */}
      <div className="flex items-center justify-between bg-white bg-opacity-20 p-3 rounded-lg">
        <div>
          <p className="text-sm">Durasi Rata-rata</p>
          <p className="font-bold text-lg">{avgDuration} min</p>
        </div>
        <FaClock size={30} />
      </div>

      {/* Sesi terakhir */}
      <div className="bg-white bg-opacity-20 p-3 rounded-lg text-center font-medium">
        Sesi Terakhir: <span className="font-bold">{lastSessionDate}</span>
      </div>
    </div>
  );
}
