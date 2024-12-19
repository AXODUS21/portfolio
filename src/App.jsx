import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contacts from "./pages/Contacts";
import "./App.css";
import NavigationIcon from "./components/NavigationIcon";
import { useColor } from "./globals/global";

function App() {
  const { bgColor } = useColor();
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
   const [scrollSensitivity, setScrollSensitivity] = useState(0.01);

  const handlePage = () => {
    if (offsetY * 1 <= 15) {
      setCurrentPage({
        home: 1,
        about: 0,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
    } else if (offsetY * 1 > 15 && offsetY * 1 <= 40) {
      setCurrentPage({
        home: 0,
        about: 1,
        projects: 0,
        testimonials: 0,
        contacts: 0,
      });
    } else if (offsetY * 1 > 40 && offsetY * 1 <= 61) {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 1,
        testimonials: 0,
        contacts: 0,
      });
    } else if (offsetY * 1 > 61 && offsetY * 1 <= 80) {
      setCurrentPage({
        home: 0,
        about: 0,
        projects: 0,
        testimonials: 1,
        contacts: 0,
      });
    } else {
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
    // Apply offsetY value to body style
    document.body.style.transform = `translateY(${offsetY}px)`;

    return () => {
      // Cleanup by resetting the body's transform
      document.body.style.transform = "";
    };
  }, [offsetY]);

   useEffect(() => {
     const isMobile =
       /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent) ||
       window.innerWidth <= 768;

     // Adjust sensitivity based on device
     setScrollSensitivity(isMobile ? 3 : 0.01); // Higher sensitivity for mobile, lower for desktop
   }, []);

   useEffect(() => {
     let touchStartY = 0;
     let touchEndY = 0;

     const touchStartHandler = (event) => {
       touchStartY = event.touches[0].clientY;
     };

     const touchMoveHandler = (event) => {
       event.preventDefault();
       touchEndY = event.touches[0].clientY;
       const scrollAmount = (touchStartY - touchEndY) * scrollSensitivity;
       window.scrollBy({ top: scrollAmount, behavior: "smooth" });
       touchStartY = touchEndY; // Reset for continuous scrolling
     };

     const scrollHandler = (event) => {
       event.preventDefault();
       const scrollAmount = event.deltaY * scrollSensitivity;
       window.scrollBy({ top: scrollAmount, behavior: "smooth" });
     };

     const scrollUpdateHandler = () => {
       setOffsetY(window.scrollY);
     };

     // Add appropriate event listeners
     if (
       /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent) ||
       window.innerWidth <= 768
     ) {
       window.addEventListener("touchstart", touchStartHandler, {
         passive: false,
       });
       window.addEventListener("touchmove", touchMoveHandler, {
         passive: false,
       });
     } else {
       window.addEventListener("wheel", scrollHandler, { passive: false });
     }

     window.addEventListener("scroll", scrollUpdateHandler);

     return () => {
       window.removeEventListener("touchstart", touchStartHandler);
       window.removeEventListener("touchmove", touchMoveHandler);
       window.removeEventListener("wheel", scrollHandler);
       window.removeEventListener("scroll", scrollUpdateHandler);
     };
   }, [scrollSensitivity]); 


  const handleNav = (location) => {
    const pageOffsets = {
      home: 0,
      about: 3.5,
      projects: 7,
      testimonials: 11,
      contacts: 17,
    };

    setCurrentPage({
      home: location === "home" ? 1 : 0,
      about: location === "about" ? 1 : 0,
      projects: location === "projects" ? 1 : 0,
      testimonials: location === "testimonials" ? 1 : 0,
      contacts: location === "contacts" ? 1 : 0,
    });
    setNavOffSetY(pageOffsets[location]);
  };

  console.log(offsetY * 1)
  return (
    <div className="project-body">
      <div
        className="page-scroll-progress"
        style={{
          width: `${navOffset * 6 || offsetY * 1}vw`,
          maxWidth: "100vw",
        }}
      ></div>

      <div
        className="navigation z-[100]"
        onClick={() => setIsNavOpen((prev) => !prev)}
        onClickCapture={(e) => e.preventDefault()}
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
            currentPage.projects === 1 ? "z-[99]" : "z-[1]"
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
