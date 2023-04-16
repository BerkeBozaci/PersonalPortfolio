import React from "react";
import "./Skill.css";

type Props = {
  title: string;
  icon: string;
  progress: number;
};

function Skill({ title, icon, progress }: Props) {
  return (
    <div className="skill">
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <h2>{title}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Skill;
