import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Berke Çağrı Bozacı</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experiences</li>
            <li>Education</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="button n-button">CV</button>
      </div>
    </div>
  );
};

export default Navbar;
