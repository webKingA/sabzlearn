import React from "react";
import "./PresellCourses.css";
import CourseBox from "../CourseBox/CourseBox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function PresellCourses() {
  return (
    <div className="persellcourses__container">
      <div className="percellcourses__wrapper__text">
        <h3>دوره های در حال پیش فروش</h3>
      </div>
      <div className="percellcourses__wrapper__slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
