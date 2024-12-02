import React from "react";
import "../css/About.css";

export default function About() {
  const age = 27;
  const email = "fazekaslaszlo31@gmail.com";
  const language = "Hungarian, English";

  return (
    <div className="second-container">
      <div className="content2">
        <div className="circle2 content2-top-left"></div>
        <div className="circle2 content2-bottom-right"></div>
        <h2 className="about-h2">About</h2>
        <section className="skill-container">
          <h3 className="about-3">My active skillset</h3>
          <div className="img-container">
            <img
              className="skill-icon html"
              src={process.env.PUBLIC_URL + "/html-5.png"}
              alt="html"
            />
            <p>html</p>
          </div>
          <div className="img-container">
            <img
              className="skill-icon css"
              src={process.env.PUBLIC_URL + "/css-3.png"}
              alt="css"
            />
            <p>css</p>
          </div>
          <div className="img-container">
            <img
              className="skill-icon js"
              src={process.env.PUBLIC_URL + "/js.png"}
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div className="img-container">
            <img
              className="skill-icon react"
              src={process.env.PUBLIC_URL + "/react.png"}
              alt="React"
            />
            <p>React</p>
          </div>
        </section>
        <section className="info-container">
          <h3 className="about-3">Basic information</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Languages:</td>
                <td>{language}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
