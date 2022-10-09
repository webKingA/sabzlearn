import React from 'react';
import './Articles.css';
import {Link} from 'react-router-dom';
import {HiArrowSmLeft} from 'react-icons/hi';
import ArticleBox from '../ArticleBox/ArticleBox';

export default function Articles() {
  return (
    <div className='articler__container'>
        <div className="articler__wrapper">
            <div className='articler__wrapper__text'>
                <div className='articler__wrapper__text__right'>
                    <h3>جدیدترین مقاله ها</h3>
                    <p>پیش به سوی ارتقای دانش</p>
                </div>
                <div className='articler__wrapper__text__left'>
                    <Link to='/articles'>تمامی مقاله ها</Link>
                    <HiArrowSmLeft/>
                </div>
            </div>
            <div className='articler__wrapper__box'>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
            </div>
        </div>
    </div>
  )
}