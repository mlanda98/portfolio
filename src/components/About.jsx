import React from "react";

import { FaCode, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">About Me</h2>

      {/* Bubbles container */}
      <div className="flex justify-center gap-8 mb-10 flex-wrap">
        {/* Experience bubble */}
        <div className="bg-sky-100 text-sky-700 rounded-full px-8 py-6 font-semibold shadow-md min-w-[180px] flex flex-col items-center space-y-3">
          <FaCode className="w-10 h-10" />
          <div>
            <p className="font-bold text-lg">Experience</p>
            <p className="mt-1 text-base font-normal">2+ Years building coding projects 
            <br/>React, Node.js, Express, & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Education bubble */}
        <div className="bg-sky-100 text-sky-700 rounded-full px-8 py-6 font-semibold shadow-md min-w-[180px] flex flex-col items-center space-y-3">
          <FaGraduationCap className="w-10 h-10" />
          <div>
            <p className="font-bold text-lg">Education</p>
            <p className="mt-1 text-base font-normal">
              B.S. Biology, Microbiology Concentration
              <br/>
              Minor in Chemistry
              <br />
              San Jose State University
            </p>
          </div>
        </div>
      </div>

      {/* Intro paragraph */}
      <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
        Passionate self-taught frontend developer building sleek, user-friendly web apps
        with React and Tailwind CSS.
      </p>

      {/* View Work button */}
      <a
        href="#projects"
        className="inline-block bg-sky-500 text-white px-10 py-4 rounded-lg shadow-lg font-semibold hover:bg-sky-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}
