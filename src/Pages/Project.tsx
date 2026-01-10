import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBook,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

interface GithubLinks {
  backend?: string;
  frontend?: string;
  [key: string]: string | undefined;
}

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string | GithubLinks;
  demo: string | null;
  apiDocs: string | null;
}

const projects: Project[] = [
  {
    title: "todo-list-app",
    role: "Backend-Focused Project",
    description:
      "Web-based Todo application with a secure RESTful API, featuring task management (CRUD), JWT-based authentication, and Google OAuth integration.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "RESTful API",
      "Passport.js & Google Oauth",
      "Docker",
      "Clean Architecture",
    ],
    highlights: [
      "JWT & Google OAuth Integration",
      "Clean Architecture Implementation",
      "Secure Task Management CRUD",
    ],
    github: {
      backend: "https://github.com/ardhisparahita/todo-backend",
      frontend: "https://github.com/ardhisparahita/todo-frontend",
    },
    demo: "https://todo-ardhis.vercel.app",
    apiDocs: "https://documenter.getpostman.com/view/22411519/2sBXVfiBJg",
  },
  {
    title: "blog-nest-api",
    role: "Backend Developer Project",
    description:
      "Scalable RESTful API for a blogging platform featuring full CRUD functionality, role-based access control, and modular architecture using NestJS.",
    tech: [
      "NestJS",
      "TypeScript",
      "MySQL",
      "TypeORM",
      "RESTful API",
      "Docker",
      "Clean Architecture",
    ],
    highlights: [
      "Modular Architecture Design",
      "RBAC (Admin & User) Implementation",
      "Dockerized NestJS & MySQL Environment",
      "Comprehensive API Documentation",
    ],
    github: "https://github.com/ardhisparahita/blog-nest",
    demo: null,
    apiDocs: "https://blog-nest-production-f66f.up.railway.app/api",
  },

  {
    title: "kasir-api",
    role: "Backend Developer Project",
    description:
      "RESTful API for a cashier system designed to handle product management, secure authentication, and sales data reporting with Excel export support.",
    tech: [
      "Node.js",
      "Express",
      "Sequelize",
      "RESTful API",
      "Clean Architecture",
    ],
    highlights: [
      "Sales Data Export to Excel",
      "Relational Database Schema Design",
      "Transaction Management System",
    ],
    github: "https://github.com/ardhisparahita/kasir",
    demo: null,
    apiDocs: null,
  },
  {
    title: "sim-sekolah-api",
    role: "Backend Developer Project",
    description:
      "RESTful API for a school management system supporting multi-role access, academic data management, and secure authentication.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "Clean Architecture",
    ],
    highlights: [
      "Multi-role Access Control",
      "Academic Data Management Logic",
      "Structured Clean Architecture",
    ],
    github: "https://github.com/ardhisparahita/SIM-SEKOLAH/",
    demo: null,
    apiDocs: null,
  },
];

const Projects: React.FC = () => {
  const INITIAL_LIMIT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

  const visibleProjects = projects.slice(0, visibleCount);
  const isAllVisible = visibleCount >= projects.length;

  const terminalCountDisplay = Math.min(visibleCount, projects.length);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_LIMIT);
    const section = document.getElementById("projects");
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="bg-gray-950 text-gray-300 font-mono py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 relative z-10">
        <div className="mb-12 flex items-center gap-3 text-sm md:text-base font-bold border-b border-gray-800 pb-4">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          <span className="text-green-500">root@ardhis:~/projects</span>
          <span className="text-gray-500">$</span>

          <div className="flex items-center">
            <span className="text-gray-100">
              ls -la | head -n {terminalCountDisplay}
            </span>
            <span className="w-2.5 h-5 bg-gray-500 animate-pulse ml-2 block"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/40 border border-gray-800 rounded p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 relative flex flex-col"
            >
              <div className="absolute left-3 top-6 bottom-6 w-px bg-gray-800 hidden sm:block"></div>

              <div className="sm:pl-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold text-lg truncate max-w-[180px]">
                      {project.title}/
                    </span>
                    <span className="text-xs text-gray-600 bg-gray-900 px-2 py-0.5 rounded border border-gray-800 hidden sm:inline-block">
                      drwxr-xr-x
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-500 shrink-0">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.demo
                          ? "bg-green-500 animate-pulse"
                          : "bg-gray-600"
                      }`}
                    ></span>
                    {project.demo ? "Live" : "Repo"}
                  </div>
                </div>

                <div className="text-gray-500 text-sm mb-4 italic">
                  {`/**`} <br />
                  {` * ${project.description}`} <br />
                  {` * Role: ${project.role}`} <br />
                  {` */`}
                </div>

                <div className="mb-6 text-sm">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-200">stack</span> = [
                  <div className="pl-4 flex flex-wrap gap-1 mt-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-green-400">
                        '{t}'<span className="text-gray-400">,</span>
                      </span>
                    ))}
                  </div>
                  ];
                </div>

                <div className="mb-6 text-xs text-gray-400 border-l border-gray-700 pl-3 py-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="mb-0.5">
                      # {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:pl-6 flex flex-wrap gap-4 pt-4 border-t border-gray-800/50 mt-auto">
                {typeof project.github === "object" ? (
                  <>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub /> Backend
                    </a>
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub /> Frontend
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub /> Source
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                {project.apiDocs && (
                  <a
                    href={project.apiDocs}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <FaBook /> API Docs
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {!isAllVisible ? (
            <button
              onClick={handleShowMore}
              className="group flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded text-green-500 font-mono hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <span className="text-gray-500">$</span>
              <span>./load_more_projects.sh</span>
              <FaChevronDown className="text-xs group-hover:translate-y-1 transition-transform" />
            </button>
          ) : (
            projects.length > INITIAL_LIMIT && (
              <button
                onClick={handleShowLess}
                className="group flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded text-yellow-500 font-mono hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300"
              >
                <span className="text-gray-500">$</span>
                <span>cd ..</span>
                <FaChevronUp className="text-xs group-hover:-translate-y-1 transition-transform" />
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
