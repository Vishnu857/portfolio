import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import { LinkedIn, Instagram } from "@mui/icons-material";
import "./Contact.css";
const Contact = () => {
  return (
    <Element className="contacts" id="contact">
      <h4>Contacts</h4>
      <div className="contact_container">
        <p>
          EMAIL:<span>vishnuchandran2532@gmail.com</span>
        </p>
        <p>
          GITHUB:<span>@vishnu857</span>
        </p>
        <div className="contact_icons">
          <a
            href="https://www.linkedin.com/in/balavishnu-b-872697202/"
            target="_blank"
          >
            <IconButton color="success">
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/vishnu._.25_/" target="_blank">
            <IconButton color="success">
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
