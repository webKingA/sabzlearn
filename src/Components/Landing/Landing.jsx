import React, { useEffect } from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect/dist/core";
import { BiSearch } from "react-icons/bi";

export default function Landing() {
  useEffect(() => {
    var type = document.getElementById("type");

    var typewriter = new Typewriter(type, {
      loop: true,
    });

    typewriter
      .typeString("ما به هر قیمتی آموزش تولید نمیکنیم !")
      .pauseFor(2500)
      .deleteAll()
      .typeString("ما به هر قیمتی آموزش تولید نمیکنیم !")
      .pauseFor(2500)
      .start();
  });

  return (
    <div className="landing__container">
      <div className="landing__wrapper">
        <div className="landing__wrapper__text">
          <h3 id="type">ما به هر قیمتی آموزش تولید نمیکنیم !</h3>
          <p>
            با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن
          </p>
        </div>
        <div className="landing__wrapper__search">
          <div className="landing__wrapper__search__searchbar">
            <input
              type="search"
              id="search__landing"
              placeholder="چه چیزی دوست داری یاد بگیری ..."
            />
            <label htmlFor="search__landing">
              <BiSearch />
            </label>
          </div>
        </div>
        <div className="landing__wrapper__icons">
          <div className="landing__wrapper__icons__student">
            <img src="./images/student.jpg" alt="" />
            <p className="num">31071</p>
            <p className="p__nth2">کاربر توی سبزلرن ثبت نام کردن</p>
          </div>
          <div className="landing__wrapper__icons__book">
            <img src="./images/book.png" alt="" />
            <p className="num">40</p>
            <p className="p__nth2">دوره آموزشی داریم</p>
          </div>
          <div className="landing__wrapper__icons__timer">
            <img src="./images/timer.jpg" alt="" />
            <p className="num">31320</p>
            <p className="p__nth2">دقیقه آموزش تولید کردیم</p>
          </div>
        </div>
      </div>
    </div>
  );
}
