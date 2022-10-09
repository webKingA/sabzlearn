import React from "react";
import "./Courses.css";
import { FcLeft } from "react-icons/fc";
import { Link } from "react-router-dom";
import CourseBox from "../CourseBox/CourseBox";

export default function Courses() {
  return (
    <div className="courses__container">
      <div className="courses__wrapper">
        <div className="courses__wrapper__text">
          <div className="courses__wrapper__text__right">
            <h3>جدیدترین دوره ها</h3>
            <p>سکوی پرش شمابه سمت موفقیت</p>
          </div>
          <div className="courses__wrapper__text__left">
            <span>
              <Link to="/courses">تمامی دوره ها</Link>
              <FcLeft />
            </span>
          </div>
        </div>
        <div className="courses__wrapper__course">
          <CourseBox
            img={"./images/courses/fareelancer.png"}
            title="تکنیک قیمت گذاری پروژه های فریلنسری"
            teacher={"رضا دولتی"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="500"
            price="210000"
            course='freelancer'
          />
          <CourseBox
            img={"./images/courses/js_project.png"}
            title="دوره جامعه پروژه محور جاوااسکریپت"
            teacher={"محمد امین سعیدی راد"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="14235"
            price="free"
            course='js'
          />
          <CourseBox
            img={"./images/courses/youtuber.png"}
            title="متخصص یوتوب"
            teacher={"قدیر یلمه"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="10"
            price="3000000"
            course='youtube'
          />
          <CourseBox
            img={"./images/courses/nodejs.png"}
            title="متخصص بک اند"
            teacher={"محمد امین سعیدی راد"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="43"
            price="2500000"
            course='nodejs'
          />
          <CourseBox
            img={"./images/courses/python.png"}
            title="متخصص پایتون"
            teacher={"رضا دولتی"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="135"
            price="free"
            course='python'
          />
          <CourseBox
            img={"./images/courses/jango.png"}
            title="دوره متخصص جنگو"
            teacher={"رضا دولتی"}
            starfill="./images/svgs/star_fill.svg"
            star={"./images/svgs/star.svg"}
            number="231"
            price="180000"
            course='jango'
          />
        </div>
      </div>
    </div>
  );
}
