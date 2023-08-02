import React from "react";
import { Element } from "react-scroll";
import "./ProjectContainer.css";
import Project from "../Projects/Project";
const ProjectContainer = () => {
  const projects = [
    {
      img: "https://drive.google.com/uc?export=view&id=1diQZq3hv12JeTH7FG1dYPnAFKKvWdx6S",
      title: "SMART ATTENDANCE SYSTEM",
      desc: "IN THE PROJECT THERE IS A CAMERA WHICH CAPTURES THE FACE OF A PERSON AND PREDICT THE PERSON NAME THEN GIVES A VOICE GREETING AND STORE THE ATTENDANCE OF THE PERSON",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1sQXv95YMkrtMhrp2CBZfpCIp1dRDEW3q",
      title: "MOVIE REVIEW SITE",
      desc: "IN THE PROJECT I HAD CREATED A FULL STACK WEBSITE WHICH HAS SOME MOVIES ITS TRAILER AND REVIEW SECTION WHERE USER CAN COMMENT ON THE MOVIE REVIEWS",
    },
    {
      img: "https://drive.google.com/uc?export=view&id=1tJzjfbTuP6i6eWIKnF71pMWITT_qrl7m",
      title: "BLOG SITE",
      desc: "IN PROGRESS",
    },
  ];
  return (
    <Element id="projects">
      <div className="projectContainer">
        <h4>PROJECTS</h4>
        <p>HERE ARE SOME OF THE PROJECTS I HAD DONE</p>
      </div>
      <div className="project_container">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
