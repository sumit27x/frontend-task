import React from "react";
import "./About.css";

import AboutImage from "../../Assets/about.png";

const About = () => {
  return (
    <div className="">
      <div className="full-container">
        <div class="background-text">Standards</div>
        <div className="container">
          <div class="about-row">
            <p className="small-heading">About us</p>
            <div>
              <h1>
                Setting New <span className="highlight"> Standards</span>
                <br /> in Workspace Excellence
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container about-bottom ">
        <div className="about-left">
          <div className="background-box"></div>
          <img src={AboutImage} alt="About Section" />
        </div>

        <div className="about-right">
          <div className="about-content">
            <p>
              At Mindspace business parks, we take pride in our journey of
              growth and success. Over the years, we've evolved into a leading
              provider of innovative and flexible office spaces.
            </p>
            <br />
            <p>
              Our unwavering commitment to excellence has allowed us to redefine
              the workspace landscape, setting new standards in the industry.
            </p>
            <br />
            <button>READ MORE</button>
          </div>
          <div className="about-container">
            <h1>35+ msf</h1>
            <p>Commerical Spaces</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
