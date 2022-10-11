import React from 'react';
import './Sort.css';
import {BiTable} from 'react-icons/bi';
import {MdSort} from 'react-icons/md';
import {BiSearchAlt2} from 'react-icons/bi';
import { useState } from 'react';

export default function Sort() {

    let [value , setValue] = useState('');

    function changeHandler (e) {
        setValue(e.target.value);
    }

  return (
    <div className='sort__container'>
        <div className="sort__wrapper">
            <div className='sort__wrapper__sorting'>
                <BiTable />
                <MdSort />
                <select>
                    <option value="مرتب سازی پیش فرض">مرتب سازی پیش فرض</option>
                    <option value="مرتب سازی بر اساس قیمت صعودی">مرتب سازی بر اساس قیمت صعودی</option>
                    <option value="مرتب سازی بر اساس نزولی">مرتب سازی بر اساس نزولی</option>
                </select>
            </div>
            <div className='sort__wrapper__searching'>
                <input type="text" id='sort__search' placeholder='جستجو دوره ...' value={value} onChange={(e) => changeHandler(e)} />
                <label htmlFor="sort__search">
                    <BiSearchAlt2 />
                </label>
            </div>
        </div>
    </div>
  )
}
