import React from "react";
import "./Marketing.css";
import marketing1 from "../../Assets/Mask group (7).png";
import marketing2 from "../../Assets/Mask group (8).png";
import marketing3 from "../../Assets/Mask group (9).png";
import marketing4 from "../../Assets/Mask group (10).png";
import marketing5 from "../../Assets/Mask group (11).png";
import marketing6 from "../../Assets/Mask group (12).png";
import marketing7 from "../../Assets/Mask group (13).png";

const Marketing = () => {
  return (
    <div className="full-container">
      <div class="background-text">Wordplace</div>
      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">Marketing Updates</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
                Fostering Vibrant <span className="highlight"> Workplace<br/> Communities </span>
                 Across India
              </h1>
              <p>
                We've curated a variety of engaging events for our business park
                employees across India. Our commitment to fostering a vibrant
                community ensures a thriving and inclusive workspace.{" "}
              </p>
            </div>

            <div className="" style={{ position: "relative" }}>
              <div className="marketing-nopadding">
                <div className="marketing-grid">
                  <div className="grid-container">
                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing1} alt="About Section" />
                      <p>hello</p>
                    </div>
                  </div>

                  <div className="grid-container">
                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing2} alt="" srcset="" />
                      <p>hello</p>
                    </div>

                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing3} alt="" srcset="" />
                      <p>hello</p>
                    </div>
                  </div>

                  <div className="grid-container marketing-bottom" >
                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing4} alt="" srcset="" />
                      <p>hello</p>
                    </div>

                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing5} alt="" srcset="" />
                      <p>hello</p>
                    </div>
                  </div>

                  <div className="grid-container marketing-bottom">
                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing6} alt="" srcset="" />
                      <p>hello</p>
                    </div>

                    <div className="img-content">
                      <div className="background-boxs"></div>
                      <img src={marketing7} alt="" srcset="" />
                      <p>hello</p>
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

export default Marketing;
