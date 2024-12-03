import React, { useState, useEffect } from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import "./css/App.css";

export default function App() {
  const [showArrow, setShowArrow] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth <= 1200) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY > 500) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
    };

    window.addEventListener("scroll", handleNav);

    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []);

  return (
    <div className="App">
      <div id="home" className="first-container">
        <div className="content1">
          {showArrow && (
            <img
              className="top-arrow"
              src={process.env.PUBLIC_URL + "/arrow-top.png"}
              alt="Top arrow"
              onClick={scrollToTop}
            />
          )}
          <div className="circle content1-top-left"></div>
          <div className="circle content1-bottom-right"></div>
          <section className="data">
            <h1 className="h1">Welcome!</h1>
            <p className="p">
              My name is Laszlo Fazekas. I started learning front-end
              development a year ago. Since then, I've been working passionately
              on creating new things, although I'm not working yet
              professionally in the field. I've always enjoyed developing and
              taking on the challenges that come with web development. My goal
              is to continuously improve and create projects that provide real
              value to users.
            </p>
          </section>
          <header className="App-header">
            <nav className="nav">
              <ul
                className={`nav-ul ${addClass ? "otherView" : ""} ${
                  isSmall ? "otherView" : ""
                }`}
              >
                <li className="nav-ul-li">
                  <a href="#home">Home</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#about">About</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#projects">Projects</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#education">Education</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div id="about">
        {" "}
        <About />
      </div>
      <div id="projects">
        {" "}
        <Projects />
      </div>
      <div id="education">
        {" "}
        <Education />
      </div>
      <div id="contact">
        {" "}
        <Contact />
      </div>
    </div>
  );
}
