import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Home from "./Pages/HomePage";
import Project from "./Pages/Project";

function App() {
  return (
    <>
      <div className="font-sans text-gray-900">
        <Navbar />

        <main className="pt-20">
          <Home />
          <Project />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
