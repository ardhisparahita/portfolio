import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-900 text-white px-6"
      aria-label="Home Section"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT — HERO CONTENT */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">Ardhis</span>
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Backend-Focused Full Stack Developer
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I specialize in building scalable RESTful APIs, secure
            authentication systems (JWT & OAuth), and integrating modern
            frontend with robust backend architecture using Node.js, Express,
            PostgreSQL, and TypeScript.
          </p>

          {/* PRIMARY & SECONDARY ACTION */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold shadow"
            >
              View Projects
            </a>

            <a
              href="#skills"
              className="px-6 py-3 border border-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-400 transition font-semibold"
            >
              Tech Stack
            </a>
          </div>

          {/* DIVIDER HALUS */}
          <div className="w-16 h-0.5 bg-gray-700 mb-6"></div>

          {/* SOCIAL LINKS (LEBIH KECIL & RAPI) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/ardhisparahita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.png"
            alt="Ardhis profile photo"
            loading="lazy"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg border border-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
