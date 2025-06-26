import React from "react";

// You can replace these with your actual URLs
const resumeUrl = "https://yourdomain.com/Mayra_Resume.pdf";
const contactEmail = "mailto:mlandae16@gmail.com";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-6">
      {/* Greeting */}
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-6xl font-extrabold mb-2">Mayra</h1>

      {/* Role */}
      <p className="text-2xl text-gray-500 mb-8">Frontend Developer</p>

      {/* Buttons */}
      <div className="flex space-x-6 mb-10">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow transition"
        >
          Resume
        </a>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 border-2 border-sky-500 hover:bg-sky-500 hover:text-white text-sky-500 font-semibold rounded-lg shadow transition"
        >
          Contact
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-8 text-gray-600">
        {/* LinkedIn */}

        <a
          href="https://linkedin.com/in/mlanda9823"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-sky-500 transition"
          aria-label="LinkedIn"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 19.091H5.673v-9.39h2.666v9.39zM7.006 8.797c-.853 0-1.544-.69-1.544-1.544 0-.853.69-1.544 1.544-1.544.853 0 1.544.69 1.544 1.544 0 .853-.691 1.544-1.544 1.544zm12.085 10.294h-2.666v-4.548c0-1.084-.02-2.48-1.513-2.48-1.514 0-1.747 1.182-1.747 2.403v4.625H10.5v-9.39h2.56v1.283h.036c.357-.676 1.229-1.387 2.529-1.387 2.703 0 3.202 1.779 3.202 4.09v5.404z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mlanda98"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-sky-500 transition"
          aria-label="GitHub"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.208 11.387c.6.11.82-.26.82-.577v-2.236c-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.304.764-1.604-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 016 0c2.29-1.553 3.296-1.23 3.296-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.921.43.37.823 1.096.823 2.21v3.284c0 .32.218.694.825.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
