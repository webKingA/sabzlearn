import React from 'react';
import './ArticleBox.css';
import { Link } from 'react-router-dom';

export default function ArticleBox({img , title , text , article}) {
  return (
    <div className='articlebox__container'>
        <div className="articlebox__wrapper">
            <img src={img} alt="" />
            <h5>{title}</h5>
            <small>{text}</small>
            <Link to={`/articles/article${article}`}>بیشتر بخوانید</Link>
        </div>
    </div>
  )
}
