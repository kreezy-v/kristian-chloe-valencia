import "./App.css";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";
import About from "./sections/About/About";
import Navbar from "./Components/Navbar/Navbar";
import { useRef } from "react";
import ScrollToTop from "./common/ScrollToTop";
function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <Navbar
        refs={{
          home: homeRef,
          projects: projectsRef,
          skills: skillsRef,
          about: aboutRef,
        }}
      />
      <main>
        <div ref={homeRef} id="home">
          <Hero />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={skillsRef} id="skills">
          <Skills />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
