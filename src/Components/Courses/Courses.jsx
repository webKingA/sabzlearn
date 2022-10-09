import React from 'react';
import './Courses.css';
import {FcLeft} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import CourseBox from '../CourseBox/CourseBox';

export default function Courses() {
  return (
    <div className='courses__container'>
        <div className='courses__wrapper'>
            <div className='courses__wrapper__text'>
                <div className='courses__wrapper__text__right'>
                    <h3>جدیدترین دوره ها</h3>
                    <p>سکوی پرش شمابه سمت موفقیت</p>
                </div>
                <div className='courses__wrapper__text__left'>
                    <span>
                        <Link to='/courses'>تمامی دوره ها</Link>
                        <FcLeft />
                    </span>
                </div>
            </div>
            <div className='courses__wrapper__course'>
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
            </div>
        </div>
    </div>
  )
}
