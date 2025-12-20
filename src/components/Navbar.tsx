import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home", label: "/home" },
    { name: "About", to: "about", label: "/about" },
    { name: "Tech Stack", to: "skills", label: "/skills" },
    { name: "Projects", to: "projects", label: "/projects" },
    { name: "Contact", to: "contact", label: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full h-[72px] bg-slate-950/90 backdrop-blur border-b border-gray-800 font-mono">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center px-6 xl:pl-0 xl:pr-6">
        <div className="text-lg font-bold text-gray-200 cursor-pointer hover:text-blue-400 transition-colors">
          <Link to="home" smooth duration={500}>
            <span className="text-blue-500 mr-1">$</span>
            ./ardhis.dev
            <span className="animate-pulse text-blue-500">_</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-sm text-gray-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-72}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-300 hover:text-white transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-slate-950 border-b border-gray-800 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-72}
              onClick={() => setOpen(false)}
              className="block text-base text-gray-400 hover:text-blue-400 transition cursor-pointer border-l-2 border-transparent hover:border-blue-500 pl-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
