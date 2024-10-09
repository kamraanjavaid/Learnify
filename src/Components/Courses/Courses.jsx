import React from "react";
import "../Courses/Courses.css";
import dsa_courses from "../../assets/dsa_courses";
import javascript_courses from "../../assets/javascript_courses";
import database_courses from "../../assets/database_courses";

const Courses = () => {
  return (
    <>
      <div className="courses-box">
        <div className="courses-title">
          <h1>Data Structure & Algorithm</h1>
          <p>See All</p>
        </div>

        <div className="dsa-container">
          {dsa_courses.map((dsa, index) => {
            return (
              <>
                <div className="dsa-course-card">
                  <img src={dsa.image} alt="" />
                  <h3 key={index}>{dsa.title}</h3>
                  <p>{dsa.description}</p>
                  <button>Rating {dsa.rating}</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/*Javascript Courses */}
      <div className="courses-box">
        <div className="courses-title">
          <h1>Javascript</h1>
          <p>See All</p>
        </div>

        <div className="dsa-container">
          {javascript_courses.map((js, index) => {
            return (
              <>
                <div className="dsa-course-card" key={index}>
                  <img src={js.image} alt="" />
                  <h3 key={index}>{js.title}</h3>
                  <p>{js.description}</p>
                  <button>Rating {js.rating}</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* DataBase course */}
      <div className="courses-box">
        <div className="courses-title">
          <h1>Database</h1>
          <p>See All</p>
        </div>

        <div className="dsa-container">
          {database_courses.map((db, index) => {
            return (
              <>
                <div className="dsa-course-card" key={index}>
                  <img src={db.image} alt="" />
                  <h3 key={index}>{db.title}</h3>
                  <p>{db.description}</p>
                  <button>Rating {db.rating}</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <hr className="courses-hr" />
    </>
  );
};

export default Courses;
