import React from 'react';
import './AboutBox.css';
import {SiCoursera} from 'react-icons/si';

export default function AboutBox() {
    return (
        <div className='aboutbox__container'>
            <div className="aboutbox__wrapper">
                <span className='aboutbox__wrapper__logo'>
                    <SiCoursera />
                </span>
                <span className='aboutbox__wrapper__text'>
                    <h5>دوره های اختصاصی</h5>
                    <small>با پشتیبانی و کیفیت بالا ارائه میده!</small>
                </span>
            </div>
        </div>
    )
}
