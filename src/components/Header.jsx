/*
import React from "react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-600">Mayra</h1>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul
          className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} md:block`}
        >
          <li>
            <a href="#hero" className="hover:text-sky-500">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
*/

import React from "react";

export default function Header() {
  return (
    <header className="bg-sky-600 p-4 text-white font-bold">
      My Portfolio Header
    </header>
  );
}
