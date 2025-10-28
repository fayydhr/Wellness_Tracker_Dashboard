import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import GhostImage from "../assets/ghost.png";
import { quotes } from "../data/data";

export default function QuoteCard({ activeIndex, setActiveIndex }) {
  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center mt-24">
      {/* Speech bubble */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        onClick={nextQuote}
        className="cursor-pointer absolute -top-16 bg-white rounded-2xl shadow-lg px-6 py-4 w-80 text-center hover:shadow-xl transition-all duration-200"
      >
        {/* Bubble tail */}
        <div className="absolute left-1/2 bottom-0 translate-y-4 -translate-x-1/2 w-0 h-0
                        border-l-[10px] border-l-transparent
                        border-r-[10px] border-r-transparent
                        border-t-[10px] border-t-white">
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={quotes[activeIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-800 text-lg font-medium"
          >
            {quotes[activeIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="mt-4 flex justify-center space-x-2">
          {quotes.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-[#C21224]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </motion.div>

      {/* Ghost Image */}
      <motion.img
        src={GhostImage}
        alt="Motivational Ghost"
        className="w-72 h-72 object-contain"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
