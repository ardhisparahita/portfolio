import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Ardhis</div>
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
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
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
