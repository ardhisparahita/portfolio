import React, { useState } from "react";

const projects = [
  {
    title: "Todo List App",
    role: "Backend-Focused Developer",
    description:
      "Aplikasi Todo List berbasis web dengan REST API dan frontend Vite, dilengkapi fitur manajemen tugas (CRUD) serta sistem autentikasi lengkap menggunakan JWT, termasuk register, login, dan Google OAuth",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "Passport.js",
      "JWT",
      "MySQL",
      "Sequelize",
      "Vite",
      "React",
      "Tailwind CSS",
    ],
    highlights: [
      "CRUD Operations (Create, Read, Update, Delete)",
      "JWT Authentication & Authorization",
      "RESTful API dengan Clean Architecture",
      "Google OAuth Authentication",
      "Relational Database Design",
      "Frontend terintegrasi dengan API",
    ],
    github: {
      backend: "https://github.com/ardhisparahita/todo-backend",
      frontend: "https://github.com/ardhisparahita/todo-frontend",
    },
    demo: "https://todo-app.vercel.app",
    apiDocs: "https://todo-api-docs.vercel.app",
  },
  {
    title: "KASIR API",
    role: "Backend Developer",
    description:
      "Membangun RESTful API untuk sistem kasir yang dilengkapi autentikasi JWT, manajemen produk, dan kemampuan export data ke Excel.",
    tech: ["TypeScript", "Node.js", "Express", "JWT", "MySQL", "Sequelize"],
    highlights: [
      "CRUD Operations (Create, Read, Update, Delete)",
      "JWT Authentication & Authorization",
      "Relational Database Design",
    ],
    github: "https://github.com/ardhisparahita/kasir",
    demo: null,
    apiDocs: "https://risol-api-docs.vercel.app",
  },
  {
    title: "Blog API",
    role: "Backend Developer",
    description:
      "Membangun RESTful API untuk blog yang dilengkapi dengan autentikasi jwt, manajemen data di dalam blog, serta terdapat fitur role (Admin, User)",
    tech: ["Typescript", "Node.js", "Nest.js", "JWT", "MySQL", "TypeORM"],
    highlights: [
      "CRUD Operations (Create, Read, Update, Delete)",
      "JWT Authentication & Authorization",
      "Relational Database Design",
      "Role-based Access Control (Admin, User)",
    ],
    github: "https://github.com/ardhisparahita/blog-nest",
    demo: null,
    apiDocs: null,
  },
  {
    title: "SIM Sekolah",
    role: "Backend Developer",
    description:
      "Membangun RESTful API untuk sistem informasi sekolah (SIM Sekolah) yang dilengkapi autentikasi JWT, manajemen data siswa, guru, dan kelas, serta kemampuan memilih role (Admin, Guru, Siswa).",
    tech: ["TypeScript", "Node.js", "Express", "JWT", "MySQL", "Sequelize"],
    highlights: [
      "CRUD Operations (Create, Read, Update, Delete)",
      "JWT Authentication & Authorization",
      "RESTful API dengan Clean Architecture",
      "Role-based Access Control (Admin, Guru, Siswa)",
      "Relational Database Design",
    ],

    github: "https://github.com/ardhisparahita/SIM-SEKOLAH/",
    demo: null,
    apiDocs: null,
  },

  // {
  //   title: "Example Project 5",
  //   role: "Backend Developer",
  //   description: "Contoh projek ke-5.",
  //   tech: ["Python", "FastAPI"],
  //   highlights: ["ML", "API"],
  //   github: "#",
  //   demo: null,
  //   apiDocs: null,
  // },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = projects.length;
  const step = 3;

  const nextSlide = () => {
    const next = currentIndex + step;
    if (next >= total) return setCurrentIndex(0);
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    const prev = currentIndex - step;
    if (prev < 0) {
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
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Projects
        </h2>

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

        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>

              <p className="text-sm text-blue-400 mb-3">{project.role}</p>

              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech badges */}
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

              {/* Highlights */}
              <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 text-sm mt-4 items-center">
                {/* GitHub: single or multiple */}
                {project.github && typeof project.github === "object" ? (
                  <>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub Backend
                    </a>

                    <a
                      href={project.github.frontend}
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub Frontend
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}

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
