import React from "react";

import { Element, Link } from "react-scroll";
import "./Content.css";
const Content = () => {
  return (
    <Element className="content" id="about">
      <img
        src="https://drive.google.com/uc?export=download&id=1UHCYJ078PzLzFLsKr_BbV5RfodCrdpp8"
        alt=""
      />
      <div className="grp">
        <div className="text">
          <h1>Mr.Balavishnu</h1>
          <p>WEB DEVELOPER</p>
          <div className="btngrp">
            <a href="https://drive.google.com/uc?export=download&id=15C69kdX3YO8dnqPiwEj7MzvmwNd15DzW">
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
