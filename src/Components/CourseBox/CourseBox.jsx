import React from 'react';
import './CourseBox.css';
import {FaChalkboardTeacher , FaUsers} from 'react-icons/fa';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function CourseBox() {
  return (
    <div className='coursebox__container'>
        <div className="coursebox__wrapper">
            <img src="./images/courses/fareelancer.png" alt="" />
            <h3 className='padd--10 '>تکنیک قیمت گذاری پروژه های فریلنسری</h3>
            <div className='coursebox__wrapper__score padd--10 '>
                <div className='coursebox__wrapper__score__one'>
                    <FaChalkboardTeacher />
                    <p>رضا دولتی</p>
                </div>
                <div className='coursebox__wrapper__score__two'>
                    <img src="./images/svgs/star.svg" alt="" />
                    <img src="./images/svgs/star_fill.svg" alt="" />
                    <img src="./images/svgs/star_fill.svg" alt="" />
                    <img src="./images/svgs/star_fill.svg" alt="" />
                    <img src="./images/svgs/star_fill.svg" alt="" />
                </div>
            </div>
            <div className='coursebox__wrapper__price padd--10 '>
                <div className='coursebox__wrapper__price__right'>
                    <FaUsers />
                    <p>500</p>
                </div>
                <div className='coursebox__wrapper__price__left'>
                    <p>1000000</p>
                </div>
            </div>
            <span>
                <Link to='/courses/freelanser'>مشاهده اطلاعات</Link>
                <HiOutlineArrowLeft />
            </span>
        </div>
    </div>
  )
}
