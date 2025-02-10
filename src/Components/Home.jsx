import React from 'react';
import HomeLogo from "../Assets/Mask group.png";
// import HomeLogo from "../Assets/Rectangle 44.png";

const Home = () => {
  return (
    <div>
      <img src={HomeLogo} alt="Home page "
       className='home-img'  style={{ width: '100%', height: 'auto',}}/>
    </div>
  )
}

export default Home
