import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-800 font-mono text-sm">
      {/* Container dengan padding yang konsisten dengan halaman lainnya */}
      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Kiri: Copyright dengan gaya komentar koding */}
        <div className="hover:text-gray-300 transition-colors cursor-default">
          // © {new Date().getFullYear()} Ardhia Parahita
        </div>

        {/* Kanan: Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/ardhisparahita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ardhis-parahita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={18} />
          </a>
          <a
            href="https://instagram.com/ardhisparahitaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <SiInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
