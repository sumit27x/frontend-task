import React from "react";
import "./Business.css";

const Business = () => {
  return (
    <div className="full-container">
      <div class="background-text">updates</div>
      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">Business Updates</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
                Media <span className="highlight"> Updates</span>
              </h1>
              <p>Stay Informed About Our Latest Developments</p>
            </div>

            <div className="business-row">
              <div className="main-card">
                <div className="card">
                  <div className="background-box"></div>
                  <div className="card-content">
                    <h2>The planned implosion of Building 7 & 8 at<span className="highlight"> Madhapur</span></h2>
                    <p>
                      A milestone in our journey, making way for new beginnings.
                    </p>
                  </div>
                </div>
                <div className="btn">
                  <button>Read More</button>
                </div>
              </div>

              <div className="main-card">
                <div className="card" >
                  <div className="background-box"></div>
                  <div className="card-content">
                    <h2>
                      Acquisition of 0.24 million sq. ft. at Commerzone,<span className="highlight">  Chennai</span>
                    </h2>
                    <p>Expanding our footprint to better serve our clients.</p>
                  </div>
                </div>
                <div className="btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
