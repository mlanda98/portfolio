import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex justify-center gap-8 items-center text-3xl text-sky-600">
        <a
          href="mailto:mlandae16@gmail.com"
          title="mlandae16@gmail.com"
          className="flex items-center hover:text-sky-800 transition"
        >
          <FaEnvelope className="mr-2" />
          <span className="text-sm text-gray-700">mlandae16@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mlanda9823"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mlanda98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-800 transition"
        >
          <FaFilePdf />
        </a>
      </div>
    </section>
  );
}
