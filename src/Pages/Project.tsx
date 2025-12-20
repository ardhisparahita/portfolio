import React, { useState } from "react";

const projects = [
  {
    title: "Todo List App",
    role: "Backend-Focused Project",
    description:
      "Web-based Todo application with a secure RESTful API, featuring task management (CRUD), JWT-based authentication, and Google OAuth integration for enhanced user experience.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "JWT",
      "Passport.js",
      "MySQL",
      "Sequelize",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    highlights: [
      "CRUD-based task management system",
      "JWT Authentication & Authorization",
      "Google OAuth login integration",
      "Clean Architecture RESTful API",
      "Relational database design",
    ],
    github: {
      backend: "https://github.com/ardhisparahita/todo-backend",
      frontend: "https://github.com/ardhisparahita/todo-frontend",
    },
    demo: "https://todo-app.vercel.app",
    apiDocs: "https://todo-api-docs.vercel.app",
  },
  {
    title: "Kasir API",
    role: "Backend Developer Project",
    description:
      "RESTful API for a cashier system designed to handle product management, secure authentication, and sales data reporting with Excel export support.",
    tech: ["TypeScript", "Node.js", "Express", "JWT", "MySQL", "Sequelize"],
    highlights: [
      "Product & transaction CRUD operations",
      "JWT-based authentication & authorization",
      "Sales data export to Excel",
      "Relational database schema",
    ],
    github: "https://github.com/ardhisparahita/kasir",
    demo: null,
    apiDocs: "https://risol-api-docs.vercel.app",
  },
  {
    title: "Blog API",
    role: "Backend Developer Project",
    description:
      "Scalable RESTful API for a blogging platform with role-based access control, secure authentication, and modular architecture using NestJS.",
    tech: ["TypeScript", "Node.js", "NestJS", "JWT", "MySQL", "TypeORM"],
    highlights: [
      "Post & content management (CRUD)",
      "JWT Authentication & Authorization",
      "Role-Based Access Control (Admin & User)",
      "Modular & scalable architecture",
    ],
    github: "https://github.com/ardhisparahita/blog-nest",
    demo: null,
    apiDocs: null,
  },
  {
    title: "SIM Sekolah",
    role: "Backend Developer Project",
    description:
      "RESTful API for a school management system supporting multi-role access, academic data management, and secure authentication.",
    tech: ["TypeScript", "Node.js", "Express", "JWT", "MySQL", "Sequelize"],
    highlights: [
      "Student, teacher, and class management",
      "JWT-based authentication system",
      "Role-Based Access Control (Admin, Teacher, Student)",
      "Clean Architecture RESTful API",
    ],
    github: "https://github.com/ardhisparahita/SIM-SEKOLAH/",
    demo: null,
    apiDocs: null,
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const step = 3;
  const total = projects.length;
  const visibleProjects = projects.slice(currentIndex, currentIndex + step);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + step >= total ? 0 : prev + step));

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev - step < 0 ? Math.max(total - step, 0) : prev - step
    );

  return (
    <section
      id="projects"
      className="
        min-h-screen bg-gray-950 text-white 
        pt-10 pb-24
      "
    >
      {/* PERBAIKAN CONTAINER:
          px-6 dipindahkan ke sini, ditambah xl:pl-0 
          agar sejajar dengan logo di navbar
      */}
      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-3">Projects</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Backend-focused projects demonstrating RESTful API development,
            authentication, and relational database design.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm"
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-sm"
          >
            Next →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5
                      hover:border-blue-500 transition-all duration-300
                      flex flex-col h-full"
            >
              {/* Title */}
              <div className="mb-3">
                <h3 className="text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-blue-400 mt-1">{project.role}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 6).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-gray-800 px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="text-gray-400 text-sm space-y-1 mb-6">
                {project.highlights.slice(0, 3).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
                {project.github && typeof project.github === "object" ? (
                  <>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub Backend
                    </a>
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub Frontend
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}

                {project.apiDocs && (
                  <a
                    href={project.apiDocs}
                    target="_blank"
                    rel="noopener noreferrer"
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
