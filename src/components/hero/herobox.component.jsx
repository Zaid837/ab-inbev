import React from "react";
import "./herobox.styles.css";
import Hero from "../../assets/images/hero.svg";

function HeroBox() {
  return (
    <div className="herobox ">
      <div className="header">
        <img src={Hero} alt="hero" className="hero" />
        <div className="header-text">
          <h3 className="favourite">Your favourite tunes</h3>
          <h5>All 🌝 and all 🌚</h5>
        </div>
      </div>
    </div>
  );
}

export default HeroBox;
