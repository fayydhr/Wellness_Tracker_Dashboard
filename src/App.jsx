import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import QuoteCard from "./components/QuoteCard";
import MoodChart from "./components/MoodChart";
import SelfCareTips from "./components/SelfCareTips";
import MoodSidebar from "./components/MoodSidebar";
import Toast from "./components/Toast";

import { sessions as initialSessions, moodData as initialMoodData } from "./data/data";

function App() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [moodSidebarOpen, setMoodSidebarOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, text: "" });

  const [moodData, setMoodData] = useState(initialMoodData);
  const [sessions, setSessions] = useState(initialSessions);

  // Fungsi refresh mood & sesi
  const refreshMoodData = () => {
    const newMood = moodData.map((day) => ({
      ...day,
      Happy: Math.floor(Math.random() * 100),
      Neutral: Math.floor(Math.random() * 50),
      Sad: Math.floor(Math.random() * 30),
    }));

    const newSessions = sessions.map((s) => ({
      ...s,
      durationMin: Math.floor(Math.random() * 60) + 20, // durasi random 20-80 menit
    }));

    setMoodData(newMood);
    setSessions(newSessions);

    setToast({ show: true, text: "Data mood dan sesi berhasil diperbarui!" });
    setTimeout(() => setToast({ show: false, text: "" }), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-bgWhite">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-4 sm:p-6 flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Kolom kiri */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
              <SummaryCard sessions={sessions} />
              <QuoteCard activeIndex={activeQuote} setActiveIndex={setActiveQuote} />
            </div>

            {/* Kolom kanan */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
              <div className="flex gap-2">
                <button
                  className="p-2 bg-primaryRed text-white rounded hover:bg-red-700 transition-colors duration-300"
                  onClick={() => setMoodSidebarOpen(true)}
                >
                  Lihat Detail Mood
                </button>
                <button
                  className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                  onClick={refreshMoodData}
                >
                  Refresh Mood & Sessions
                </button>
              </div>

              <MoodChart moodData={moodData} />
              <SelfCareTips />
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar detail mood */}
      <MoodSidebar
        moodData={moodData}
        isOpen={moodSidebarOpen}
        onClose={() => setMoodSidebarOpen(false)}
      />

      {/* Toast notifikasi */}
      <Toast show={toast.show} text={toast.text} />
    </div>
  );
}

export default App;
