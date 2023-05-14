import React from "react";
import "./About.css";
import img1 from "../../assets/image.jpg";

export default function About() {
  return (
    <section className="section-blue section" id="about">
      <div className="about__container container">
        {/* left side */}
        <div className="about__left">
          <div className="about__me-image">
            <img src={img1} alt="img1" />
          </div>
        </div>

        {/* right side */}
        <div className="about__right">
          <div className="about__intro">
            <h1>
              About <span>Me</span>
            </h1>
            <h2>Full-stack Web Developer</h2>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              a placeat beatae dolores iste voluptatum consectetur magni
              laudantium ratione molestias vel voluptas maiores totam nemo
              corrupti laboriosam voluptatem aliquid veniam ullam eius,
              reiciendis impedit ipsa! Vitae, quibusdam! Exercitationem, sint
              mollitia.
            </h3>
          </div>

          <div className="about__details">
            <div className="info__detail">
              <h3>Name</h3>
              <h4>Alejandro</h4>
            </div>
            <div className="info__detail info__right">
              <h3>Education</h3>
              <h4>Centennial College</h4>
            </div>
            <div className="info__detail ">
              <h3>Email</h3>
              <h4>ale0720199@gmail.com</h4>
            </div>
            <div className="info__detail info__right">
              <h3>Employment</h3>
              <h4>Open</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
