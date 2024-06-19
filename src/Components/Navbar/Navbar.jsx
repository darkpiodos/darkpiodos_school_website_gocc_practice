import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    // <nav className="container dark-nav">
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setMenu("home")}
            className={`menu-item ${menu === "home" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMenu("program")}
            className={`menu-item ${menu === "program" ? "active" : ""}`}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={() => setMenu("about")}
            className={`menu-item ${menu === "about" ? "active" : ""}`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMenu("campus")}
            className={`menu-item ${menu === "campus" ? "active" : ""}`}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => setMenu("testimonials")}
            className={`menu-item ${menu === "testimonials" ? "active" : ""}`}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon Nav Menu"
        className="menu-icon"
        onClick={toogleMenu}
      />
    </nav>
  );
};

export default Navbar;
