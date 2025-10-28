import React from 'react';
import Logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-primaryRed p-4 text-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="EmergencyyCall Logo" className="w-10 h-10" />
        <span className="font-extrabold text-lg">EmergencyyCall</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Hi, Fayy</span>
        <button className="p-2 rounded-full bg-white text-primaryRed hover:bg-accentGray transition">
          🔔
        </button>
      </div>
    </header>
  );
}
