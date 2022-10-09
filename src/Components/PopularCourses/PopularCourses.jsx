import React from "react";
import "./PopularCourses.css";
import CourseBox from "../CourseBox/CourseBox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function PopularCourses() {
  return (
    <div className="popularcourse__container">
      <div className="popularcourse__wrapper__text">
        <h3>محبوب ترین دوره ها</h3>
      </div>
      <div className="popularcourse__wrapper">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            850: {
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
