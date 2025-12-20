import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        min-h-screen bg-gray-950 text-white 
        pt-10 pb-24
      "
      aria-label="About Me Section"
    >
      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300 text-base leading-relaxed text-justify">
          <p>
            Sebagai seorang{" "}
            <span className="font-semibold text-white">Backend Developer</span>,
            saya memiliki passion mendalam dalam membangun infrastruktur server
            yang kokoh. Fokus utama saya adalah menciptakan{" "}
            <span className="font-semibold text-white">RESTful API</span> yang
            tidak hanya fungsional, tetapi juga aman, terstruktur, dan siap
            untuk discaling (scalable). Saya sangat menikmati proses merancang
            alur data yang efisien serta memecahkan kompleksitas di balik layar
            sebuah aplikasi.
          </p>

          <p>
            Keahlian teknis saya berpusat pada ekosistem{" "}
            <span className="font-semibold text-white">Node.js</span>. Saya
            mengutamakan <em>maintainability</em> kode dengan menerapkan pola
            desain <span className="font-semibold text-white">MVC</span> maupun{" "}
            <span className="font-semibold text-white">Clean Architecture</span>
            . Pendekatan ini saya implementasikan menggunakan framework{" "}
            <span className="font-semibold text-white">Express.js</span> dan{" "}
            <span className="font-semibold text-white">NestJS</span> dengan
            dukungan tipe data ketat dari{" "}
            <span className="font-semibold text-white">TypeScript</span>. Untuk
            manajemen data, saya mengandalkan database relasional seperti{" "}
            <span className="font-semibold text-white">PostgreSQL</span> dan{" "}
            <span className="font-semibold text-white">MySQL</span> yang
            dikelola melalui ORM modern. Keamanan sistem juga menjadi prioritas,
            dengan penerapan standar autentikasi berbasis{" "}
            <span className="font-semibold text-white">JWT</span> dan{" "}
            <span className="font-semibold text-white">OAuth</span>.
          </p>

          <p>
            Dalam setiap proyek, saya menerapkan alur kerja profesional
            menggunakan <span className="font-semibold text-white">Git</span>{" "}
            (GitHub/GitLab) untuk version control dan{" "}
            <span className="font-semibold text-white">Postman</span> untuk
            dokumentasi serta pengujian API yang komprehensif. Meskipun
            spesialisasi saya ada di backend, pemahaman saya tentang{" "}
            <span className="font-semibold text-white">React</span> dan{" "}
            <span className="font-semibold text-white">Vite</span> memungkinkan
            saya untuk berkomunikasi secara efektif dengan tim frontend dan
            memastikan integrasi data berjalan mulus.
          </p>

          <p>
            Saat ini, saya menempuh semester 5 di{" "}
            <span className="font-semibold text-white">
              Universitas Amikom Yogyakarta
            </span>
            . Di luar aktivitas akademik, saya secara konsisten mendalami
            standar industri terkini dalam rekayasa perangkat lunak. Tujuan saya
            sederhana: menghasilkan kode yang tidak hanya "berjalan", tetapi
            juga rapi, efisien, dan siap digunakan untuk kebutuhan bisnis nyata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
