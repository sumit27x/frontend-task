import React from "react";
import "./ESG.css";

import ESGImage from "../../Assets/Mask group (1).png";

const ESG = () => {
  return (
    <div className="full-container esg">
      <div class="background-text">Workspace</div>

      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">ESG</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
                Creating Sustainable <br />
                <span className="highlight"> Workspaces</span>
              </h1>
            </div>

            <div className="business-row">
              <div className="card">
                <div className="background-box"></div>
                <img src={ESGImage} alt="About Section" className="launches-img"/>
              </div>

              <div className="card">
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
      </div>
    </div>
  );
};

export default ESG;
