import React from "react";
import { FaTimes } from "react-icons/fa";

export default function MoodSidebar({ isOpen, onClose, moodData }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg text-primaryRed">Detail Mood Mingguan</h2>
          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          {moodData.map((day, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <h3 className="font-semibold text-gray-700">{day.date}</h3>
              <div className="flex justify-between mt-2 text-sm">
                <span>Happy: {day.Happy}</span>
                <span>Neutral: {day.Neutral}</span>
                <span>Sad: {day.Sad}</span>
              </div>
              {/* Visual bar */}
              <div className="flex mt-2 h-2 rounded overflow-hidden bg-gray-200">
                <div
                  className="bg-red-500"
                  style={{ width: `${day.Happy}%` }}
                ></div>
                <div
                  className="bg-gray-400"
                  style={{ width: `${day.Neutral}%` }}
                ></div>
                <div
                  className="bg-blue-500"
                  style={{ width: `${day.Sad}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
