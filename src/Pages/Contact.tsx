import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  FaTerminal,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [lastLog, setLastLog] = useState<string>("");
  const [text, setText] = useState("");
  const fullText = "node send_mail.js";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;

    if (!currentForm) return;

    setStatus("sending");
    setLastLog("Initiating handshake...");

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    setTimeout(() => {
      setLastLog("Sending payload to SMTP server...");

      emailjs.sendForm(serviceId, templateId, currentForm, publicKey).then(
        () => {
          setLastLog("200 OK: Message delivered.");
          setStatus("success");
          currentForm.reset();

          setTimeout(() => {
            setStatus("idle");
            setLastLog("");
          }, 5000);
        },
        (error) => {
          console.error(error);
          setLastLog(`Error: ${error.text}`);
          setStatus("error");
        }
      );
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-gray-300 font-mono py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-6xl mx-auto w-full px-6 xl:pl-0 xl:pr-6 relative z-10">
        <div className="mb-12 flex items-center gap-3 text-sm md:text-base font-bold border-b border-gray-800 pb-4">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-green-500">root@ardhis:~/contact</span>
          <span className="text-gray-500">$</span>
          <div className="flex items-center">
            <span className="text-gray-100">{text}</span>
            <span className="w-2.5 h-5 bg-gray-500 animate-pulse ml-2 block"></span>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <div className="bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-blue-400 flex items-center gap-2">
                <FaTerminal className="text-gray-600" /> payload.json
              </span>
              <span className="text-xs text-gray-600">UTF-8</span>
            </div>

            <div className="p-6 md:p-10 relative">
              <div className="absolute left-4 top-10 bottom-10 w-6 text-right text-gray-700 text-sm select-none hidden sm:block leading-relaxed font-mono opacity-50">
                1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="sm:pl-8 space-y-5"
              >
                <span className="text-yellow-500">{`{`}</span>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pl-4">
                  <span className="text-blue-400 min-w-fit">"sender_name"</span>
                  <span className="text-gray-500">:</span>
                  <div className="relative flex-1 group">
                    <span className="absolute left-0 text-green-500">"</span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="off"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-gray-800 focus:border-blue-500 text-green-400 px-3 py-1 outline-none transition-colors placeholder-gray-700 font-mono"
                    />
                    <span className="absolute right-0 top-1 text-green-500">
                      ",
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pl-4">
                  <span className="text-blue-400 min-w-fit">
                    "sender_email"
                  </span>
                  <span className="text-gray-500">:</span>
                  <div className="relative flex-1 group">
                    <span className="absolute left-0 text-green-500">"</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="off"
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-gray-800 focus:border-blue-500 text-green-400 px-3 py-1 outline-none transition-colors placeholder-gray-700 font-mono"
                    />
                    <span className="absolute right-0 top-1 text-green-500">
                      ",
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pl-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">"message"</span>
                    <span className="text-gray-500">:</span>
                  </div>
                  <div className="relative w-full group">
                    <span className="absolute left-0 top-3 text-green-500">
                      "
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Type your message here..."
                      className="w-full bg-gray-950/30 border border-gray-800 rounded focus:border-blue-500 text-green-400 px-4 py-3 pl-6 outline-none transition-colors resize-none placeholder-gray-700 leading-relaxed font-mono"
                    />
                    <span className="absolute right-2 bottom-2 text-green-500">
                      "
                    </span>
                  </div>
                </div>

                <span className="text-yellow-500">{`}`}</span>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800/50 mt-4">
                  <div className="text-xs font-mono min-h-6 flex items-center">
                    {status === "sending" && (
                      <span className="text-yellow-500 flex items-center gap-2">
                        <span className="animate-spin">⟳</span> {lastLog}
                      </span>
                    )}
                    {status === "success" && (
                      <span className="text-green-500 flex items-center gap-2">
                        <FaCheck /> {lastLog}
                      </span>
                    )}
                    {status === "error" && (
                      <span className="text-red-500 flex items-center gap-2">
                        <FaExclamationTriangle /> {lastLog}
                      </span>
                    )}
                    {status === "idle" && (
                      <span className="text-gray-600 italic">
                        // Waiting for execution...
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className={`flex items-center gap-2 px-6 py-2 rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 text-blue-400 transition-all font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
                  >
                    <span className="text-gray-500">$</span>
                    <span>EXECUTE</span>
                    <FaPaperPlane className="text-xs ml-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
