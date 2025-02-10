import React from "react";
import "./Foundation.css";

const Foundation = () => {
  return (
    <div className="foundation">
      <div className="container">
        <h1>From Management's Desk</h1>
        <div className="foundation-row">
          <div className="foundation-cards">
            <img
              src="https://griclub.sirv.com/uploads/crm_people/0033600000IgzoD_Marketing_Edited_Photo_2021-02-06_20-46-40.jpg"
              alt=""
              srcset=""
            />
            <div className="">
              <h3>Mr.Vinod Rohira</h3>
              <p>MD & CEO Commercial Real Estate</p>
              <br />
              <p>
                "In an ever-evolving business landscape, the demand for
                commercial space has witnessed remarkable growth. At Mindspace,
                we understand the evolving needs of businesses and are dedicated
                to providing spaces that cater to their requirements
                effectively."
              </p>
            </div>
          </div>
          <div className="foundation-cards">
            <img
              src="https://th-i.thgim.com/public/business/q9nsui/article67173424.ece/alternates/FREE_1200/ramesh%20nair.jpg"
              alt=""
              srcset=""
            />
            <div className="">
              <h3>Mr. Ramesh Nair</h3>
              <p>CEO Mindspace REIT</p>
              <br />
              <p>
                "Mindspace REIT stands as a testament to our commitment to
                excellence. With a relentless focus investment innovation, we
                continue to lead the way in the real estate investment
                opportunities."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
