import React from "react";
export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-slate-50"
      id="hero"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
        Hi, I'm Mayra
      </h2>
      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl">
        I’m a frontend developer who builds clean, responsive, and user-focused
        websites.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600 transition"
      >
        View My Work
      </a>
    </div>
  );
}
