import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Story />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};


export default App