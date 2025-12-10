import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-32 flex items-center justify-center bg-gray-800 text-white"
      aria-label="About Me Section"
    >
      <div className="max-w-3xl px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-400">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg sm:text-xl mb-6">
          Saya adalah seorang{" "}
          <span className="font-semibold">Backend Developer</span> yang berfokus
          pada pengembangan <span className="font-semibold">REST API</span>,
          sistem autentikasi, pengolahan data, serta integrasi database.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg sm:text-xl">
          Teknologi yang biasa saya gunakan antara lain{" "}
          <span className="font-semibold">
            Node.js, Express.js, Golang, TypeScript, Sequelize, MySQL,
            PostgreSQL
          </span>
          , serta membangun <span className="font-semibold">RESTful API</span>{" "}
          yang scalable dan aman.
        </p>
      </div>
    </section>
  );
};

export default About;
