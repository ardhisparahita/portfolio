import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "./../assets/ardhis-profile.jpeg";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-950 text-white px-6"
      aria-label="Home Section"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-2 leading-tight">
            Halo, saya <span className="text-blue-400">Ardhis Parahita</span>
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-300 mb-6">
            <span className="font-semibold">
              Junior Backend-Oriented Developer
            </span>
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Saya fokus pada pengembangan{" "}
            <span className="font-semibold">RESTful API</span> yang skalabel,
            menerapkan autentikasi & otorisasi aman (
            <span className="font-semibold">JWT</span> &{" "}
            <span className="font-semibold">OAuth</span>), serta integrasi
            database menggunakan <span className="font-semibold">Node.js</span>,
            <span className="font-semibold">Express</span>,{" "}
            <span className="font-semibold">TypeScript</span>, dan{" "}
            <span className="font-semibold">MySQL</span>. Meskipun fokus utama
            saya di backend, saya juga memahami dasar frontend menggunakan{" "}
            <span className="font-semibold">React</span> &{" "}
            <span className="font-semibold">Vite</span> untuk membangun solusi
            end-to-end yang aman dan efisien.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold shadow cursor-pointer"
            >
              Lihat Projek
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-6 py-3 border border-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-400 transition font-semibold cursor-pointer"
            >
              Tech Stack
            </Link>
          </div>

          <div className="w-16 h-0.5 bg-gray-700 mb-6"></div>

          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://github.com/ardhisparahita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ardhis-parahita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ardhisparahitaa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-gray-700 hover:border-green-500 hover:text-green-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profile}
            alt="Ardhis profile photo"
            loading="lazy"
            className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-full object-cover 
               shadow-lg border border-gray-700 
               -translate-y-6 md:-translate-y-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
