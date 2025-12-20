import React, { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPassport,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiTypeorm,
  SiJsonwebtokens,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiNestjs,
} from "react-icons/si";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

// Kita tambahkan properti 'file' agar terlihat seperti nama file asli
type Tech = {
  name: string;
  file: string; // misal: index.ts, server.go
  icon: React.ReactNode;
  color: string;
};

type Category = {
  id: string;
  name: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    id: "languages",
    name: "Languages",
    techs: [
      {
        name: "TypeScript",
        file: "main.ts",
        icon: <SiTypescript />,
        color: "text-blue-400",
      },
      {
        name: "JavaScript",
        file: "script.js",
        icon: <SiJavascript />,
        color: "text-yellow-400",
      },
      {
        name: "Golang",
        file: "main.go",
        icon: <SiGo />,
        color: "text-cyan-400",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Frameworks",
    techs: [
      {
        name: "NestJS",
        file: "app.module.ts",
        icon: <SiNestjs />,
        color: "text-red-500",
      },
      {
        name: "Express.js",
        file: "server.js",
        icon: <SiExpress />,
        color: "text-gray-200",
      },
      {
        name: "Node.js",
        file: "package.json",
        icon: <SiNodedotjs />,
        color: "text-green-500",
      },
    ],
  },
  {
    id: "database",
    name: "Database",
    techs: [
      {
        name: "PostgreSQL",
        file: "schema.sql",
        icon: <SiPostgresql />,
        color: "text-blue-400",
      },
      {
        name: "MySQL",
        file: "dump.sql",
        icon: <SiMysql />,
        color: "text-orange-400",
      },
      {
        name: "TypeORM",
        file: "ormconfig.ts",
        icon: <SiTypeorm />,
        color: "text-orange-500",
      },
      {
        name: "Sequelize",
        file: "model.js",
        icon: <SiSequelize />,
        color: "text-blue-500",
      },
    ],
  },
  {
    id: "tools",
    name: "DevOps & Tools",
    techs: [
      {
        name: "Git",
        file: ".gitignore",
        icon: <SiGit />,
        color: "text-orange-500",
      },
      {
        name: "Postman",
        file: "collection.json",
        icon: <SiPostman />,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        file: "workflow.yml",
        icon: <SiGithub />,
        color: "text-white",
      },
      {
        name: "JWT",
        file: "auth.guard.ts",
        icon: <SiJsonwebtokens />,
        color: "text-pink-500",
      },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Integration",
    techs: [
      {
        name: "React",
        file: "App.tsx",
        icon: <SiReact />,
        color: "text-cyan-400",
      },
      {
        name: "Vite",
        file: "vite.config.ts",
        icon: <SiVite />,
        color: "text-purple-400",
      },
      {
        name: "Tailwind",
        file: "tailwind.config.js",
        icon: <SiTailwindcss />,
        color: "text-cyan-300",
      },
    ],
  },
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const selectedCategory = categories.find((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      className="bg-gray-950 text-gray-300 font-mono py-24 relative overflow-hidden"
    >
      {/* Background Grid (Konsisten) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 relative z-10">
        {/* Terminal Header */}
        <div className="mb-8 flex items-center gap-3 text-sm md:text-base font-bold border-b border-gray-800 pb-4">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-green-500">root@ardhis:~/skills</span>
          <span className="text-gray-500">$</span>
          <span className="text-gray-100">tree -L 2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SIDEBAR (Directory Structure) */}
          <div className="md:col-span-4 lg:col-span-3 border-r border-gray-800 pr-4">
            <div className="text-gray-500 mb-4 text-xs tracking-widest uppercase font-semibold">
              Explorer
            </div>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                      flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-all duration-200
                      ${
                        activeCategory === cat.id
                          ? "bg-blue-900/20 text-blue-400 font-bold"
                          : "text-gray-400 hover:text-gray-200 hover:bg-gray-900"
                      }
                    `}
                >
                  {activeCategory === cat.id ? (
                    <FaFolderOpen className="text-yellow-500" />
                  ) : (
                    <FaFolder className="text-gray-600" />
                  )}
                  <span>{cat.id}</span>
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT (File List) */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="mb-4 text-gray-500 text-sm">
              Directory:{" "}
              <span className="text-yellow-500">~/{activeCategory}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory?.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-gray-700 hover:bg-gray-900/50 transition duration-200 group cursor-default"
                >
                  {/* Icon */}
                  <div
                    className={`text-xl ${tech.color} opacity-80 group-hover:opacity-100`}
                  >
                    {tech.icon}
                  </div>

                  {/* File Info */}
                  <div className="flex flex-col">
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors text-sm">
                      {tech.file}
                    </span>
                    <span className="text-[10px] text-gray-600">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty line prompt at bottom */}
            <div className="mt-8 text-gray-500 text-sm">
              <span className="text-green-500">
                root@ardhis:~/{activeCategory}
              </span>{" "}
              $ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
