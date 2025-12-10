import Navbar from "./components/Navbar";
import Home from "./Pages/HomePage";

function App() {
  return (
    <>
      <div className="font-sans text-gray-900">
        <Navbar />

        <main className="pt-20">
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
