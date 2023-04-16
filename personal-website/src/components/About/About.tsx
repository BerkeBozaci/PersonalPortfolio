import React from "react";
import "./About.css";
import Pp from "../../img/pp.png";
import Background from "../../img/layered-waves-haikei.png";

const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div className="row">
        <div className="row-cols-1">
          <div className="col-12">
            <img src={Background} alt="" />
          </div>
        </div>
        <div className="row-cols-1">
          <div className="col-12">
            <img src={Pp} alt="" />
          </div>
        </div>
      </div>
      <div className="a-about">
        <span>
          I am a third grade{" "}
          <strong className="bold">Computer Engineering</strong> student and
          past semester started double major with{" "}
          <strong className="bold">
            Electrical & Electronical engineering
          </strong>
          .{" "}
        </span>
        <span>
          I always love to code and spend time for making researches about
          everything that you can imagine. Thanks to these unique specialites, I
          can learn quickly and improve myself.
        </span>
        <span>
          Due to my interest in coding, I am looking for job opportunities as a
          developer and the purpose of designing and coding this site is to
          express myself in my own style.
        </span>
      </div>
    </div>
  );
};

export default About;
