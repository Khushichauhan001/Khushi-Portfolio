import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <ScrollTopButton />
    </div>
  );
}

function ScrollTopButton() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-dark flex items-center justify-center text-lg font-bold shadow-lg hover:scale-110 transition-transform duration-200 z-40"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
