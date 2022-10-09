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
            <CourseBox
              img={"./images/courses/fareelancer.png"}
              title="تکنیک قیمت گذاری پروژه های فریلنسری"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="500"
              price="210000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox
              img={"./images/courses/js_project.png"}
              title="دوره جامعه پروژه محور جاوااسکریپت"
              teacher={"محمد امین سعیدی راد"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="14235"
              price="free"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox
              img={"./images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox
              img={"./images/courses/nodejs.png"}
              title="متخصص بک اند"
              teacher={"محمد امین سعیدی راد"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="43"
              price="2500000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox
              img={"./images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
