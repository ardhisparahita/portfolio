import React, { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGoland,
  SiPassport,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiJsonwebtokens,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

type Category = {
  name: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    name: "Languages",
    techs: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Golang", icon: <SiGoland /> },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    name: "Auth & Security",
    techs: [
      { name: "Passport.js", icon: <SiPassport /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
    ],
  },
  {
    name: "Database & ORM",
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Sequelize", icon: <SiSequelize /> },
    ],
  },
  {
    name: "Architecture / API",
    techs: [
      { name: "RESTful API", icon: <SiExpress /> },
      { name: "MVC / Clean Architecture", icon: <SiNodedotjs /> },
    ],
  },
  {
    name: "Tools",
    techs: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].name
  );

  const selectedCategory = categories.find((c) => c.name === activeCategory);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">
          Tech Stack
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Technologies I use to build scalable backend systems and modern web
          applications.
        </p>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-xl border transition ${
                activeCategory === cat.name
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* TECH GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {selectedCategory?.techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition"
            >
              <div className="text-4xl text-blue-400">{tech.icon}</div>
              <p className="text-sm text-gray-300 text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
