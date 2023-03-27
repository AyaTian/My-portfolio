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
            <p>
              This App was build with <em>React Basics & React Hooks</em>
            </p>
            <a href="https://github.com/AyaTian/food-app" className="btn">
              Github
            </a>
          </div>
          <div className="projects-box">
            <MdOutlineDashboard className="icon" />
            <h3>Todo App</h3>
            <p>
              I built this project with <em>React & TypeScript</em>
            </p>
            <a href="https://github.com/AyaTian/todo-app" className="btn">
              Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
