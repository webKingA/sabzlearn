import React from "react";
import "./CourseInfo.css";
import Header from "../../Components/Header/Header";
import CoursePage from "../../Components/CoursePage/CoursePage";
import Footer from '../../Components/Footer/Footer';

export default function CourseInfo() {
  return (
    <div className="courseinfo__container">
      <div className="courseinfo__wrapper">
        <Header />
        <CoursePage />
        <Footer />
      </div>
    </div>
  );
}
