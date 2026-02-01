import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  const educationData = ResumeApi.filter((val) => val.category === "education");

  const experienceData = ResumeApi.filter(
    (val) => val.category === "experience"
  );

  return (
    <section className="Resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
          <h1>My Resume</h1>
          <button className="homebtn">
            <a rel="noreferrer" target="_blank" href="./image/CV.pdf">
              My CV
            </a>
          </button>
        </div>

        <div className="content-section mtop d_flex">
          {/* EDUCATION */}
          <div className="left">
            <div className="heading">
              <h1>Education</h1>
            </div>

            <div className="content">
              {educationData.map((val, id) => (
                <Card
                  key={id}
                  title={val.title}
                  year={val.year}
                  rate={val.rate}
                  desc={val.desc}
                />
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="left">
            <div className="heading">
              <h1>Job Experience</h1>
            </div>

            <div className="content">
              {experienceData.map((val, index) => (
                <Card
                  key={index}
                  title={val.title}
                  year={val.year}
                  rate={val.rate}
                  desc={val.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
