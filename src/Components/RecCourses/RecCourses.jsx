import React from "react";
import "../RecCourses/RecCourses.css";
import Courses_Data from "../../assets/Courses_Data.js";

const RecCourses = () => {
  return (
    <div className="recCourses-container">
      <div className="recCourses-title">
        <h1>Recommended Courses</h1>
      </div>
      <div className="courses-list">
        <li>DSA</li>
        <li>React</li>
        <li>Andriod</li>
        <li>Javascript</li>
        <li className="oopItem">OOP</li>
      </div>
    </div>
  );
};
const ReactCourseBox = () => {
  return (
    <>
      <div className="courses-container">
        {Courses_Data.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.courseName} />
            <h3>{course.courseName}</h3>
            <a href={course.link} target="_blank">
              <p className="course-desc">{course.courseDescription}</p>
            </a>
            <p className="rating">Rating: {course.rating}</p>
          </div>
        ))}
      </div>
      <hr className="recCourses-hr" />
    </>
  );
};

export default RecCourses;
export { ReactCourseBox };
