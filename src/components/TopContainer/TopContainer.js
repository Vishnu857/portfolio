import React from "react";
import "./TopContainer.css";
import SkillContainer from "../SkillContainer/SkillContainer";
import Content from "../Content/Content";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Contact from "../Contact/Contact";
const TopContainer = () => {
  return (
    <div className="topContent">
      <Content />
      <SkillContainer />
      <ProjectContainer/>
      <Contact/>
    </div>
  );
};

export default TopContainer;
