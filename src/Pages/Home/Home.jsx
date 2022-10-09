import React from 'react'
import './Home.css';

import Header from '../../Components/Header/Header';
import Landing from '../../Components/Landing/Landing';
import Courses from '../../Components/Courses/Courses';
import About from '../../Components/About/About';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';

export default function Home() {
  return (
    <div className='home__pages'>
      <Header />
      <Landing />
      <Courses />
      <About />
      <PopularCourses />
    </div>
  )
}
