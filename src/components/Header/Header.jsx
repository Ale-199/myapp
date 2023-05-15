import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  /*=============== Change Backgroup header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=============== Toggle Menu ===============*/
  const [showMenu, setShowMenu] = useState(false);
  //   const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="container nav">
        <h1>
          A<span>Z</span>Z.
        </h1>
        <div className={showMenu ? "small__nav show-nav" : "small__nav"}>
          <ul className="links">
            <li>
              <a href="#home">
                <i className="bx bx-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bx bx-male"></i>About
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bx bx-grid"></i>Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="bx bx-windows"></i>Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bx bx-mail-send"></i>Contact Me
              </a>
            </li>
          </ul>
          <i
            className="bx bx-cross nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-chevron-up-square "></i>
        </div>
      </nav>
    </header>
  );
}
