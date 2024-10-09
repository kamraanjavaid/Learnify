import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import RecCourses, { ReactCourseBox } from "./Components/RecCourses/RecCourses";
import WhySection from "./Components/WhySection/WhySection";
import StudReview from "./Components/StudReview/StudReview";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Quiz from "./Components/Quiz/Quiz";
import Courses from "./Components/Courses/Courses";
import Login from "./Components/Login/Login";
import Chatbox from "./Components/Chatbox/Chatbox";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <RecCourses />
              <ReactCourseBox />
              <WhySection />
              <StudReview />
              <Footer />
            </>
          }
        />

        {/* Blogs Route */}
        <Route path="/blogs" element={<Blogs />} />

        {/* You can add more routes like Courses, Quiz, etc. */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dsaQuestions" element={<Quiz topic="dsa" />} />
        <Route path="/reactQuestions" element={<Quiz topic="react" />} />
        <Route path="/jsQuestions" element={<Quiz topic="js" />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbox" element={<Chatbox />} />
      </Routes>
    </div>
  );
};

export default App;
