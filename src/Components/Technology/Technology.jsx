import React from "react";
import "./Technology.css";
import TechImage from "../../Assets/Mask group (2).png";
import TechImage2 from "../../Assets/Mask group (3).png";

const Technology = () => {
  return (
    <div className="full-container">
      <div class="background-text">Solution</div>

      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">Technology & Innovation</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
                Leading the Way in <br /> Smart Workspace{" "}
                <span className="highlight"> Solutions</span>
              </h1>
              <p>
                We are at the forefront of technology innovation, enabling smart
                and efficient building operations and embracing digital
                solutions to enhance the workspace experience.
              </p>
            </div>

            <div className="btn">
              <button>Read More</button>
            </div>

            <div className="business-row">
              <div className="card">
                <div className="background-box"></div>
                <img src={TechImage} alt="About Section" className="launches-img"/>
                <h3>IBMS</h3>
              </div>
              <div className="card">
                <div className="background-box"></div>
                <img src={TechImage2} alt="About Section" className="launches-img"/>
                <h3>Digitalization initiative</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
