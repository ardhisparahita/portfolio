const About: React.FC = () => {
  return (
    <section id="about" className="py-32 flex items-center justify-center">
      <div className="max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Saya adalah seorang Backend Developer yang berfokus pada pengembangan
          REST API, sistem autentikasi, pengolahan data, serta integrasi
          database. Teknologi yang biasa saya gunakan antara lain Node.js,
          Express Js, Golang, Typescript, Sequelize, MySQL, PostgreSQL, dan
          RESTful API.
        </p>
      </div>
    </section>
  );
};

export default About;
