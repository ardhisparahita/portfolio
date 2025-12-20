import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profileImg from "../assets/ardhis-profile.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-gray-950 text-gray-300 font-mono min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start">
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-900/20 border border-blue-900/50 text-blue-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            GET /api/profile/ardhis{" "}
            <span className="text-green-400 ml-1">200 OK</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            <span className="text-gray-500 font-light text-2xl md:text-4xl mr-3 align-middle">
              I'm
            </span>

            <span className="text-gray-100">Ardhis</span>

            <span className="ml-3 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
              Parahita
            </span>

            <span className="animate-pulse text-cyan-400">_</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Backend Developer
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-xl mb-8 border-l-2 border-gray-800 pl-4">
            Membangun <span className="text-purple-400">RESTful API</span> yang
            aman dan <em>scalable</em> adalah fokus utama saya. Dengan
            spesialisasi di ekosistem{" "}
            <span className="text-green-400">Node.js</span> (NestJS/Express) dan{" "}
            <span className="text-blue-400">TypeScript</span>, saya menerapkan{" "}
            <span className="text-yellow-200">Clean Architecture</span> untuk
            memastikan performa sistem yang optimal. Terbiasa mengelola database{" "}
            <span className="text-orange-400">SQL</span> serta memahami alur
            integrasi frontend.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-100 text-gray-950 font-bold rounded-lg hover:bg-white hover:scale-105 transition duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-gray-500">
            <a
              href="https://github.com/ardhisparahita"
              target="_blank"
              className="hover:text-white transition transform hover:-translate-y-1"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/ardhis-parahita"
              target="_blank"
              className="hover:text-blue-400 transition transform hover:-translate-y-1"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="mailto:ardhisparahitaa@gmail.com"
              className="hover:text-red-400 transition transform hover:-translate-y-1"
            >
              <HiOutlineMail size={24} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-br from-blue-600 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={profileImg}
              alt="Ardhis Parahita"
              className="relative w-48 h-48 md:w-80 md:h-80 object-cover rounded-xl border-2 border-gray-900 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
