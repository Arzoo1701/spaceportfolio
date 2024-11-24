"use client";

import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div
      id="resume"
      className="relative flex flex-col items-center justify-center h-screen py-20 px-10"
      style={{
        backgroundColor: "#03001417",
      }}
    >
      {/* Background Image in Center */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-20 z-0"
        style={{
          backgroundImage: "url('/Space%20Portfolio%20Assets/R.jpeg')",
          backgroundSize: "950px", // Adjust size
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Title */}
      <motion.h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Resume
      </motion.h1>

      {/* Card Section */}
      <motion.div
        className="shadow-lg bg-[#03001417] border border-[#2A0E61]/50 rounded-lg p-8 w-full max-w-3xl flex flex-col items-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-lg text-white mb-6 text-center">
          Click below to open or download my resume.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/Space%20Portfolio%20Assets/033_Arzoo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform"
          >
            View Resume
          </a>

          <a
            href="/Space%20Portfolio%20Assets/033_Arzoo.pdf"
            download="Resume_Arzoo"
            className="px-6 py-3 rounded-lg border-2 border-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
