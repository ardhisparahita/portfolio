import { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-400">Ardhis.dev</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          {items.map((item) => {
            const target =
              item === "Tech Stack" ? "skills" : item.toLowerCase();

            return (
              <Link
                key={item}
                to={target}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300">
          {items.map((item) => {
            const target =
              item === "Tech Stack" ? "skills" : item.toLowerCase();

            return (
              <Link
                key={item}
                to={target}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-400 transition"
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
