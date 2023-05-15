import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="section-blue footer__section">
      <div className="container footer__container">
        <h2>Alejandro ZhengZheng</h2>

        <ul className="footer__links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__icons">
          <a href="#">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
        <h3>© Copyright © 2023 by Alejandro ZhengZheng All Rights Reserved.</h3>
      </div>
    </section>
  );
}
