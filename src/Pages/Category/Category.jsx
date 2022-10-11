import React from "react";
import "./Category.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Sort from "../../Components/Sort/Sort";
import CourseBox from "../../Components/CourseBox/CourseBox";

export default function Category() {
  let params = useParams();

  return (
    <div className="category__container">
      <div className="category__wrapper">
        <Header />
        <Sort />
        {params.categoryName == "frontend" && (
          <section className="category__frontend sort">
            <CourseBox
              img={"/images/courses/fareelancer.png"}
              title="تکنیک قیمت گذاری پروژه های فریلنسری"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="500"
              price="210000"
              course="freelancer"
              category="frontend"
            />
            <CourseBox
              img={"/images/courses/js_project.png"}
              title="دوره جامعه پروژه محور جاوااسکریپت"
              teacher={"محمد امین سعیدی راد"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="14235"
              price="free"
              course="js"
              category="frontend"
            />
            <CourseBox
              img={"/images/courses/fareelancer.png"}
              title="تکنیک قیمت گذاری پروژه های فریلنسری"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="500"
              price="210000"
              course="freelancer"
              category="frontend"
            />
            <CourseBox
              img={"/images/courses/js_project.png"}
              title="دوره جامعه پروژه محور جاوااسکریپت"
              teacher={"محمد امین سعیدی راد"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="14235"
              price="free"
              course="js"
              category="frontend"
            />
          </section>
        )}
        {params.categoryName == "security" && (
          <section className="category__security sort">
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
          </section>
        )}
        {params.categoryName == "articles" && (
          <section className="category__security sort">
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
          </section>
        )}
        {params.categoryName == "python" && (
          <section className="category__security sort">
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
            <CourseBox
              img={"/images/courses/python.png"}
              title="متخصص پایتون"
              teacher={"رضا دولتی"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="135"
              price="free"
              course="python"
              category="python"
            />
          </section>
        )}
        {params.categoryName == "soft-skills" && (
          <section className="category__security sort">
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
            <CourseBox
              img={"/images/courses/youtuber.png"}
              title="متخصص یوتوب"
              teacher={"قدیر یلمه"}
              starfill="./images/svgs/star_fill.svg"
              star={"./images/svgs/star.svg"}
              number="10"
              price="3000000"
              course="youtube"
              category="youtube"
            />
          </section>
        )}
        <Footer />
      </div>
    </div>
  );
}
