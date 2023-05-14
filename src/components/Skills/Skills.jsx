import React from "react";
import "./Skills.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Skills() {
  return (
    <section className="section section-white" id="skills">
      <div className="skils__container container">
        <div className="section__title-contaniner">
          <h2 className="section__title ">What Skills I have</h2>
          <h3 className="section__subtitle">My experiences</h3>
        </div>

        <Swiper
          className="skills__icons"
          spaceBetween={24}
          navigation={true}
          slidesPerView={8}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            642.5: {
              slidesPerView: 3,
            },
            896.5: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1112.5: {
              slidesPerView: 6,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
        >
          <SwiperSlide className="icon">
            <i className="bx bxl-mongodb"></i>
            <h4>mongodb</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-firebase"></i>
            <h4>firebase</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-css3"></i>
            <h4>css</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-react"></i>
            <h4>redux</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-nodejs"></i>
            <h4>nodejs</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-github"></i>
            <h4>github</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-javascript"></i>
            <h4>javascript</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-git"></i>
            <h4>git</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-html5"></i>
            <h4>html</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-aws"></i>
            <h4>aws</h4>
          </SwiperSlide>
          <SwiperSlide className="icon">
            <i className="bx bxl-tailwind-css"></i>
            <h4>taildwind-css</h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
