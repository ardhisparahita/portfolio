import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-gray-900 text-white px-6 py-32"
      aria-label="About Me Section"
    >
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-blue-400">
          About Me
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Saya adalah seorang{" "}
          <span className="font-semibold">Backend-Oriented Developer</span>
          yang berfokus pada pengembangan{" "}
          <span className="font-semibold">RESTful API</span>, sistem autentikasi
          dan otorisasi (<span className="font-semibold">JWT</span> &{" "}
          <span className="font-semibold">OAuth</span>), pengolahan data, serta
          integrasi <span className="font-semibold">database</span>.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Teknologi yang biasa saya gunakan mencakup{" "}
          <span className="font-semibold">Node.js</span>,{" "}
          <span className="font-semibold">Express.js</span>,{" "}
          <span className="font-semibold">Golang</span>,{" "}
          <span className="font-semibold">PostgreSQL</span>,{" "}
          <span className="font-semibold">MySQL</span>,{" "}
          <span className="font-semibold">Sequelize</span>, serta{" "}
          <span className="font-semibold">JWT</span>. Meskipun fokus utama saya
          di backend, saya juga memahami dasar-dasar frontend menggunakan{" "}
          <span className="font-semibold">React</span> dan{" "}
          <span className="font-semibold">Vite</span> untuk membangun solusi
          end-to-end yang aman dan efisien.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Saya terbiasa menggunakan version control seperti{" "}
          <span className="font-semibold">Git</span>,{" "}
          <span className="font-semibold">GitHub</span>, dan{" "}
          <span className="font-semibold">GitLab</span>, serta tools pendukung
          seperti <span className="font-semibold">Postman</span> untuk pengujian
          API. Saya selalu berusaha membangun sistem backend yang{" "}
          <span className="font-semibold">
            scalable, aman, dan dapat diandalkan
          </span>
          .
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Saat ini, saya sedang menempuh semester 5 di{" "}
          <span className="font-semibold">Universitas Amikom Yogyakarta</span>,
          sambil terus mengembangkan kemampuan saya di bidang Backend
          Development. Saya selalu tertarik untuk belajar teknologi baru,
          meningkatkan performa aplikasi, dan menghadirkan solusi backend yang
          efisien dan handal.
        </p>
      </div>
    </section>
  );
};

export default About;
