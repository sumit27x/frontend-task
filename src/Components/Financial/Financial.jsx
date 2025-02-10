import React from "react";
import "./Financial.css";

import FinancialIMG from "../../Assets/Mask group (6).png";

const Financial = () => {
  return (
    <div className="full-container">
      <div class="background-text">Foundation</div>
      <div className="container">
        <div className="row financial">
          <div className="left">
            <p className="small-heading">Financial Stability</p>
          </div>
          <div className="right" style={{ overflow: "visible" }}>
            <div className="">
              <div className="heading">
                <h1>
                A Strong  
                  <span className="highlight"> Foundation </span><br/>
                   for Your Business
                </h1>
                <p className="heading-p">
                Our half-yearly achievements and growth reflect our financial stability and commitment to excellence as we continue to provide a strong and reliable foundation for businesses to thrive.
                </p>
              </div>
            </div>

            <div  style={{ position: "relative" }}>
              <div className="nopadding">
                <div
                  className="financial-row"
                >
                  <div className="financial-card" >
                  <div className="card" style={{height:"100%"}}>
                    <div className="background-box"></div>
                    <img src={FinancialIMG} alt="About Section" className="fitImg"/>
                    <div className="sticky-content-box stickLeft ">
                      <p>Net Operating Income reached</p>
                      <h2>INR 9,457 Mn</h2>
                      <p>(growth of 15.5% YoY)</p>

                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
