const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-xl w-full px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-xl"
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
