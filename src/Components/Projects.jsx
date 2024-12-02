import React from "react";
import "../css/Projects.css";

export default function Projects() {
  return (
    <div className="third-container">
      <div className="content3">
      <div className="circle3 content3-top-left"></div>
      <div className="circle3 content3-bottom-right"></div>
        <h2 className="projects-h2">Projects</h2>
        <section className="project-container">
        <p className="projects-p">Here are some of my projects:</p>
        <ul className="projects-list">
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
          <li>Project 5</li>
          <li>Project 6</li>
        </ul>
        </section>
      </div>
    </div>
  );
}
