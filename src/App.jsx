import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    testimonials: testimonialsRef,
    contact: contactRef,
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar sectionRefs={sectionRefs} />
      <section ref={homeRef} id="home">
        <Hero />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <section ref={testimonialsRef} id="testimonials">
        <Story />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default App;
