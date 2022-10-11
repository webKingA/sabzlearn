import React from "react";
import "./CoursePage.css";
import {
  AiFillHome,
  AiOutlineLeft,
  AiFillTwitterCircle,
  AiOutlineLink,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";

import { BiTimeFive } from "react-icons/bi";
import { BiTable } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

import { AiOutlineLineChart } from "react-icons/ai";

export default function CoursePage() {
  return (
    <div className="coursepage__container">
      <div className="coursepage__wrapper">
        <div className="coursepage__wrapper__roadmap">
          <p>
            <AiFillHome />
          </p>
          <span>
            <Link to="/">خانه</Link>
            <AiOutlineLeft />
          </span>
          <span>
            <Link to="/category-info/frontend">
              آموزش برنامه نویسی فرانت اند
            </Link>
            <AiOutlineLeft />
          </span>
          <span>
            <Link to="/course-info/js">دوره متخصص جاوااسکریپت</Link>
            <AiOutlineLeft />
          </span>
        </div>
        <div className="coursepage__wrapper__course--info-1">
          <div className="coursepage__wrapper__course--info-1__right">
            <small>آموزش برنامه نویسی فرانت اند</small>
            <h3>آموزش پروژه محور جاوااسکریپت</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="coursepage__wrapper__course--info-1__right__icons">
              <BsTelegram />
              <AiFillTwitterCircle />
              <BsFacebook />
            </div>
          </div>
          <div className="coursepage__wrapper__course--info-1__left">
            <img src="/images/courses/js_project.png" alt="" />
          </div>
        </div>
        <div className="coursepage__wrapper__course--info-2">
          <div className="coursepage__wrapper__course--info-2__otherinfo">
            <div className="otherinfo__wrapper__box__1">
              <div>
                <FaUserGraduate />
                <div>
                  <p>وضعیت دوره :</p>
                  <p>به اتمام رسیده</p>
                </div>
              </div>
              <div>
                <BiTimeFive />
                <div>
                  <p>مدت زمان دوره :</p>
                  <p>19 ساعت</p>
                </div>
              </div>
              <div>
                <BiTable />
                <div>
                  <p>آخرین بروزرسانی :</p>
                  <p>02/03/1401</p>
                </div>
              </div>
              <div>
                <AiOutlineUser />
                <div>
                  <p>روش پشتیبانی</p>
                  <p>آنلاین</p>
                </div>
              </div>
              <div>
                <BsInfoCircle />
                <div>
                  <p>پیش نیاز</p>
                  <p>Html Css</p>
                </div>
              </div>
              <div>
                <BsFillPlayFill />
                <div>
                  <p>نوع مشاهده</p>
                  <p>ضبط شده / آنلاین</p>
                </div>
              </div>
            </div>
            <div className="otherinfo__wrapper__box__2">
              <div>
                <AiOutlineLineChart />
                <small>درصد پیشرفت دوره 100%</small>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="otherinfo__wrapper__box__3">
              <h3></h3>
              <img src="" alt="" />
              <p></p>
              <h3></h3>
              <img src="" alt="" />
              <p></p>
              <div className="otherinfo__wrapper__box__3__links">
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="coursepage__wrapper__course--info-2__sidebar">
            <div className="coursepage__wrapper__course--info-2__sidebar__one">
              <div>
                <FaUserGraduate />
                <button>دانشجوی دوره هستید</button>
              </div>
            </div>
            <div className="coursepage__wrapper__course--info-2__sidebar__two">
              <div className="coursepage__wrapper__course--info-2__sidebar__two__top">
                <FaUserGraduate />
                <span>
                  تعداد دانشجو : <p>178</p>
                </span>
              </div>
              <div className="coursepage__wrapper__course--info-2__sidebar__two__down">
                <span className="coursepage__wrapper__course--info-2__sidebar__two__down__one">
                  <RiWechatLine />
                  <p>67 دیدگاه</p>
                </span>
                <span className="coursepage__wrapper__course--info-2__sidebar__two__down__two">
                  <GrView />
                  <p>14,237 بازدید</p>
                </span>
              </div>
            </div>
            <div className="coursepage__wrapper__course--info-2__sidebar__three">
              <div className="coursepage__wrapper__course--info-2__sidebar__three__top">
                <AiOutlineLink />
                <p>لینک کوتاه</p>
              </div>
              <div className="coursepage__wrapper__course--info-2__sidebar__three__down">
                <p>https://sabzlearn.ir/?p=117472</p>
              </div>
            </div>
            <div className="coursepage__wrapper__course--info-2__sidebar__four">
              <h5>سرفصل های دوره</h5>
              <p>
                برای مشاهده و یا دانلود دوره روی کلمه <Link to="/">لینک</Link>{" "}
                کلیک کنید
              </p>
            </div>
            <div className="coursepage__wrapper__course--info-2__sidebar__five">
              <h5>دوره های مرتبط</h5>
              <div className="coursepage__wrapper__course--info-2__sidebar__five__1">
                <img src="/images/courses/fareelancer.png" alt="" />
                <Link to={`/course-info/freelancer`}>
                  تعیین قیمت پروژه های فریلنسری
                </Link>
              </div>
              <div className="coursepage__wrapper__course--info-2__sidebar__five__2">
                <img src="/images/courses/jango.png" alt="" />
                <Link to={`/course-info/jango`}>متخصص جنگو</Link>
              </div>
              <div className="coursepage__wrapper__course--info-2__sidebar__five__3">
                <img src="/images/courses/js_project.png" alt="" />
                <Link to={`/course-info/js`}>دوره متخصص جاوااسکریپت</Link>
              </div>
              <div className="coursepage__wrapper__course--info-2__sidebar__five__4">
                <img src="/images/courses/nodejs.png" alt="" />
                <Link to={`/course-info/nodejs`}>متخصص نود جی اس</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
