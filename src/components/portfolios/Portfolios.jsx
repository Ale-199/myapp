import React, { useState } from "react";
import "./Portfolio.css";
import Projects from "./Projects";

export default function Portfolios() {
  const [datas, setDatas] = useState(Projects);
  const [toggleState, setToggleState] = useState(0);

  const filteredProjects = (category) => {
    const updated = Projects.filter((curPro) => {
      return curPro.category === category;
    });

    setDatas(updated);
  };
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="section-blue section" id="projects">
      <div className="portfolio__container container">
        <div className="section__title-contaniner">
          <h2 className="section__title">Portfolios</h2>
          <h3 className="section__subtitle">My Previous Projects </h3>
        </div>

        <div className="portfolio__filter">
          <span onClick={() => setDatas(Projects)}>All</span>
          <span onClick={() => filteredProjects("MERN")}>MERN</span>
          <span onClick={() => filteredProjects("NEXTJS")}>Next JS</span>
          <span onClick={() => filteredProjects("HTML")}>HTML & CSS</span>
          <span onClick={() => filteredProjects("JS")}>JavaScript</span>
        </div>

        <div className="projects__container">
          {datas.map((data) => (
            <div className="project__card" key={data.id}>
              <img src={data.image} alt="" />
              <div className="layer">
                <h5>{data.title}</h5>
                <div className="layer-box">
                  <i class="bx bx-link-external"></i>
                  <p onClick={() => toggleTab(data.toggleState)}>
                    Check it out
                  </p>
                </div>
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
                      {data.learn1}
                    </li>
                    <li>
                      <i class="bx bx-edit-alt"></i>
                      {data.learn2}
                    </li>
                  </ul>
                  <div className="projects__btns">
                    <a href={data.githubLink} className="btn" target="_blank">
                      <i class="bx bxl-github"></i>Github
                    </a>
                    <a href={data.demoLink} className="btn" target="_blank">
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
