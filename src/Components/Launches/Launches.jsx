import React from 'react';
import "./Launches.css";

import Launches1 from "../../Assets/Mask group (4).png";
import Launches2 from "../../Assets/Mask group (5).png";

const Launches = () => {
  return (
    <div>
          <div className="full-container launches">
      <div class="background-text">Office</div>

      <div className="container">
        <div className="row">
          <div className="left">
            <p className="small-heading">New Launches</p>
          </div>
          <div className="right">
            <div className="heading">
              <h1>
              Innovative  
                <span className="highlight"> Office</span><br/>
                Spaces on the Horizon
              </h1>
              <p>
              Mindspace business parks is excited to introduce upcoming projects that signify our dedication to offering exceptional office spaces.
              </p>
            </div>

            {/* <div className="btn">
              <button>Read More</button>
            </div> */}

            <div className="business-row launches">
              <div className="card">
                <div className="background-box"></div>
                <img src={Launches1} alt="Launches-Image"  className='launches-img'/>
                <span className='toplabel'>WORLI</span>
                <h3>Mindspace Altimus</h3>
                <p>An address of distinction in the bustling heart of Mumbai.</p>
              </div>
              <div className="card">
                <div className="background-box"></div>
                <img src={Launches2} alt="Launches-Image" className='launches-img'/>
                <span className='toplabel'>POWAI</span>
                <div>

                <h3>Mindspace Cignus</h3>
                <p>Setting new standards for the Powai business community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Launches
