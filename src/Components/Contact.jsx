import React from "react";
import "../css/Contact.css";

export default function Contact() {
  return (
    <div className="fourth-container">
      <div className="content4">
        <div className="circle4 content4-top-left"></div>
        <div className="circle4 content4-bottom-right"></div>
        <h2 className="contact-h2">Contact</h2>
        <div className="contact-container">
          <section className="contact-info">
            <h3>Email:</h3>
            <p className="contact-p">
              <img
                className="contact-icon"
                src={process.env.PUBLIC_URL + "/mail-icon.png"}
                alt='mail icon'/>
              fazekaslaszlo31@gmail.com
            </p>
          </section>
          <section className="contact-info">
            <h3>Github:</h3>
                <a className="github-a" href="https://github.com/LaszloF5" target="_blank"><img
                className="contact-icon"
                src={process.env.PUBLIC_URL + "/github-icon.png"}
                alt="github icon"
              />https://github.com/LaszloF5</a>
          </section>
        </div>
      </div>
    </div>
  );
}
