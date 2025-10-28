import React, { useState } from "react";
import { FaHome, FaChartBar, FaUser, FaTimes, FaBars } from "react-icons/fa";

export default function Sidebar({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Mood Chart", icon: <FaChartBar /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <>
      {/* Hamburger (mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-primaryRed text-white p-2 rounded-md shadow-lg"
        aria-label="Open sidebar"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 p-6 z-50 transform transition-transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:top-0 lg:left-0 ${className}`}
      >
        <div className="flex justify-end lg:hidden">
          <button aria-label="Close sidebar" onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-primaryRed mb-6">Emergencyy</h2>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href="#"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryRed"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
