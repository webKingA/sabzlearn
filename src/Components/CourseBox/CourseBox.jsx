import React from 'react';
import './CourseBox.css';
import {FaChalkboardTeacher , FaUsers} from 'react-icons/fa';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function CourseBox({img , title , teacher , star , starfill , number , price , course}) {
  return (
    <div className='coursebox__container'>
        <div className="coursebox__wrapper">
            <img src={img} alt="" />
            <h3 className='padd--10 '>{title}</h3>
            <div className='coursebox__wrapper__score padd--10 '>
                <div className='coursebox__wrapper__score__one'>
                    <FaChalkboardTeacher />
                    <p>{teacher}</p>
                </div>
                <div className='coursebox__wrapper__score__two'>
                    <img src={star} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                    <img src={starfill} alt="" />
                </div>
            </div>
            <div className='coursebox__wrapper__price padd--10 '>
                <div className='coursebox__wrapper__price__right'>
                    <FaUsers />
                    <p>{number}</p>
                </div>
                <div className='coursebox__wrapper__price__left'>
                    {price == 'free' ? (
                        <p>رایگان</p>
                    ) : (
                        <p>{price}</p>
                    )}
                </div>
            </div>
            <span>
                <Link to={`/courses/${course}`}>مشاهده اطلاعات</Link>
                <HiOutlineArrowLeft />
            </span>
        </div>
    </div>
  )
}
