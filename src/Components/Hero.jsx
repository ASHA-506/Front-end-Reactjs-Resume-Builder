import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="hero-overlay">

        <h1>
          Designed To Get Hired.
          <br />
          Your Skills, Your Story,
          <br />
          Your Next Job – All In One.
        </h1>
<Link to = {'/resume'}>
        <button className="hero-btn">
          Make your Resume with AI
        </button>
</Link>
      </div>

    </section>
  );
}

export default Hero;