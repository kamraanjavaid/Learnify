import React from "react";
import "../WhySection/WhySection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPersonChalkboard,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const WhySection = () => {
  return (
    <>
      <div className="whyContainer">
        <div className="why-title">
          <h1>Why You'll Learn With SKJ-Learning</h1>
        </div>

        <div className="three-whys">
          <div className="box">
            <FontAwesomeIcon className="faIcon" icon={faBook} />{" "}
            <h3>100K Online Courses</h3>
            <p>This will help you to gain the experience</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="faIcon" icon={faPersonChalkboard} />{" "}
            <h3>Expert Instructors</h3>
            <p>This will help you to gain the experience</p>
          </div>

          <div className="box">
            <FontAwesomeIcon className="faIcon" icon={faClock} />{" "}
            <h3>Lifetime Access</h3>
            <p>This will help you to gain the experience</p>
          </div>
        </div>
      </div>
      <hr className="why-hr" />
    </>
  );
};

export default WhySection;
