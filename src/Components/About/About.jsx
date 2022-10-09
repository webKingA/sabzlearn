import React from "react";
import "./About.css";
import AboutBox from "../AboutBox/AboutBox";
import { SiCoursera } from "react-icons/si";
import { FaLeaf, FaCrown } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <div className="about__wrapper__text">
          <h3>ما چه کمکی بهتون میکنیم؟</h3>
          <p>از آنجایی که اکادمی سبزلرن یک آکادمی خصوصی است</p>
        </div>
        <div className="about__wrapper__box">
          <AboutBox
            svg={<SiCoursera />}
            title="دوره های اختصاصی"
            text="با پشتیبانی و کیفیت بالا ارائه میده!"
          />
          <AboutBox
            svg={<FaLeaf />}
            title="اجازه تدریس"
            text="به هر مدرسی رو نمیده چون کیفیت براش مهمه !"
          />
          <AboutBox
            svg={<IoDiamond />}
            title="دوره پولی و رایگان"
            text="براش مهم نیس به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بدهد"
          />
          <AboutBox
            svg={<FaCrown />}
            title="اهمیت به کاربر"
            text="اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن آنها به بازار کار هست."
          />
        </div>
      </div>
    </div>
  );
}
