import React, { useState } from "react";

const projects = [
  {
    title: "Risol Primadona API",
    role: "Backend Developer",
    description:
      "RESTful API untuk sistem pemesanan UMKM dengan autentikasi JWT dan manajemen produk.",
    tech: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
    highlights: [
      "JWT Authentication & Authorization",
      "CRUD Produk & Order",
      "Relational Database Design",
    ],
    github: "https://github.com/username/risol-api",
    demo: null,
    apiDocs: "https://risol-api-docs.vercel.app",
  },
  {
    title: "Finance Tracker App",
    role: "Full Stack Developer (Backend-Focused)",
    description:
      "Aplikasi pencatat keuangan berbasis web dengan API backend dan frontend React.",
    tech: ["TypeScript", "Express", "PostgreSQL", "JWT", "React", "Tailwind"],
    highlights: [
      "RESTful API dengan Clean Architecture",
      "JWT-based Authentication",
      "Frontend terintegrasi dengan API",
    ],
    github: "https://github.com/username/finance-tracker",
    demo: "https://finance-tracker.vercel.app",
    apiDocs: "https://finance-tracker-docs.vercel.app",
  },
  {
    title: "Example Project 3",
    role: "Backend Developer",
    description: "Contoh projek ke-3.",
    tech: ["Node.js", "MongoDB"],
    highlights: ["Auth", "CRUD"],
    github: "#",
    demo: null,
    apiDocs: null,
  },
  {
    title: "Example Project 4",
    role: "Backend Developer",
    description: "Contoh projek ke-4.",
    tech: ["Go", "PostgreSQL"],
    highlights: ["API", "Deploy"],
    github: "#",
    demo: null,
    apiDocs: null,
  },
  {
    title: "Example Project 5",
    role: "Backend Developer",
    description: "Contoh projek ke-5.",
    tech: ["Python", "FastAPI"],
    highlights: ["ML", "API"],
    github: "#",
    demo: null,
    apiDocs: null,
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = projects.length;
  const step = 3; // tampil per 3 card

  const nextSlide = () => {
    const next = currentIndex + step;
    if (next >= total) return setCurrentIndex(0); // loop kembali ke awal
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    const prev = currentIndex - step;
    if (prev < 0) {
      // grup terakhir
      const remainder = total % step;
      const lastStart = remainder === 0 ? total - step : total - remainder;
      return setCurrentIndex(lastStart);
    }
    setCurrentIndex(prev);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + step);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>

        {/* BUTTONS */}
        <div className="flex justify-between mb-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
          >
            ⬅ Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
          >
            Next ➡
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>

              <p className="text-sm text-blue-400 mb-3">{project.role}</p>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}

                {project.apiDocs && (
                  <a
                    href={project.apiDocs}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    API Docs
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
