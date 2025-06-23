import React from "react";
const projects = [
  {
    title: "Weather App",
    description: "Built with React & OpenWeather API.",
    live: "https://your-live-link.com",
    code: "https://github.com/yourname/weather-app",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-sky-600">
                {project.title}
              </h3>
              <p className="text-slate-600 my-2">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sky-500 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="text-slate-500 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
