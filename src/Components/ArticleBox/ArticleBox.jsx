import React from 'react';
import './ArticleBox.css';
import { Link } from 'react-router-dom';

export default function ArticleBox() {
  return (
    <div className='articlebox__container'>
        <div className="articlebox__wrapper">
            <img src="./images/blog/1.jpg" alt="" />
            <h5>نحوه نصب کتابخوانه در پایتون | آموزش نصب کتابخوانه پایتون</h5>
            <small>زبان پایتون مانند دیگر زبان های برنامه نویسی رایج ,دارای کتابخوانه های مختلفی برای تسریع ...</small>
            <Link to='/articles/article1'>بیشتر بخوانید</Link>
        </div>
    </div>
  )
}
