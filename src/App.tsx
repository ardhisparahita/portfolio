import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import TechStack from "./Pages/TechStack";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col text-gray-200 bg-slate-950">
        <Navbar />

        <main className="flex-1 pt-20">
          <Home />
          <About />
          <TechStack />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
