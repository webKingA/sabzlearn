import React from 'react';
import './Topbar.css';
import {Link} from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar__container'>
        <div className='topbar__wrapper'>
            <div className='topbar__wrapper__right'>
                <ul>
                    <Link to='/course/html'>آموزش Html</Link>
                    <Link to='/course/css'>آموزش Css</Link>
                    <Link to='/course/js'>آموزش Js</Link>
                    <Link to='/course/bootstrap'>آموزش Bootstrap</Link>
                    <Link to='/course/python'>آموزش Python</Link>
                    <Link to='/course/react'>آموزش React</Link>
                    <p>20000 تومان</p>
                </ul>
            </div>
            <div className='topbar__wrapper__left'>
                <span>
                    Sabzlearn@gmail.com
                    <i className='fa fa-envelope'></i>
                </span>
                <span>
                    09921558293
                    <i className='fa fa-phone'></i>
                </span>
            </div>
        </div>
    </div>
  )
}
