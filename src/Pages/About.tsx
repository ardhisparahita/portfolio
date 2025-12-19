import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-6 py-24"
      aria-label="About Me Section"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            Saya adalah seorang{" "}
            <span className="font-semibold text-white">
              Backend-Oriented Developer
            </span>{" "}
            yang berfokus pada pengembangan{" "}
            <span className="font-semibold text-white">RESTful API</span> serta
            sistem backend yang terstruktur, aman, dan mudah dikembangkan.
            Ketertarikan utama saya berada pada perancangan alur data,
            autentikasi & otorisasi pengguna, serta integrasi database.
          </p>

          <p>
            Dalam pengembangan backend, saya terbiasa menggunakan{" "}
            <span className="font-semibold text-white">Node.js</span> dengan{" "}
            <span className="font-semibold text-white">Express.js</span> dan{" "}
            <span className="font-semibold text-white">NestJS</span>, serta
            menulis kode menggunakan{" "}
            <span className="font-semibold text-white">TypeScript</span> dan{" "}
            <span className="font-semibold text-white">JavaScript</span>. Saya
            menerapkan autentikasi berbasis{" "}
            <span className="font-semibold text-white">JWT</span> dan{" "}
            <span className="font-semibold text-white">OAuth</span> dalam
            membangun sistem yang aman dan terkontrol.
          </p>

          <p>
            Untuk pengelolaan data, saya menggunakan{" "}
            <span className="font-semibold text-white">PostgreSQL</span> dan{" "}
            <span className="font-semibold text-white">MySQL</span>, serta ORM
            seperti <span className="font-semibold text-white">Sequelize</span>{" "}
            dan <span className="font-semibold text-white">TypeORM</span>. Saya
            terbiasa merancang struktur database yang efisien dan mudah
            dikembangkan seiring pertumbuhan aplikasi.
          </p>

          <p>
            Meskipun fokus utama saya berada di backend, saya juga memahami
            dasar-dasar frontend menggunakan{" "}
            <span className="font-semibold text-white">React</span> dan{" "}
            <span className="font-semibold text-white">Vite</span>. Pemahaman
            ini membantu saya membangun solusi end-to-end yang selaras antara
            sisi frontend dan backend.
          </p>

          <p>
            Saya terbiasa bekerja dengan version control seperti{" "}
            <span className="font-semibold text-white">Git</span>,{" "}
            <span className="font-semibold text-white">GitHub</span>, dan{" "}
            <span className="font-semibold text-white">GitLab</span>, serta
            menggunakan{" "}
            <span className="font-semibold text-white">Postman</span> untuk
            pengujian dan dokumentasi API. Dalam setiap proyek, saya selalu
            berupaya membangun sistem backend yang{" "}
            <span className="font-semibold text-white">
              scalable, aman, dan dapat diandalkan
            </span>
            .
          </p>

          <p>
            Saat ini, saya merupakan mahasiswa semester 5 di{" "}
            <span className="font-semibold text-white">
              Universitas Amikom Yogyakarta
            </span>
            . Saya terus mengembangkan kemampuan di bidang backend development
            dengan mempelajari arsitektur yang lebih baik, meningkatkan kualitas
            kode, serta mengoptimalkan performa aplikasi agar siap digunakan
            dalam skala nyata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
