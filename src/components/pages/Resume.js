import cv from "../../assets/img/CV.jpg";

const Resume = () => {
  return (
    <section className="main resume">
      <a href={cv} className="btn download" download>
        Download CV
      </a>
      <img src={cv} alt="resume" />
    </section>
  );
};

export default Resume;
