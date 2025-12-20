import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 z-50 w-full h-[72px] bg-slate-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center px-6 xl:pl-0 xl:pr-6">
        <div className="text-xl font-bold text-blue-400 cursor-pointer">
          <Link to="home" smooth duration={500}>
            Ardhis.dev
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          {items.map((item) => (
            <Link
              key={item}
              to={item === "Tech Stack" ? "techstack" : item.toLowerCase()}
              smooth
              duration={500}
              offset={-72}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-slate-950 border-t border-gray-800 p-6 space-y-4 shadow-xl">
          {items.map((item) => (
            <Link
              key={item}
              to={item === "Tech Stack" ? "techstack" : item.toLowerCase()}
              smooth
              duration={500}
              offset={-72}
              onClick={() => setOpen(false)}
              className="block text-base hover:text-blue-400 transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
