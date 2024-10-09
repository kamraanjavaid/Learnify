import React, { useState } from "react";
import "../StudReview/StudReview.css";
import img1 from "../../assets/profilePic.png";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img3.jpg";

const reviews = [
  {
    id: 1,
    name: "Kamran J",
    country: "Pakistan",
    review:
      "Great course! Learned full stack development with hands-on projects and helpful instructors. Now confident to apply for jobs. Highly recommend!",
    img: img1,
  },
  {
    id: 2,
    name: "Ali A",
    country: "Saudi Arabia",
    review:
      "The instructors were very supportive, and the projects helped me apply my skills in real-world scenarios. Highly recommended for serious learners!",
    img: img2,
  },
  {
    id: 3,
    name: "Sara S",
    country: "UAE",
    review:
      "An excellent platform! The content was well-organized, and the feedback from the mentors helped me improve my coding skills. Would definitely recommend!",
    img: img3,
  },
];

const StudReview = () => {
  const [activeReview, setActiveReview] = useState(reviews[0]);

  const handleProfileClick = (review) => {
    setActiveReview(review);
  };

  return (
    <>
      <div className="review-container">
        <div className="review-title">
          <h1>What Our Students Say About Us</h1>
        </div>

        <div className="review-profile-pic">
          {reviews.map((review) => (
            <img
              key={review.id}
              src={review.img}
              alt={review.name}
              className={review.id === 1 ? "img2" : "img1"}
              onClick={() => handleProfileClick(review)} // Click handler to update the review
              style={{ cursor: "pointer" }} // Indicate clickable images
            />
          ))}
        </div>

        <div className="review-box">
          <h3>{activeReview.name}</h3>
          <p style={{ color: "gray", marginBottom: "5px" }}>
            {activeReview.country}
          </p>
          <p>"{activeReview.review}"</p>
        </div>
      </div>
      <hr className="studReview-hr" />
    </>
  );
};

export default StudReview;
