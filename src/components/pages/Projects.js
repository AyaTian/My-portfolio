import React from "react";
import { MdOutlineFoodBank, MdOutlineDashboard } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="heading">
          My <span>projects</span>
        </h2>
        <div className="projects-container">
          <div className="projects-box">
            <MdOutlineFoodBank className="icon" />
            <h3>Food App</h3>
            <p>A traditonal japanese resterant</p>
            <a href="https://github.com/AyaTian/food-app" className="btn">
              Github
            </a>
          </div>
          <div className="projects-box">
            <MdOutlineDashboard className="icon" />
            <h3>Dashboard</h3>
            <p>A dashboard app</p>
            <a href="https://github.com/AyaTian/food-app" className="btn">
              Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
