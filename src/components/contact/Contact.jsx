import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  //animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  //emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_916q6z8",
        "template_yr3z1ac",
        form.current,
        "I2Z-ARA0HQDE2ovYq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.section
      className="section contact__section"
      id="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="container">
        <div className="section__title-contaniner">
          <h2 className="section__title">Contact Me</h2>
          <h3 className="section__subtitle">Get In Touch</h3>
        </div>

        <div className="contact__container">
          {/* left */}
          <div className="contact__left">
            <h1>Let's chat.</h1>
            <h1>Tell me about your ideas.</h1>
            <h3>
              Let's work something together! <i className="bx bx-cool"></i>
            </h3>
            <div className="contact__infos">
              <div className="contact__item">
                <i className="bx bx-envelope"></i>
                <div className="contact__item-tittle">
                  <h3>Mail me at</h3>
                  <a href="mailto:ale0720199@gmail.com">ale0720199@gmail.com</a>
                </div>
              </div>
              <div className="contact__item">
                <i className="bx bxl-whatsapp"></i>
                <div className="contact__item-tittle">
                  <h3>My WhatSapp is</h3>
                  <a href="https://wa.me/16473950832">+1 6473950832</a>
                </div>
              </div>
              <div className="contact__item">
                <i className="bx bxl-messenger"></i>
                <div className="contact__item-tittle">
                  <h3>My Messenger</h3>
                  <a href="https://m.me/alejandro.zheng.391">
                    Alejandro ZhengZheng
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="contact__right">
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please insert your name"
                />
              </div>
              <div className="contact__form-div">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please insert your email"
                />
              </div>
              <div className="contact__form-div contact__textarea">
                <label>Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="How can I help you"
                  className="contact__textarea"
                ></textarea>
              </div>
              <button className="btn contact__btn">
                Send
                <i className="bx bx-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
