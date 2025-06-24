import React from "react";import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiWebpack,
} from "react-icons/si";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 text-center">
      <p className="uppercase text-sm tracking-widest text-sky-500 mb-2">
        Explore my
      </p>
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Frontend bubble */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[300px] flex flex-col items-center space-y-4">
          <h3 className="text-xl font-bold text-sky-600">Frontend</h3>
          <div className="grid grid-cols-3 gap-4 text-sky-600 text-sm">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-3xl" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-3xl" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-3xl" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-3xl" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-3xl" />
              <span>Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <SiWebpack className="text-3xl" />
              <span>Webpack</span>
            </div>
            <div className="flex flex-col items-center col-span-3">
              <FaGitAlt className="text-3xl" />
              <span>Git</span>
            </div>
          </div>
        </div>

        {/* Backend bubble */}
        <div className="bg-white shadow-md rounded-xl p-6 w-[300px] flex flex-col items-center space-y-4">
          <h3 className="text-xl font-bold text-sky-600">Backend</h3>
          <div className="grid grid-cols-2 gap-4 text-sky-600 text-sm">
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-3xl" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-3xl" />
              <span>Express</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql className="text-3xl" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-3xl" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
