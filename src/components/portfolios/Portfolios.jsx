import React, { useState } from "react";
import "./Portfolio.css";
import Projects from "./Projects";

export default function Portfolios() {
  const [datas, setData] = useState(Projects);
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="section-blue section" id="portfolio">
      <div className="portfolio__container container">
        <div className="section__title-contaniner">
          <h2 className="section__title">Portfolios</h2>
          <h3 className="section__subtitle">My Previous Projects </h3>
        </div>

        <div className="portfolio__filter">
          <span>All</span>
          <span>MERN</span>
          <span>Next JS</span>
          <span>HTML & CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="projects__container">
          {datas.map((data) => (
            <div className="project__card" key={data.id}>
              <img src={data.image} alt="" />
              <div className="layer">
                <h5>{data.title}</h5>
                <p onClick={() => toggleTab(data.toggleState)}>Check it out</p>
              </div>

              <div
                className={
                  toggleState === data.toggleState
                    ? "projects__modal active-modal"
                    : "projects__modal"
                }
              >
                <div className="projects__modal-content">
                  <i
                    class="bx bx-collapse-alt"
                    onClick={() => toggleTab(0)}
                  ></i>
                  <h2>{data.title}</h2>
                  <h3>{data.description}</h3>
                  <h3>What I have learn:</h3>
                  <ul>
                    <li>
                      <i class="bx bx-edit-alt"></i>
                      Lorem ipsum is placeholder text commonly
                    </li>
                    <li>
                      <i class="bx bx-edit-alt"></i>
                      Lorem ipsum is placeholder text commonly
                    </li>
                  </ul>
                  <div className="projects__btns">
                    <a href="" className="btn">
                      <i class="bx bxl-github"></i>Github
                    </a>
                    <a href="" className="btn">
                      <i class="bx bx-link-alt"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
