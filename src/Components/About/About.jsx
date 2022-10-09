import React from 'react';
import './About.css';
import AboutBox from '../AboutBox/AboutBox';

export default function About() {
    return (
        <div className='about__container'>
            <div className="about__wrapper">
                <div className='about__wrapper__text'>
                    <h3>ما چه کمکی بهتون میکنیم؟</h3>
                    <p>از آنجایی که اکادمی سبزلرن یک آکادمی خصوصی است</p>
                </div>
                <div className='about__wrapper__box'>
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                    <AboutBox />
                </div>
            </div>
        </div>
    )
}
