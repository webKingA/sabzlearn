import React from "react";
import "./Articles.css";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function Articles() {
  return (
    <div className="articler__container">
      <div className="articler__wrapper">
        <div className="articler__wrapper__text">
          <div className="articler__wrapper__text__right">
            <h3>جدیدترین مقاله ها</h3>
            <p>پیش به سوی ارتقای دانش</p>
          </div>
          <div className="articler__wrapper__text__left">
            <Link to="/articles">تمامی مقاله ها</Link>
            <HiArrowSmLeft />
          </div>
        </div>
        <div className="articler__wrapper__box">
          <ArticleBox
            img="./images/blog/1.jpg"
            title="نحوه نصب کتابخوانه در پایتون | آموزش نصب کتابخوانه پایتون"
            text="زبان پایتون مانند دیگر زبان های برنامه نویسی رایج ,دارای کتابخوانه های مختلفی برای تسریع ..."
            article='1'
          />
          <ArticleBox
            img="./images/blog/3.jpeg"
            title="بهترین سایت آموزش جاوااسکریپت"
            text=">زبان پایتون مانند دیگر زبان های برنامه نویسی رایج ,دارای کتابخوانه های مختلفی برای تسریع ..."
            article='2'
          />
          <ArticleBox
            img="./images/blog/4.png"
            title="سینک و اسینک"
            text=">زبان پایتون مانند دیگر زبان های برنامه نویسی رایج ,دارای کتابخوانه های مختلفی برای تسریع ..."
            article='3'
          />
        </div>
      </div>
    </div>
  );
}
