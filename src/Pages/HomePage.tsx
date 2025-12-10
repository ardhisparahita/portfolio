const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-white"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ardhis</h1>
        <p className="text-xl text-gray-700 mb-6">
          Backend Developer & API Specialist
        </p>

        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
