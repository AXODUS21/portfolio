import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contacts from "./pages/Contacts";
import "./App.css";
import NavigationIcon from "./components/NavigationIcon";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState({
    home: 1,
    about: 0,
    projects: 0,
    testimonials: 0,
    contacts: 0,
  });
  const [navOffset, setNavOffSetY] = useState(0);
  const scrollSensitivity = 0.3; // Default sensitivity

  const handlePage = () => {
    console.log(offsetY * 0.2);
    if (offsetY * 0.2 <= 15) {
      setCurrentPage({
        home: 1,
        about: 0,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
    }
    if (offsetY * 0.2 >= 15 && offsetY * 0.2 <= 40) {
      setCurrentPage({
        home: 0,
        about: 1,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
    }
    if (offsetY * 0.2 >= 40 && offsetY * 0.2 <= 61) {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 1,
        testimonials: 0,
        contacts: 0,
      });
    }
    if (offsetY * 0.2 >= 61 && offsetY * 0.2 <= 80) {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 0,
        testimonials: 1,
        contacts: 0,
      });
    }
    if (offsetY * 0.2 >= 80) {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 0,
        testimonials: 0,
        contacts: 1,
      });
    }
  };

  useEffect(() => {
    handlePage();
  }, [offsetY]);

  useEffect(() => {
    // Custom scroll handler for sensitivity
    const scrollHandler = (event) => {
      event.preventDefault();
      setNavOffSetY(0)
      const scrollAmount = event.deltaY * scrollSensitivity; // Adjust sensitivity here
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    };

    window.addEventListener("wheel", scrollHandler, { passive: false });

    // Regular scroll event to update offsetY
    const scrollUpdateHandler = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", scrollUpdateHandler);

    return () => {
      window.removeEventListener("wheel", scrollHandler);
      window.removeEventListener("scroll", scrollUpdateHandler); // Cleanup
    };
  }, [scrollSensitivity]);

  const handleNav = (location) => {
    if (location === "home") {
      setCurrentPage({
        home: 1,
        about: 0,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
      setNavOffSetY(0);
    }
    if (location === "about") {
      setCurrentPage({
        home: 0,
        about: 1,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
      setNavOffSetY(3.5);
    }
    if (location === "projects") {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 1,
        testimonials: 0,
        contacts: 0,
      });
      setNavOffSetY(7);
    }
    if (location === "testimonials") {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 0,
        testimonials: 1,
        contacts: 0,
      });
      setNavOffSetY(11);
    }
    if (location === "contacts") {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 0,
        testimonials: 0,
        contacts: 1,
      });
      setNavOffSetY(17);
    }
  };

  return (
    <div
      className="project-body"
      style={{ transform: `translateY(${offsetY * 1}px)` }}
    >
      <div
        className="page-scroll-progress"
        style={{
          width: `${navOffset * 6 || offsetY * 0.2}vw`,
          maxWidth: "100vw", // Set a maximum width of 100vw
        }}
      ></div>

      <div
        className="navigation z-[9999] " 
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
        onClickCapture={(e) => e.preventDefault()} // Prevent default click behavior
      >
        <NavigationIcon isChecked={isNavOpen} />

        <div className={`nav-bar ${isNavOpen ? "tract" : "retract"}`}>
          <div onClick={() => handleNav("home")} className="to">
            Home →
          </div>
          <div onClick={() => handleNav("about")} className="to">
            About →
          </div>
          <div onClick={() => handleNav("projects")} className="to">
            Projects →
          </div>
          <div onClick={() => handleNav("testimonials")} className="to">
            Testimonials →
          </div>
          <div onClick={() => handleNav("contacts")} className="to">
            Contacts →
          </div>
        </div>
      </div>

      <div className="pages-container">
        <div className="page home" style={{ opacity: currentPage.home }}>
          <Home />
        </div>
        <div className="page about" style={{ opacity: currentPage.about }}>
          <About />
        </div>
        <div
          className={`page projects ${
            currentPage.projects === 1 ? "z-[999]" : "z-[1]"
          }`}
          style={{ opacity: currentPage.projects }}
        >
          <Projects />
        </div>
        <div
          className="page testimonials z-[-10] pt-20"
          style={{ opacity: currentPage.testimonials }}
        >
          <Testimonials />
        </div>
        <div
          className={`page contacts ${
            currentPage.contacts === 1 ? "z-[999]" : "z-[1]"
          }`}
          style={{ opacity: currentPage.contacts }}
        >
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
