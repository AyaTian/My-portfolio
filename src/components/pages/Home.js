import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import personImg from "../../assets/img/profile.png";
import Contact from "../Contact";

const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Yahan Tian</h1>
          <h3>
            I'm a <span>Programmer</span>
          </h3>
          <p>
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <div className="social-media">
            <Link to="https://github.com/AyaTian">
              <GoMarkGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/yahan-tian-a24aba179/">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>

        <div className="home-img">
          <img src={personImg} alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={personImg} alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <p>
            Hi Everyone, I am <span>Yahan Tian </span>from China and now living
            in Netherland. I am a Full-stack developer.
          </p>
          <p>Apart from coding, some other activities that I love to do!</p>
          <ul>
            <li>
              <span>
                <FaRegHandPointRight />
              </span>
              &nbsp; Playing Badminton
            </li>
            <li>
              <span>
                <FaRegHandPointRight />
              </span>
              &nbsp; Cooking
            </li>
            <li>
              <span>
                <FaRegHandPointRight />
              </span>
              &nbsp; Travelling
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </Fragment>
  );
};

export default Home;
