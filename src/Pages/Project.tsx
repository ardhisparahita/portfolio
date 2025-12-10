const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Backend Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Auth API System",
            "E-Commerce REST API",
            "Financial Management API",
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project}</h3>
              <p className="text-gray-600 mb-4">
                Project backend yang dibangun menggunakan REST API dan database.
              </p>

              <div className="flex gap-4">
                <button className="text-blue-500 hover:underline">
                  API Docs
                </button>
                <button className="text-gray-700 hover:underline">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
