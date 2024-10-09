import React from "react";
import "../Hero/Hero.css";
import img from "../../assets/mainImg.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h2>Unlock Your Potential with Interactive Learning</h2>
          <p>
            Start learning with engaging lessons and interactive quizzes,
            tailored for you.
          </p>
          <button>Get Started Now</button>
        </div>

        <div className="hero-right">
          <img src={img}></img>
        </div>
      </div>
      <hr className="hero-hr" />
    </>
  );
};

export default Hero;
