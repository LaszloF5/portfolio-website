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
            <li className="project-list-li">
              <span className='project-span'>Project 1</span>
              <img
                className="project-img"
                src={`${process.env.PUBLIC_URL}/project1.png`}
                alt="Weather forecast web application"
              />
              <a
                className="visiteProject"
                href="https://github.com/LaszloF5/weather-webapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code in Github:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
              <a
                className="visiteProject"
                href="https://laszlof5.github.io/weather-webapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit this site:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
            </li>
            <li className="project-list-li">
              <span className='project-span'>Project 2</span>
              <img
                className="project-img"
                src={`${process.env.PUBLIC_URL}/project2.png`}
                alt="Advent calendar web application"
              />
              <a
                className="visiteProject"
                href="https://github.com/LaszloF5/advent-calendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code in Github:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
              <a
                className="visiteProject"
                href="https://laszlof5.github.io/advent-calendar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit this site:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
            </li>
            <li className="project-list-li">
              <span className='project-span'>Project 3</span>
              <img
                className="project-img"
                src={`${process.env.PUBLIC_URL}/project3.png`}
                alt="Kitchen system web application"
              />
              <a
                className="visiteProject"
                href="https://github.com/LaszloF5/kitchen-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code in Github:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
              <a
                className="visiteProject"
                href="https://laszlof5.github.io/kitchen-system/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visite this site:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
            </li>
            <li className="project-list-li">
              <span className='project-span'>Project 4</span>
              <img
                className="project-img"
                src={`${process.env.PUBLIC_URL}/project4.png`}
                alt="Cleaning service web application"
              />
              <a
                className="visiteProject"
                href="https://github.com/LaszloF5/bookstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code in Github:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
              <a
                className="visiteProject"
                href="https://laszlof5.github.io/bookstore/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visite this site:
                <img
                  className="right-arrow"
                  src={`${process.env.PUBLIC_URL}/right-arrow.png`}
                  alt="right arrow"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
