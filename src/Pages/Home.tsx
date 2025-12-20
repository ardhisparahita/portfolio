import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profileImg from "../assets/ardhis-profile.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        bg-gray-950 text-white
        /* Ubah min-h-screen menjadi flex-col agar tinggi mengikuti konten di HP */
        min-h-screen
        flex 
        items-start       
        pt-[74px]
      "
      aria-label="Hero Section"
    >
      <div
        className="
        max-w-6xl mx-auto w-full 
        grid grid-cols-1 md:grid-cols-2 
        gap-6 
        items-start 
        px-6 xl:pl-0 xl:pr-6
      "
      >
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Halo, saya <span className="text-blue-400">Ardhis</span>
            <br />
            <span className="text-blue-400">Parahita</span>
          </h1>

          <p className="mt-2 text-base sm:text-xl text-gray-300 font-medium">
            Backend Developer
          </p>

          <p className="mt-3 max-w-xl text-gray-400 leading-snug text-sm sm:text-base">
            Fokus membangun{" "}
            <span className="text-white font-medium">RESTful API</span> yang
            scalable dan aman menggunakan ekosistem{" "}
            <span className="text-white font-medium">Node.js</span> (
            <span className="text-white font-medium">NestJS/Express</span>) dan{" "}
            <span className="text-white font-medium">TypeScript</span>. Terbiasa
            merancang arsitektur database yang efisien serta mengelola
            autentikasi pengguna.
          </p>

          <p className="mt-3 max-w-xl text-gray-400 leading-snug text-sm sm:text-base">
            Saya juga memahami{" "}
            <span className="text-white font-medium">dasar React</span> untuk
            memastikan struktur data API yang saya buat mudah diolah dan
            ditampilkan di sisi frontend.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-sm"
            >
              Lihat Proyek
            </a>

            <a
              href="#skills"
              className="px-5 py-2.5 rounded-xl border border-gray-700 hover:border-blue-400 transition text-sm"
            >
              Tech Stack
            </a>
          </div>

          <div className="w-full max-w-xl border-t border-gray-800 my-5"></div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ardhisparahita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/ardhis-parahita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:ardhisparahitaa@gmail.com"
              className="p-2.5 rounded-xl border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition"
            >
              <HiOutlineMail size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-start pb-0 md:pb-0 md:pt-4">
          <img
            src={profileImg}
            alt="Ardhis Parahita"
            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover ring-2 ring-blue-500/40 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
