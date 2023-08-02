import React from "react";

import { Element, Link } from "react-scroll";
import "./Content.css";
const Content = () => {
  return (
    <Element className="content" id="about">
      <img
        src="https://drive.google.com/uc?export=view&id=1Tr4DGgSPmPWxx4Fb6i-4fgx_IWzAjyQn"
        alt=""
      />
      <div className="grp">
        <div className="text">
          <h1>Mr.BALAVISHNU</h1>
          <p>WEB DEVELOPER</p>
          <div className="btngrp">
            <a
              href= "https://drive.google.com/uc?export=download&id=1g7sIeIy6_YqgQBYdCPK8_xPGCllqnFas"
              Download
            >
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
