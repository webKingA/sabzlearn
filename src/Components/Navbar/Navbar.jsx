import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [showicon, setShowIcon] = useState(false);
  let [width, setWidth] = useState(window.innerWidth);
  let [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    if (width <= 750) {
      setShowIcon(true);
    }
    if (width > 750) {
      setShowIcon(false);
    }
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  let ulRef = useRef();

  function barsHandler(e) {
    ulRef.current.classList.add("active");
    setBarsActive(!barsActive);
  }

  function closeHandler() {
    ulRef.current.classList.remove("active");
    setBarsActive(!barsActive);
  }

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__bars">
          <FaBars onClick={(e) => barsHandler(e)} />
          <img src="./images/logo/Logo.png" alt="" />
          <AiOutlineClose
            className={barsActive == false ? "show-icon-close" : "closeIcon"}
            onClick={closeHandler}
          />
        </div>
        <div className="navbar__wrapper__menu">
          <div className="navbar__wrapper__menu__img">
            <img src="./images/logo/Logo.png" alt="" />
          </div>
          <div className="navbar__wrapper__menu__list" ref={ulRef}>
            <ul>
              <Link to="/" onClick={closeHandler}>
                صفحه اصلی
              </Link>
              <Link
                to="/category-info/frontend"
                className="link__front"
                onClick={closeHandler}
              >
                فرانت اند
                <FiChevronDown />
                <ul className="ul__front">
                  <Link to="/">آموزش Html</Link>
                  <Link to="/">آموزش Css</Link>
                  <Link to="/">آموزش Flexbox</Link>
                </ul>
              </Link>
              <Link
                to="/category-info/security"
                className="link__security"
                onClick={closeHandler}
              >
                امنیت
                <FiChevronDown />
                <ul className="ul__security">
                  <Link to="/">نقشه راه ورود به دنیای امنیت</Link>
                  <Link to="/">شبکه با گرایش امنیت</Link>
                  <Link to="/">لینوکس با گرایش امنیت</Link>
                </ul>
              </Link>
              <Link
                to="/category-info/articles"
                className="link__articles"
                onClick={closeHandler}
              >
                مقالات
                <FiChevronDown />
                <ul className="ul__articles">
                  <Link to="/">اچ تی ام ال</Link>
                  <Link to="/">بوت استرپ</Link>
                  <Link to="/">پروژه های برنامه نویسی</Link>
                </ul>
              </Link>
              <Link
                to="/category-info/python"
                className="link__python"
                onClick={closeHandler}
              >
                پایتون
                <FiChevronDown />
                <ul className="ul__python">
                  <Link to="/">دوره آموزش پایتون</Link>
                  <Link to="/">پروژه های کاربردی با پایتون</Link>
                  <Link to="/">ترفند های کاربردی پایتون</Link>
                </ul>
              </Link>
              <Link to="/category-info/soft-skills" onClick={closeHandler}>
                مهارت های نرم
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar__wrapper__icons">
          <HiSearch />
          <Link to="/shop">
            <MdShoppingCart />
          </Link>
          <span>
            {showicon == true ? <AiOutlineUser /> : "محمد امین سعیدی راد"}
            <ul className="navbar__wrapper__icons__list">
              <Link to="/">داشبورد</Link>
              <Link to="/">خریداری شده</Link>
              <Link to="/">خروج</Link>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
