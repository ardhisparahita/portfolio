import React from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log({ serviceId, templateId, publicKey });

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey).then(
      () => alert("Message sent successfully!"),
      (error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
      }
    );

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="
        min-h-screen bg-gray-950 text-white 
        pt-10 pb-24
      "
    >
      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-3">Contact Me</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss backend architecture? Feel
            free to send me a message.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-xl hover:border-blue-500/50 transition-colors duration-300">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className="peer w-full p-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-1">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                required
                className="peer w-full p-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-1">
                Email
              </label>
            </div>

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <div className="relative">
              <textarea
                name="message"
                placeholder=" "
                rows={4}
                required
                className="peer w-full p-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition resize-none"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-1">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-500 transition transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-600/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
