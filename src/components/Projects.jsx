import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
        {/* SEO Pool Website */
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 md:col-span-2">
          <h3 className="text-2xl font-semibold text-sky-600">
            SEO Website – Pool Remodeling Company (Client Project)
          </h3>

          <p className="text-gray-600">
            Designed and developed a high-performing local business website for a pool remodeling and replastering company. Focused on improving local search visibility and converting organic traffic into qualified leads through SEO-driven structure and UX optimization.
          </p>

          <ul className="text-gray-600 list-disc pl-5 space-y-1">
            <li>
              Built and optimized city-specific landing pages targeting high-intent local keywords (Tracy, Sacramento, and surrounding areas)
            </li>
            <li>
              Implemented on-page SEO best practices including meta titles, descriptions, headers, and internal linking strategy
            </li>
            <li>
              Developed a conversion-focused “Get a Quote” page to generate inbound leads for the business
            </li>
            <li>
              Improved site structure, navigation flow, and mobile responsiveness to enhance UX and search performance
            </li>
            <li>
              Deployed on Netlify with a custom domain and ongoing iterative SEO improvements
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 text-sm text-white">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Local SEO",
              "On-page SEO",
              "Netlify",
              "Responsive Design",
              "Lead Generation",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/mlanda98/pacific-pools.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              GitHub
            </a>
            <a
              href="https://pacificedgepools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        }
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h3 className="text-2xl font-semibold text-sky-600">
            Battleship Game
          </h3>
          <p className="text-gray-600">
            A classic Battleship game built with modular JavaScript and
            responsive CSS. Includes ship placement, attack logic, and
            localStorage saving.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-white">
            {[
              "JavaScript",
              "Webpack",
              "ESLint",
              "Prettier",
              "localStorage API",
              "HTML",
              "CSS (Responsive)",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/mlanda98/battleship"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              GitHub
            </a>
            <a
              href="https://mlanda98.github.io/battleship/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h3 className="text-2xl font-semibold text-sky-600">
            Shopping Cart
          </h3>
          <p className="text-gray-600">
            A responsive React e-commerce site that lets users browse products,
            add to cart, and check out. Features dynamic routing and unit
            testing.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-white">
            {[
              "React",
              "React Router",
              "Vite",
              "Vitest",
              "React Testing Library",
              "Jest DOM",
              "ESLint",
              "Prettier",
              "FakeStore API",
              "CSS (Responsive)",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/mlanda98/shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              GitHub
            </a>
            <a
              href="https://shopping-cart-production-15ea.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* File Uploader */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 md:col-span-2">
          <h3 className="text-2xl font-semibold text-sky-600">
            File Uploader
          </h3>
          <p className="text-gray-600">
            A full-stack file upload service using session-based authentication.
            Users can log in, upload files to Supabase, and view file history.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-white">
            {[
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL (Railway)",
              "Supabase Storage",
              "Multer",
              "Passport.js",
              "EJS",
              "Railway",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/mlanda98/file-uploader"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              GitHub
            </a>
            <a
              href="https://file-uploader-production-d3b1.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
