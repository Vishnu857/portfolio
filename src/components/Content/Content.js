import React from "react";

import { Element, Link } from "react-scroll";
import "./Content.css";
const Content = () => {
  return (
    <Element className="content" id="about">
      <img
        src="https://drive.google.com/uc?export=download&id=1eNKIxFAF9iaH4hb3EVRh-VN7VhLrvL_I"
        alt=""
      />
      <div className="grp">
        <div className="text">
          <h1>Mr.TONY MADHAN</h1>
          <p>WEB DEVELOPER</p>
          <div className="btngrp">
            <a href="https://drive.google.com/uc?export=download&id=16RULNkX2kKIHPR9fH_wNR29S8bS1bzEK">
              <button type="button" className="button1">
                {" "}
                DOWNLOAD RESUME{" "}
              </button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
              <button className="button2">MY WORKS</button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Content;
