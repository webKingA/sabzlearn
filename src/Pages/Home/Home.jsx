import React from 'react'
import './Home.css';

import Header from '../../Components/Header/Header';
import Landing from '../../Components/Landing/Landing';
import Courses from '../../Components/Courses/Courses';
import About from '../../Components/About/About';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import PresellCourses from '../../Components/PresellCourses/PresellCourses';
import Articles from '../../Components/Articles/Articles';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div className='home__pages'>
      <Header />
      <Landing />
      <Courses />
      <About />
      <PopularCourses />
      <PresellCourses />
      <Articles />
      <Footer />
    </div>
  )
}
