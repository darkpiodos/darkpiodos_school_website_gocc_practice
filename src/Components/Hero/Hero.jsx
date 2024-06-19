import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skillsm and experiences needed to escel in the dynamic
          field of education
        </p>
        <button className="btn">
          <Link
            to="programs"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMenu("program")}
          >
            Explore more <img src={dark_arrow} alt="dark arrow right" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
