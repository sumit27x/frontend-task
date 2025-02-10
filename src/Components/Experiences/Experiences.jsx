import React from "react";
import "./Experiences.css";
import ExperiencesImg from "../../Assets/Mask group (1).png"
import { BsArrowRight } from "react-icons/bs";

const Experiences = () => {
  return (
    <div className="full-container experience">
      <div className="container">
        <div className=" experience-row">
          <div className="left-content">
            <p className="small-heading">Experiences at parks</p>
          </div>
          <div className="middle-content">
            <div className="heading">
              <h1>
                Workspace designed <br />
                for overall
                <span className="highlight"> well-being</span>
              </h1>
              <p>
                Mindspace business parks is excited to introduce upcoming
                projects that signify our dedication to offering exceptional
                office spaces.
              </p>
                          <div className="btn">
              <button>Read More</button>
            </div>
            </div>
          </div>
          <div className="right-content" style={{position:"relative"}}>
            <div className="floatImg slider" >
                <img src={ExperiencesImg} alt="" className=""/>
                 <div className="arrow">
                 <BsArrowRight className="experience-icon"/>
                 </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
