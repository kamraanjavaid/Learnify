import React from "react";
import blog_data from "../../assets/blog_data.js";
import "../Blogs/Blogs.css";

const Blogs = () => {
  return (
    <>
      <div className="blog-container">
        {blog_data.map((blog, index) => (
          <div key={index} className="blogImage">
            <a href={blog.link} target="_blank">
              <img src={blog.image} alt={blog.heading} />
            </a>

            <div className="blog-data">
              <h2>
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  {blog.heading}
                </a>
              </h2>
              <h5>{blog.publish_date}</h5>
              <p>{blog.detail}</p>
            </div>
          </div>
        ))}
        <hr />
      </div>
    </>
  );
};

export default Blogs;
