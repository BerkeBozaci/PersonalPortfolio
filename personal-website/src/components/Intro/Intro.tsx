import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Mail from "../../img/mail.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Berke Çağrı Bozacı</span>
          <span>
            Undergraduate Computer & Electrical and Electronical Engineering
            Student
          </span>
        </div>

        <div className="i-icons">
          <a href="https://github.com/BerkeBozaci" target="_blank">
            <img src={Github} />
          </a>
          <a
            href="https://www.linkedin.com/in/berke-%C3%A7a%C4%9Fr%C4%B1-bozac%C4%B1-a70a19231/"
            target="_blank"
          >
            <img src={LinkedIn} />
          </a>
          <a
            href="mailto: bbozaci20@ku.edu.tr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Mail} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
