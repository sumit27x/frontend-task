import React from "react";
import "./About.css";

import AboutImage from "../../Assets/about.png";

const About = () => {
  return (
    <div className="full-container">
      <div class="background-text">Standards</div>
      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">About us</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
              Setting New  <span className="highlight"> Standards</span><br/>
              in Workspace Excellence
              </h1>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="" style={{width:"100%"}}>
            <div className="card about-card" style={{height:"100%"}}>
              <div className="background-box"></div>
              <img
                src={AboutImage}
                alt="About Section"
                style={{ position: "relative", height:"100%" }}
                className="about-img"
              />
              <div className="sticky-content-box stickRight ">
                <h2>35+ MSF</h2>
                <p>Office Spaces</p>
              </div>
            </div>
          </div>
          <div className="" style={{width:"100%"}}>
            <div className="card about-content">
              <p>
                At Mindspace business parks, we take pride in our journey of
                growth and success. Over the years, we've evolved into a leading
                provider of innovative and flexible office spaces.
              </p>
              <br />
              <p>
                Our unwavering commitment to excellence has allowed us to
                redefine the workspace landscape, setting new standards in the
                industry.
              </p>
              <br />
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
