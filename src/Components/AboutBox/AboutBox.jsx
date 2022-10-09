import React from 'react';
import './AboutBox.css';
import { SiCoursera } from "react-icons/si";
import { FaLeaf, FaCrown } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

export default function AboutBox({svg , title , text}) {
    return (
        <div className='aboutbox__container'>
            <div className="aboutbox__wrapper">
                <span className='aboutbox__wrapper__logo'>
                    {svg}
                </span>
                <span className='aboutbox__wrapper__text'>
                    <h5>{title}</h5>
                    <small>{text}</small>
                </span>
            </div>
        </div>
    )
}
