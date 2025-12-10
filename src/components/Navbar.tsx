import { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Ardhis</div>

        <div className="hidden md:flex space-x-6">
          {items.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 flex flex-col space-y-4">
          {items.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-500"
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
