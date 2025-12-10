const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-950 px-4"
    >
      <div className="max-w-xl w-full bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-xl">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400">
          Contact Me
        </h2>

        <form className="space-y-6">
          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full p-3 bg-gray-900 border border-gray-700 
                         rounded-xl text-white placeholder-transparent 
                         focus:outline-none focus:border-blue-500 transition"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                         peer-placeholder-shown:text-gray-500
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400"
            >
              Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full p-3 bg-gray-900 border border-gray-700 
                         rounded-xl text-white placeholder-transparent 
                         focus:outline-none focus:border-blue-500 transition"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                         peer-placeholder-shown:text-gray-500
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400"
            >
              Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows={4}
              className="peer w-full p-3 bg-gray-900 border border-gray-700 
                         rounded-xl text-white placeholder-transparent 
                         focus:outline-none focus:border-blue-500 transition 
                         resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                         peer-placeholder-shown:text-gray-500
                         peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400"
            >
              Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium 
                       hover:bg-blue-500 transition transform hover:-translate-y-0.5 
                       active:translate-y-0 shadow-lg shadow-blue-600/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
