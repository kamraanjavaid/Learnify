import React, { useRef, useState } from "react";
import "../NavBar/Navbar.css";
import { Link } from "react-router-dom";
import menu_close from "../../assets/menu_close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu(); // Close the menu when a link is clicked (optional)
  };

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <p>SKJ-Learnify</p>
      </div>
      <FontAwesomeIcon
        className="nav-mob-open"
        onClick={openMenu}
        icon={faBars}
      />
      <div className="nav-list" ref={menuRef}>
        <FontAwesomeIcon
          icon={faXmark}
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            style={{
              textDecoration: activeLink === "home" ? "underline" : "none",
              color: activeLink === "home" ? "#400090" : "black",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            onClick={() => handleLinkClick("courses")}
            style={{
              textDecoration: activeLink === "courses" ? "underline" : "none",
              color: activeLink === "courses" ? "#400090" : "black",
            }}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            onClick={() => handleLinkClick("blogs")}
            style={{
              textDecoration: activeLink === "blogs" ? "underline" : "none",
              color: activeLink === "blogs" ? "#400090" : "black",
            }}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/chatbox"
            onClick={() => handleLinkClick("chatbox")}
            style={{
              textDecoration: activeLink === "chatbox" ? "underline" : "none",
              color: activeLink === "chatbox" ? "#400090" : "black",
            }}
          >
            Chatbox
          </Link>
        </li>
        <li>
          <Link
            to="/quiz"
            onClick={() => handleLinkClick("quiz")}
            style={{
              textDecoration: activeLink === "quiz" ? "underline" : "none",
              color: activeLink === "quiz" ? "#400090" : "black",
            }}
          >
            Quiz
          </Link>
        </li>
      </div>

      <div className="login-signup-btn">
        <Link to="/login" onClick={() => handleLinkClick("login")}>
          <button className="loginBtn">Login</button>
        </Link>
        <button className="signUpBtn">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
