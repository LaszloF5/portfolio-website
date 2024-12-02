import React from "react";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./css/App.css"

export default function App() {
  return (
    <div className="App">
      <div className="first-container">
        <div className="content1">
        <div className="circle content1-top-left"></div>
        <div className="circle content1-bottom-right"></div>
          <section className="data">
            <h1 className="h1">Welcome!</h1>
            <p> My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well-known DJ applications to eCommerce booking platforms.
        I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
          </section>
          <header className="App-header">
            <nav className="nav">
              <ul className="nav-ul">
                <li className="nav-ul-li">
                  <a href="#">Home</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#">About</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#">Projects</a>
                </li>
                <li className="nav-ul-li">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}
