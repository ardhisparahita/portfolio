import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-950 text-gray-300 font-mono py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 relative z-10">
        <div className="mb-10 flex items-center gap-3 text-sm md:text-base font-bold border-b border-gray-800 pb-4">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          <span className="text-green-500">root@ardhis:~/about</span>
          <span className="text-gray-500">$</span>

          <span className="text-gray-100">cat profile.md</span>

          <span className="w-2 h-4 bg-gray-500 animate-pulse ml-1"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              <span className="text-purple-400 font-bold"># Summary</span>{" "}
              <br />
              Sebagai seorang{" "}
              <span className="text-gray-100 font-semibold">
                Backend Developer
              </span>
              , saya memiliki passion mendalam dalam membangun infrastruktur
              server yang kokoh. Fokus utama saya adalah menciptakan{" "}
              <span className="text-blue-400">RESTful API</span> yang aman,
              terstruktur, dan{" "}
              <span className="text-purple-400 italic">scalable</span>.
            </p>

            <p>
              <span className="text-purple-400 font-bold"># Tech Stack</span>{" "}
              <br />
              Keahlian teknis saya berpusat pada ekosistem{" "}
              <span className="text-green-400 font-semibold">Node.js</span>.
              Saya menerapkan pola{" "}
              <span className="text-yellow-200">Clean Architecture</span>{" "}
              menggunakan framework{" "}
              <span className="text-white">Express.js</span> atau{" "}
              <span className="text-red-400">NestJS</span>, didukung oleh{" "}
              <span className="text-blue-400">TypeScript</span>. Untuk data,
              saya mengandalkan{" "}
              <span className="text-orange-400">PostgreSQL</span> dan{" "}
              <span className="text-orange-400">MySQL</span>.
            </p>

            <p>
              <span className="text-purple-400 font-bold"># Workflow</span>{" "}
              <br />
              Dalam bekerja, saya menggunakan{" "}
              <span className="text-cyan-400">Git</span> untuk version control
              dan <span className="text-orange-500">Postman</span> untuk testing
              API. Saya juga memahami dasar{" "}
              <span className="text-blue-300">React</span> &{" "}
              <span className="text-purple-400">Vite</span> untuk kolaborasi tim
              frontend yang mulus.
            </p>

            <p className="border-l-2 border-green-500/50 pl-4 italic bg-green-900/10 py-2 rounded-r mt-4">
              "Misi saya: Menulis kode yang{" "}
              <span className="text-green-300">clean</span>,{" "}
              <span className="text-green-300">efisien</span>, dan berdampak
              nyata."
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm font-mono text-sm shadow-xl hover:border-blue-500/30 transition duration-300">
              <div className="text-gray-500 mb-3 text-xs uppercase tracking-widest">
                // current_status.json
              </div>
              <div className="text-blue-300">{"{"}</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-cyan-400">"education"</span>:{" "}
                  <span className="text-green-300">
                    "Universitas Amikom Yogyakarta"
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-cyan-400">"semester"</span>:{" "}
                  <span className="text-orange-400">5</span>,
                </div>
                <div>
                  <span className="text-cyan-400">"location"</span>:{" "}
                  <span className="text-green-300">"Yogyakarta, ID"</span>,
                </div>
                <div>
                  <span className="text-cyan-400">"focus"</span>:{" "}
                  <span className="text-green-300">"Backend Engineering"</span>,
                </div>
                <div>
                  <span className="text-cyan-400">"open_for_work"</span>:{" "}
                  <span className="text-purple-400">true</span>
                </div>
              </div>
              <div className="text-blue-300">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
