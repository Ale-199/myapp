import React from "react";
import "./Home.css";
import bg2 from "../../assets/bg2.png";
import me from "../../assets/me.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const transition = { type: "spring", duration: 4 };
  //Create Ref Element
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd", "BackEnd", "FullStack"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 100,
      showCursor: false,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="section-white" >
      <div className="home__container container" id="home" >
        {/* left side */}
        <div className="home__left">
          <img src={bg2} alt="" className="bg2" />
          <div className="intro">
            <h2>Hello I'm</h2>
            <h1>Alejandro</h1>
            <h1 className="line">
              <span ref={el} className="home__developer"></span>
            </h1>
            <h3>
              I am obsessed with web development and would love to hear your
              ideas.
            </h3>
          </div>
          <button className="btn home__btn">Download CV</button>
        </div>

        {/* right sie */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          className="home__right"
        >
          <img src={me} alt="" className="me" />
        </motion.div>
      </div>
    </section>
  );
}
