import React from "react";
import "./ESG.css";

import ESGImage from "../../Assets/Mask group (1).png";

const ESG = () => {
  return (
    <div className="esg">
      <div className="full-container">
        <div class="background-text">Workspaces</div>
        <div className="container">
          <div class="title">
            <p className="small-heading">ESG</p>
            <div>
              <h1>
                Creating Sustainable <br />
                <span className="highlight"> Workspaces</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container title-bottom ">
        <div className="title-left">
          <div className="background-box"></div>
          <img src={ESGImage} alt="About Section" />
        </div>

        <div className="title-right">
          <div className="title-content">
            <p>
              Mindspace business parks is committed to Environmental, Social,
              and Governance initiatives. 
            </p>
            <br />
            <p>
            We've road-mapped our efforts towards
              achieving ESG goals, incorporating them into our events and HR
              practices, and creating a sustainable and responsible workspace.
            </p>
            <br />
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESG;
