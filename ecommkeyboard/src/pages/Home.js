import React from 'react';
import { NavLink } from 'react-router-dom';
// import Slider from '../components/Slider';



const Home = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="navbar">
          {/* <div className="logo">
          <img src="./img/computer.png" className="logo" alt = "" width="125"/>
          </div> */}
          </div>
        </div>
        <div className="hero-box">
          <div className="hero-details">
            <h1 className="hero-heading">Match Your Style</h1>
            <p className="hero-desc">Buy Today!</p>
            <div className="btn-box">
              <NavLink to="/products" className="cta-btn demo"> Shop</NavLink>
            </div>
          </div>
          <div className="hero-image">
            <img src="./img/homeKeyboard.png" alt="hero" height="125"/>
          </div>
        </div>

    </section>
  )
}
export default Home;
