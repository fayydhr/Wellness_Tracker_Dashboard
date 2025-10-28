import React from "react";

const tips = [
  { id: 1, icon: "💧", title: "Minum cukup air" },
  { id: 2, icon: "😴", title: "Tidur minimal 7 jam" },
  { id: 3, icon: "🧘", title: "Ambil waktu untuk napas tenang" },
];

export default function SelfCareTips() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4 text-primaryRed">Tips Self-Care</h2>
      <div className="flex justify-between space-x-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <p className="text-gray-800 font-semibold text-center">{tip.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
